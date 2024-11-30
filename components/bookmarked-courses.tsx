import { Course } from "@/types/course"
import { CourseCard } from "./course-card"
import { useBookmarkStore } from "@/lib/store"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Bookmark } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"

interface BookmarkedCoursesProps {
  courses: Course[]
}

export function BookmarkedCourses({ courses }: BookmarkedCoursesProps) {
  const { bookmarkedCourses } = useBookmarkStore()
  const bookmarkedCoursesList = courses.filter(
    (course) => bookmarkedCourses[course.id]
  )

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Bookmark className="h-4 w-4" />
          Bookmarked Courses
          {bookmarkedCoursesList.length > 0 && (
            <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              {bookmarkedCoursesList.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>Bookmarked Courses</SheetTitle>
          <SheetDescription>
            Your saved courses for later reference
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
          {bookmarkedCoursesList.length > 0 ? (
            <div className="mt-8 grid gap-4">
              {bookmarkedCoursesList.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="mt-8 text-center text-muted-foreground">
              <p>No bookmarked courses yet</p>
              <p className="text-sm">Save courses by clicking the bookmark icon on any course card</p>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

