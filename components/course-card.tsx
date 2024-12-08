import Image from "next/image"
import Link from "next/link"
import { Clock, GraduationCap, Layout, Bookmark, Check, Video } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Course } from "@/types/course"
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

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const { toggleBookmark, isBookmarked, toggleComplete, isCompleted } = useBookmarkStore()
  const bookmarked = isBookmarked(course.id)
  const completed = isCompleted(course.id)

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
          <Badge 
            variant="outline" 
            className="bg-primary/10 border-primary/20 text-primary hover:bg-primary/20"
          >
            {course.category}
          </Badge>
          <Badge 
            variant="secondary"
            className={`
              transition-colors duration-300
              ${course.level === "Beginner" ? "bg-[hsl(var(--level-beginner))] text-white hover:opacity-90" : ""}
              ${course.level === "Intermediate" ? "bg-[hsl(var(--level-intermediate))] text-black hover:opacity-90" : ""}
              ${course.level === "Advanced" ? "bg-[hsl(var(--level-advanced))] text-white hover:opacity-90" : ""}
            `}
          >
            {course.level}
          </Badge>
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
        <p className="line-clamp-3 text-sm text-muted-foreground">
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

