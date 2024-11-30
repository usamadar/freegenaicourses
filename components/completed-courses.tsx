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
import { Check } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"

interface CompletedCoursesProps {
  courses: Course[]
}

export function CompletedCourses({ courses }: CompletedCoursesProps) {
  const { completedCourses } = useBookmarkStore()
  const completedCoursesList = courses.filter(
    (course) => completedCourses[course.id]
  )

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Check className="h-4 w-4" />
          {completedCoursesList.length > 0 && (
            <span className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              {completedCoursesList.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>Completed Courses</SheetTitle>
          <SheetDescription>
            Courses you have marked as completed
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
          {completedCoursesList.length > 0 ? (
            <div className="mt-8 grid gap-4">
              {completedCoursesList.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="mt-8 text-center text-muted-foreground">
              <p>No completed courses yet</p>
              <p className="text-sm">Mark courses as complete by clicking the check icon on any course card</p>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
} 