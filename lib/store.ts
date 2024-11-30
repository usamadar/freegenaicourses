import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Course } from '@/types/course'

interface BookmarkStore {
  bookmarkedCourses: { [key: string]: boolean }
  toggleBookmark: (courseId: string) => void
  isBookmarked: (courseId: string) => boolean
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set, get) => ({
      bookmarkedCourses: {},
      toggleBookmark: (courseId: string) => {
        set((state) => ({
          bookmarkedCourses: {
            ...state.bookmarkedCourses,
            [courseId]: !state.bookmarkedCourses[courseId],
          },
        }))
      },
      isBookmarked: (courseId: string) => {
        return get().bookmarkedCourses[courseId] || false
      },
    }),
    {
      name: 'course-bookmarks',
      getStorage: () => localStorage,
    }
  )
)

