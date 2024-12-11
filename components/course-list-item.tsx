import { Course } from "@/types/course"
import { Badge } from "@/components/ui/badge"
import { Clock, GraduationCap } from 'lucide-react'
import Link from "next/link"
import { LevelBadge } from "@/components/level-badge"

interface CourseListItemProps {
  course: Course
}

export function CourseListItem({ course }: CourseListItemProps) {
  return (
    <Link
      href={course.link}
      target="_blank"
      className="block p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:bg-accent/5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <LevelBadge level={course.level} />
            <Badge variant="outline">{course.category}</Badge>
          </div>
          <h3 className="font-medium text-lg mb-1 truncate">{course.title}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <GraduationCap className="h-4 w-4" />
              {course.provider}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{course.description}</p>
        </div>
      </div>
    </Link>
  )
} 