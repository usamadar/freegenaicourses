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
  }

  const handleCompleteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleComplete(course.id)
  }

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative h-[200px] w-full group">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white"
            onClick={handleCompleteClick}
            aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
          >
            <Check 
              className={`h-4 w-4 ${completed ? "text-green-600" : "text-muted-foreground"}`} 
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white"
            onClick={handleBookmarkClick}
            aria-label={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
          >
            <Bookmark 
              className={`h-4 w-4 ${bookmarked ? "fill-primary" : ""}`} 
            />
          </Button>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{course.category}</Badge>
            {course.format === "Video" && (
              <Video className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
          <Badge 
            variant="secondary"
            className={`
              ${course.level === "Beginner" ? "bg-green-100 text-green-800" : ""}
              ${course.level === "Intermediate" ? "bg-yellow-100 text-yellow-800" : ""}
              ${course.level === "Advanced" ? "bg-red-100 text-red-800" : ""}
            `}
          >
            {course.level}
          </Badge>
        </div>
        <CardTitle className="hover:text-primary">
          <Link href={course.link} target="_blank" rel="noopener noreferrer" className="break-words">
            {course.title}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center gap-1">
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
            <Badge key={topic} variant="secondary" className="bg-primary/10">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {course.duration}
        </div>
        <Link
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary hover:underline"
        >
          Learn More →
        </Link>
      </CardFooter>
    </Card>
  )
}

