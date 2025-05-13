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
import { Button } from "@/components/ui/button"
import { PrerequisitesLegend } from "@/components/prerequisites-legend"

interface CourseListItemProps {
  course: Course
}

export function CourseListItem({ course }: CourseListItemProps) {
  return (
    <div className="block p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:bg-accent/5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <LevelBadge level={course.level} />
            <Badge variant="outline">{course.category}</Badge>
            {course.prerequisites && course.prerequisites.length > 0 && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                  >
                    <ListChecks className="h-3 w-3 text-muted-foreground hover:text-primary transition-colors" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[80vh]">
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
                          className="grid grid-cols-[8px_1fr] gap-3 items-start"
                        >
                          <div 
                            className={`
                              w-2 h-2 rounded-full shrink-0 mt-1.5
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
          <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic) => (
              <Badge 
                key={topic} 
                variant="secondary" 
                className="bg-primary/5 text-primary/90 hover:bg-primary/10 transition-colors duration-300"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>
        <Link
          href={course.link}
          target="_blank"
          className="text-sm font-medium text-primary hover:text-primary/80"
        >
          <span className="inline-flex items-center gap-2 transform transition-all duration-300 hover:translate-x-1">
            Go to Course →
          </span>
        </Link>
      </div>
    </div>
  )
} 