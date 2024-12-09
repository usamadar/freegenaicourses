import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Course } from '@/types/course'

interface BookmarkStore {
  bookmarkedCourses: { [key: string]: boolean }
  completedCourses: { [key: string]: boolean }
  viewPreference: "grid" | "list"
  isHydrated: boolean
  toggleBookmark: (courseId: string) => void
  toggleComplete: (courseId: string) => void
  isBookmarked: (courseId: string) => boolean
  isCompleted: (courseId: string) => boolean
  setViewPreference: (view: "grid" | "list") => void
  setHydrated: () => void
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set, get) => ({
      bookmarkedCourses: {},
      completedCourses: {},
      viewPreference: "grid",
      isHydrated: false,
      toggleBookmark: (courseId: string) => {
        if (!get().isHydrated) return
        set((state) => ({
          ...state,
          bookmarkedCourses: {
            ...state.bookmarkedCourses,
            [courseId]: !state.bookmarkedCourses[courseId],
          },
        }))
      },
      toggleComplete: (courseId: string) => {
        if (!get().isHydrated) return
        set((state) => ({
          ...state,
          completedCourses: {
            ...state.completedCourses,
            [courseId]: !state.completedCourses[courseId],
          },
        }))
      },
      setViewPreference: (view: "grid" | "list") => {
        if (!get().isHydrated) return
        set((state) => ({
          ...state,
          viewPreference: view,
        }))
      },
      isBookmarked: (courseId: string) => get().isHydrated && !!get().bookmarkedCourses[courseId],
      isCompleted: (courseId: string) => get().isHydrated && !!get().completedCourses[courseId],
      setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: 'course-bookmarks',
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
)

