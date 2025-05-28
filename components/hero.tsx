import React, { useState, FormEvent } from "react"
import { SlidersHorizontal } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface HeroProps {
  onSearch: (query: string) => void
  BookmarkedCourses: React.ReactNode
  CompletedCourses: React.ReactNode
  onShowFilters: () => void
  activeFiltersCount: number
}

const Hero: React.FC<HeroProps> = ({ onSearch, BookmarkedCourses, CompletedCourses, onShowFilters, activeFiltersCount }) => {
  const [query, setQuery] = useState("");
  return (
    <div className="relative mx-auto my-8 max-w-4xl rounded-2xl bg-gradient-to-br from-primary/80 via-primary/40 to-background/80 p-4 sm:p-10 shadow-lg flex flex-col items-center text-center">
      <div className="absolute right-4 top-4 flex gap-2 z-10 sm:right-8 sm:top-8">
        {BookmarkedCourses}
        {CompletedCourses}
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg mt-12 sm:mt-0">Unlock the Power of AI with <span className='text-green-300'>FreeGenAICourses</span></h1>
      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl">Explore a wide range of AI courses designed to help you master artificial intelligence, machine learning, and data science. Start learning today and transform your career.</p>
      <form
        className="w-full max-w-xl mx-auto flex flex-col gap-2 sm:flex-row sm:gap-0 shadow-md"
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSearch(query);
        }}
      >
        <div className="flex flex-row w-full">
          <input
            type="text"
            className="flex-1 px-4 py-3 text-lg outline-none bg-white border border-gray-200 rounded-l-2xl rounded-r-none sm:rounded-2xl sm:rounded-r-none"
            placeholder="What do you want to learn? (e.g. machine learning)"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={onShowFilters}
                  aria-label="Filters"
                  className="flex items-center justify-center px-4 border-t border-b border-l border-gray-200 bg-white text-primary hover:bg-primary/10 transition-colors rounded-r-2xl sm:rounded-none"
                  style={{ minWidth: 48 }}
                >
                  <SlidersHorizontal className="h-5 w-5" />
                  {activeFiltersCount > 0 && (
                    <span className="ml-1 bg-green-500 text-white rounded-full px-2 py-0.5 text-xs">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent>Filters</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg transition-colors rounded-2xl sm:w-auto sm:rounded-r-2xl sm:rounded-l-none sm:mt-0 mt-2"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Hero;
