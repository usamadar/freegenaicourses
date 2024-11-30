import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
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
        set((state) => {
          const newState = {
            bookmarkedCourses: {
              ...state.bookmarkedCourses,
              [courseId]: !state.bookmarkedCourses[courseId],
            },
          }
          console.log('Store state after toggle:', newState)
          return newState
        })
      },
      isBookmarked: (courseId: string) => {
        const state = get()
        const result = !!state.bookmarkedCourses[courseId]
        console.log('isBookmarked check:', { courseId, result, state })
        return result
      },
    }),
    {
      name: 'course-bookmarks',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        console.log('Hydrated state:', state)
      },
    }
  )
)

