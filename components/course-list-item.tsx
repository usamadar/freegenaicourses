import { Course } from "@/types/course"
import { Badge } from "@/components/ui/badge"
import { Clock, GraduationCap, ListChecks } from 'lucide-react'
import Link from "next/link"
import { LevelBadge } from "@/components/level-badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PrerequisitesLegend } from "@/components/prerequisites-legend"

interface CourseListItemProps {
  course: Course
}

export function CourseListItem({ course }: CourseListItemProps) {
  return (
    <div className="rounded-2xl border bg-card shadow-sm p-4 flex flex-col gap-3 w-full">
      {/* Badges and Prereqs */}
      <div className="flex flex-wrap gap-2 items-center mb-1">
        <LevelBadge level={course.level} />
        <Badge variant="outline">{course.category}</Badge>
        {course.prerequisites && course.prerequisites.length > 0 && (
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-1 text-xs border border-primary/40 rounded-md bg-background hover:bg-primary/5 text-primary"
              >
                <ListChecks className="h-4 w-4 text-primary" />
                Prereqs
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[70vh] max-w-full w-full rounded-t-2xl p-6">
              <SheetHeader>
                <SheetTitle>Course Prerequisites</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <span>Required Knowledge</span>
                  <PrerequisitesLegend />
                </div>
                <div className="space-y-4">
                  {course.prerequisites.map((prereq, index) => (
                    <div 
                      key={index} 
                      className="grid grid-cols-[12px_1fr] gap-3 items-start"
                    >
                      <div 
                        className={`
                          w-3 h-3 rounded-full shrink-0 mt-1.5
                          ${prereq.level === "essential" 
                            ? "bg-red-500" 
                            : prereq.level === "recommended" 
                              ? "bg-yellow-500" 
                              : "bg-blue-500"
                          }
                        `}
                      />
                      <p className="text-sm text-muted-foreground leading-normal">
                        {prereq.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
      {/* Title */}
      <h3 className="font-semibold text-lg text-left leading-tight mb-1">{course.title}</h3>
      {/* Provider & Duration */}
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-1">
        <div className="flex items-center gap-1">
          <GraduationCap className="h-4 w-4" />
          {course.provider}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {course.duration}
        </div>
      </div>
      {/* Description */}
      <p className="text-sm text-muted-foreground mb-1 text-left leading-snug">{course.description}</p>
      {/* Topics - horizontal scroll */}
      <div className="flex overflow-x-auto gap-2 pb-1 -mx-1 px-1">
        {course.topics.map((topic) => (
          <Badge 
            key={topic} 
            variant="secondary" 
            className="whitespace-nowrap bg-primary/5 text-primary/90 hover:bg-primary/10 transition-colors duration-300 text-xs px-2 py-1 rounded-lg"
          >
            {topic}
          </Badge>
        ))}
      </div>
      {/* Go to Course Link - right aligned, minimal space */}
      <div className="flex justify-end">
        <Link
          href={course.link}
          target="_blank"
          className="text-primary font-semibold text-sm hover:underline flex items-center gap-1 px-2 py-1"
        >
          Go to Course <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  )
} 