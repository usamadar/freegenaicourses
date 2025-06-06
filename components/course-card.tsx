import Image from "next/image"
import Link from "next/link"
import { Clock, GraduationCap, Layout, Bookmark, Check, Video, Info, AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Course, Prerequisite } from "@/types/course"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useBookmarkStore } from "@/lib/store"
import { categoryDescriptions } from "@/types/category"
import { CategoryType } from "@/types/category"
import { PrerequisitesLegend } from "@/components/prerequisites-legend"
import { LevelBadge } from "@/components/level-badge"

export type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const { toggleBookmark, isBookmarked, toggleComplete, isCompleted } = useBookmarkStore()
  const bookmarked = isBookmarked(course.id)
  const completed = isCompleted(course.id)

  const [showTooltip, setShowTooltip] = useState(false)

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleBookmark(course.id)
    
    window.analytics.track('Course Bookmarked', {
      courseId: course.id,
      courseTitle: course.title,
      courseProvider: course.provider,
      courseLevel: course.level,
      courseCategory: course.category,
      action: bookmarked ? 'unbookmark' : 'bookmark'
    })
  }

  const handleCompleteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleComplete(course.id)

    window.analytics.track('Course Completion Toggled', {
      courseId: course.id,
      courseTitle: course.title,
      courseProvider: course.provider,
      courseLevel: course.level,
      courseCategory: course.category,
      action: completed ? 'uncomplete' : 'complete'
    })
  }

  const handleLearnMoreClick = () => {
    console.log("Course Link Clicked")
    window.analytics.track('Course Link Clicked', {
      courseId: course.id,
      courseTitle: course.title,
      courseProvider: course.provider,
      courseLevel: course.level,
      courseCategory: course.category,
      courseUrl: course.link
    })
  }

  const renderPrerequisites = (prerequisites?: Prerequisite[]) => {
    if (!prerequisites?.length) return null;

    return (
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          <span>Prerequisites</span>
          <PrerequisitesLegend />
        </div>
        <div className="space-y-2.5">
          {prerequisites.map((prereq, index) => (
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
    );
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/95 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <div className="relative h-[200px] w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`
              bg-white/90 backdrop-blur-sm transition-all duration-300
              ${completed 
                ? "bg-primary hover:bg-primary/90 text-white" 
                : "hover:bg-primary/10 hover:text-primary"
              }
            `}
            onClick={handleCompleteClick}
          >
            <Check className={`h-4 w-4 transition-colors duration-300 ${
              completed ? "text-white" : "text-muted-foreground"
            }`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`
              bg-white/90 backdrop-blur-sm transition-all duration-300
              ${bookmarked 
                ? "bg-primary hover:bg-primary/90 text-white" 
                : "hover:bg-primary/10 hover:text-primary"
              }
            `}
            onClick={handleBookmarkClick}
          >
            <Bookmark className={`h-4 w-4 transition-colors duration-300 ${
              bookmarked ? "text-white fill-white" : "text-muted-foreground"
            }`} />
          </Button>
        </div>
      </div>
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-2">
              <LevelBadge level={course.level} />
              <Badge variant="outline">{course.category}</Badge>
            </div>
            <TooltipProvider>
              <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent touch-manipulation"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setShowTooltip(!showTooltip)
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault()
                      setShowTooltip(!showTooltip)
                    }}
                  >
                    <Info className="h-3 w-3 text-muted-foreground hover:text-primary transition-colors" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  className="max-w-[300px] text-sm bg-background border shadow-md"
                  sideOffset={5}
                  onClick={() => setShowTooltip(false)}
                >
                  <div className="p-2">
                    {categoryDescriptions[course.category]}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <CardTitle className="font-outfit text-xl font-semibold tracking-tight text-[hsl(var(--text-primary))] group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
          {course.title}
        </CardTitle>
        <CardDescription className="flex items-center gap-1 text-[hsl(var(--text-secondary))]">
          <GraduationCap className="h-4 w-4" />
          {course.provider}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {course.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
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
        {course.level !== "Beginner" && renderPrerequisites(course.prerequisites)}
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[hsl(var(--text-secondary))]">
          <Clock className="h-4 w-4" />
          {course.duration}
        </div>
        <button
          onClick={() => {
            handleLearnMoreClick();
            window.open(course.link, '_blank');
          }}
          className="group text-sm font-medium text-primary hover:text-primary/80"
        >
          <span className="inline-flex items-center gap-2 transform transition-all duration-300 group-hover:translate-x-1">
            Go to Course →
          </span>
        </button>
      </CardFooter>
    </Card>
  )
}

