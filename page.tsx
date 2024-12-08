"use client"

import { useState } from "react"
import { courses } from "@/data/courses"
import { CourseCard } from "@/components/course-card"
import { CourseFilters } from "@/components/course-filters"
import { Badge } from "@/components/ui/badge"
import { BookmarkedCourses } from "@/components/bookmarked-courses"
import { Separator } from "@/components/ui/separator"
import { useBookmarkStore } from "@/lib/store"
import { HydrationZustand } from "@/components/providers/hydration-provider"
import { CompletedCourses } from "@/components/completed-courses"
import Link from "next/link"

export default function CoursesDirectory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [durationRange, setDurationRange] = useState<[number, number]>([0, 160])
  const { isBookmarked, isCompleted, isHydrated } = useBookmarkStore()

  const parseDuration = (duration: string): number => {
    if (duration.includes("-")) {
      const [min, max] = duration.split("-").map(d => parseInt(d))
      return (min + max) / 2
    }
    if (duration.includes("minutes")) {
      return parseInt(duration) / 60
    }
    return parseInt(duration)
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (selectedLevel !== "all") count++
    if (selectedCategory !== "all") count++
    if (durationRange[0] > 0 || durationRange[1] < 160) count++
    return count
  }

  const resetFilters = () => {
    setSelectedLevel("all")
    setSelectedCategory("all")
    setDurationRange([0, 160])
    setSearchQuery("")
  }

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = !searchQuery || (
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.provider.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const matchesLevel = selectedLevel === 'all' || 
      course.level === selectedLevel

    const matchesCategory = selectedCategory === 'all' || 
      course.category === selectedCategory

    const matchesDuration = !course.durationInHours || (
      course.durationInHours >= durationRange[0] && 
      course.durationInHours <= durationRange[1]
    )

    return matchesSearch && matchesLevel && matchesCategory && matchesDuration
  })

  const categories = Array.from(new Set(courses.map((course) => course.category)))
  const levels = Array.from(new Set(courses.map((course) => course.level)))

  const coursesByLevel = {
    Beginner: filteredCourses.filter(course => course.level === "Beginner"),
    Intermediate: filteredCourses.filter(course => course.level === "Intermediate"),
    Advanced: filteredCourses.filter(course => course.level === "Advanced")
  }

  return (
    <HydrationZustand>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
        <div className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  Free GenAI Course Directory
                </h1>
                <p className="mt-2 text-lg text-[hsl(var(--text-secondary))]">
                  Discover high-quality free generative AI courses to advance your skills
                </p>
              </div>
              <div className="flex gap-2">
                <BookmarkedCourses courses={courses} />
                <CompletedCourses courses={courses} />
              </div>
            </div>
            <Separator className="my-6" />
            <CourseFilters
              categories={categories}
              levels={levels}
              selectedLevel={selectedLevel}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onLevelChange={setSelectedLevel}
              onCategoryChange={setSelectedCategory}
              onDurationChange={setDurationRange}
              onReset={resetFilters}
              activeFiltersCount={getActiveFiltersCount()}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50 pointer-events-none" />
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-medium tracking-tight text-[hsl(var(--text-secondary))]">
              Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            </h2>
            {getActiveFiltersCount() > 0 && (
              <button
                onClick={resetFilters}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Clear all filters
              </button>
            )}
          </div>

          {Object.entries(coursesByLevel).map(([level, levelCourses]) => 
            levelCourses.length > 0 && (
              <div key={level} className="mb-12">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="section-title text-3xl font-semibold tracking-tight">
                    {level}
                  </h2>
                  <Badge 
                    variant="secondary" 
                    className="text-sm font-medium px-3 bg-primary/10 text-primary"
                  >
                    {levelCourses.length} course{levelCourses.length !== 1 ? 's' : ''}
                  </Badge>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {levelCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            )
          )}

          {filteredCourses.length === 0 && (
            <div className="mt-8 rounded-lg border border-dashed p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 text-sm text-primary hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </HydrationZustand>
  )
}

