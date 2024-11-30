import Image from "next/image"
import Link from "next/link"
import { Clock, GraduationCap, Layout, Bookmark } from 'lucide-react'
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
  const { toggleBookmark, isBookmarked, bookmarkedCourses } = useBookmarkStore()
  const bookmarked = isBookmarked(course.id)

  // Add hydration state tracking
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Debug logging
  useEffect(() => {
    console.log('-------- CourseCard Debug --------')
    console.log('Course ID:', course.id)
    console.log('Hydrated:', isHydrated)
    console.log('Bookmarked value:', bookmarked)
    console.log('BookmarkedCourses state:', bookmarkedCourses)
    console.log('LocalStorage:', localStorage.getItem('course-bookmarks'))
    console.log('--------------------------------')
  }, [course.id, bookmarked, bookmarkedCourses, isHydrated])

  // Don't show filled state until hydrated
  const showFilled = isHydrated && bookmarked

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative h-[200px] w-full group">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={() => toggleBookmark(course.id)}
          aria-label={showFilled ? "Remove from bookmarks" : "Add to bookmarks"}
        >
          <Bookmark 
            data-bookmarked={showFilled}
            className={`h-4 w-4 ${showFilled ? "fill-primary" : ""}`} 
          />
        </Button>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{course.category}</Badge>
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

