"use client"

import React, { useState, useEffect } from "react"
import { courses } from "@/data/courses"
import Hero from "@/components/hero"
import { CourseCard, CourseCardProps } from "@/components/course-card"
import { CourseFilters } from "@/components/course-filters"
import { Badge } from "@/components/ui/badge"
import { BookmarkedCourses } from "@/components/bookmarked-courses"
import { Separator } from "@/components/ui/separator"
import { useBookmarkStore } from "@/lib/store"
import { CompletedCourses } from "@/components/completed-courses"
import { ViewToggle } from "@/components/view-toggle"
import { CourseListItem } from "@/components/course-list-item"
import GettingStarted from "@/components/getting-started"
import { SlidersHorizontal } from 'lucide-react'
import { HydrationZustand } from "@/components/providers/hydration-provider"

const TABS = ["Beginner", "Intermediate", "Advanced"];

function getCoursesByLevel(level: string) {
  return courses.filter(c => c.level === level);
}

function getFeaturedCourses() {
  // For demo, pick the first 3 courses as featured
  return courses.slice(0, 3);
}

export default function CoursesDirectory() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("Beginner");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProvider, setSelectedProvider] = useState("all")
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [durationRange, setDurationRange] = useState<[number, number]>([0, 160])
  const { isBookmarked, isCompleted, isHydrated, viewPreference, setViewPreference } = useBookmarkStore()
  const [view, setView] = useState<"grid" | "list">(viewPreference)

  // Responsive: get all unique categories, levels, providers, topics
  const categories = Array.from(new Set(courses.map((course) => course.category)))
  const levels = Array.from(new Set(courses.map((course) => course.level)))
  const providers = Array.from(new Set(courses.map((course) => course.provider)))
  const topics = Array.from(new Set(courses.flatMap((course) => course.topics)))

  // Filtering logic
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = !search || (
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase()) ||
      course.provider.toLowerCase().includes(search.toLowerCase())
    )
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesProvider = selectedProvider === 'all' || course.provider === selectedProvider
    const matchesTopics = selectedTopics.length === 0 || course.topics.some(topic => selectedTopics.includes(topic))
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
    const courseDuration = parseDuration(course.duration)
    const matchesDuration = (
      courseDuration >= durationRange[0] && 
      courseDuration <= durationRange[1]
    )
    return matchesSearch && matchesLevel && matchesCategory && matchesProvider && matchesDuration && matchesTopics
  })

  const featured = getFeaturedCourses();
  const tabCourses = getCoursesByLevel(tab).filter((c: CourseCardProps["course"]) =>
    filteredCourses.includes(c)
  );

  const getActiveFiltersCount = () => {
    let count = 0
    if (selectedLevel !== "all") count++
    if (selectedCategory !== "all") count++
    if (selectedProvider !== "all") count++
    if (selectedTopics.length > 0) count++
    if (durationRange[0] > 0 || durationRange[1] < 160) count++
    return count
  }

  const resetFilters = () => {
    setSelectedLevel("all")
    setSelectedCategory("all")
    setSelectedProvider("all")
    setSelectedTopics([])
    setDurationRange([0, 160])
  }

  const handleViewChange = (newView: "grid" | "list") => {
    setView(newView)
    setViewPreference(newView)
  }

  useEffect(() => {
    if (isHydrated) {
      setView(viewPreference)
    }
  }, [isHydrated, viewPreference])

  // Responsive top bar with icons
  // Show search results section if searching
  return (
    <HydrationZustand>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
        <Hero
          onSearch={setSearch}
          BookmarkedCourses={<BookmarkedCourses courses={courses} />}
          CompletedCourses={<CompletedCourses courses={courses} />}
          onShowFilters={() => setShowFilters(true)}
          activeFiltersCount={getActiveFiltersCount()}
        />
        <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
          {/* Filter modal */}
          {showFilters && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-primary" onClick={() => setShowFilters(false)}>&times;</button>
                <CourseFilters
                  categories={categories}
                  levels={levels}
                  providers={providers}
                  topics={topics}
                  selectedLevel={selectedLevel}
                  selectedCategory={selectedCategory}
                  selectedProvider={selectedProvider}
                  selectedTopics={selectedTopics}
                  searchQuery={search}
                  onSearchChange={setSearch}
                  onLevelChange={setSelectedLevel}
                  onCategoryChange={setSelectedCategory}
                  onProviderChange={setSelectedProvider}
                  onTopicsChange={setSelectedTopics}
                  onDurationChange={setDurationRange}
                  onReset={resetFilters}
                  activeFiltersCount={getActiveFiltersCount()}
                  onShowChange={() => setShowFilters(false)}
                  showFilter={showFilters ? "open" : "closed"}
                />
              </div>
            </div>
          )}
          {/* Search Results Section */}
          {search && (
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h2 className="text-2xl font-bold text-[hsl(var(--heading-secondary))]">Search Results</h2>
                <button
                  className="text-sm text-primary underline hover:text-green-600"
                  onClick={() => setSearch("")}
                >
                  Clear Search
                </button>
              </div>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {filteredCourses.length > 0 ? filteredCourses.map((course: CourseCardProps["course"]) => (
                  <CourseCard key={course.id} course={course} />
                )) : (
                  <div className="col-span-full text-center text-muted-foreground py-12">
                    <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                    <p>Try a different search or adjust your filters.</p>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* Featured Courses (hide if searching) */}
          {!search && <>
            <div className="rounded-2xl bg-primary/5 p-4 md:p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--heading-secondary))]">Featured Courses</h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-2">
                {featured.map((course: CourseCardProps["course"]) => (
                  <div key={course.id} className="scale-95 md:scale-90 lg:scale-90 xl:scale-90 transition-transform">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>
            {/* Visual divider */}
            <div className="flex items-center gap-4 mb-8">
              <Separator className="flex-1 h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />
              <span className="text-lg font-semibold text-muted-foreground tracking-wide uppercase">All Courses</span>
              <Separator className="flex-1 h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />
            </div>
            {/* Tabs */}
            <div className="mb-6 flex gap-2 sm:gap-4 overflow-x-auto scrollbar-thin border-b border-gray-200">
              {TABS.map(t => (
                <button
                  key={t}
                  className={`px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold transition-colors border-b-2 ${tab === t ? 'border-green-500 text-green-700 bg-green-50' : 'border-transparent text-gray-500 hover:text-green-600 hover:bg-green-50'}`}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            {/* Tabbed Courses */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {tabCourses.length > 0 ? tabCourses.map((course: CourseCardProps["course"]) => (
                <CourseCard key={course.id} course={course} />
              )) : (
                <div className="col-span-full text-center text-muted-foreground py-12">
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p>Try a different tab or adjust your filters.</p>
                </div>
              )}
            </div>
          </>}
        </div>
        <footer className="mt-16 py-8 border-t bg-white/80 text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-6 mb-2">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
          <div className="flex justify-center gap-4 mb-2">
            <a href="#" aria-label="Twitter" className="hover:text-green-600"><svg width="20" height="20" fill="currentColor"><path d="M20 3.924c-.735.326-1.523.547-2.35.646a4.11 4.11 0 0 0 1.804-2.27 8.19 8.19 0 0 1-2.605.996A4.104 4.104 0 0 0 9.85 7.03a11.65 11.65 0 0 1-8.457-4.287a4.104 4.104 0 0 0 1.27 5.477a4.073 4.073 0 0 1-1.858-.513v.052a4.104 4.104 0 0 0 3.292 4.022a4.09 4.09 0 0 1-1.853.07a4.107 4.107 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 17.548a11.616 11.616 0 0 0 6.29 1.844c7.547 0 11.675-6.155 11.675-11.49c0-.175-.004-.349-.012-.522A8.18 8.18 0 0 0 20 3.924z"/></svg></a>
            <a href="#" aria-label="GitHub" className="hover:text-green-600"><svg width="20" height="20" fill="currentColor"><path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489c.5.092.682-.217.682-.482c0-.237-.009-.868-.014-1.703c-2.782.604-3.369-1.342-3.369-1.342c-.454-1.153-1.11-1.461-1.11-1.461c-.908-.62.069-.608.069-.608c1.004.07 1.532 1.032 1.532 1.032c.892 1.528 2.341 1.087 2.91.832c.092-.646.35-1.087.636-1.338c-2.22-.252-4.555-1.11-4.555-4.943c0-1.091.39-1.984 1.029-2.683c-.103-.253-.446-1.27.098-2.647c0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 10 5.8c.85.004 1.705.115 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025c.546 1.377.202 2.394.1 2.647c.64.699 1.028 1.592 1.028 2.683c0 3.842-2.338 4.687-4.566 4.935c.359.309.678.92.678 1.855c0 1.338-.012 2.419-.012 2.749c0 .267.18.577.688.48C17.138 18.162 20 14.418 20 10c0-5.523-4.477-10-10-10z"/></svg></a>
            <a href="#" aria-label="Instagram" className="hover:text-green-600"><svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="3.5"/><path d="M14.829 2.588A4.992 4.992 0 0 0 10 1.5a4.992 4.992 0 0 0-4.829 1.088A4.992 4.992 0 0 0 1.5 10c0 1.326.515 2.56 1.471 3.512A4.992 4.992 0 0 0 10 18.5a4.992 4.992 0 0 0 4.829-1.088A4.992 4.992 0 0 0 18.5 10c0-1.326-.515-2.56-1.471-3.512A4.992 4.992 0 0 0 10 1.5zm0 1.414A3.492 3.492 0 0 1 17 10a3.492 3.492 0 0 1-2.171 3.088A3.492 3.492 0 0 1 10 17a3.492 3.492 0 0 1-3.088-2.171A3.492 3.492 0 0 1 3 10a3.492 3.492 0 0 1 2.171-3.088A3.492 3.492 0 0 1 10 3a3.492 3.492 0 0 1 3.088 2.171A3.492 3.492 0 0 1 17 10a3.492 3.492 0 0 1-2.171 3.088A3.492 3.492 0 0 1 10 17a3.492 3.492 0 0 1-3.088-2.171A3.492 3.492 0 0 1 3 10a3.492 3.492 0 0 1 2.171-3.088A3.492 3.492 0 0 1 10 3zm4.25 1.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0z"/></svg></a>
          </div>
          <div>©2024 FreeGenAICourses. All rights reserved.</div>
        </footer>
      </div>
    </HydrationZustand>
  )
}

