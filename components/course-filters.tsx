import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState } from 'react'
import { Filter, SlidersHorizontal } from 'lucide-react'
import { categoryDescriptions } from "@/types/category"

interface CourseFiltersProps {
  categories: string[]
  levels: string[]
  selectedLevel: string
  selectedCategory: string
  searchQuery: string
  onSearchChange: (value: string) => void
  onLevelChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onDurationChange: (value: [number, number]) => void
  onReset: () => void
  activeFiltersCount: number
}

export function CourseFilters({
  categories,
  levels,
  selectedLevel,
  selectedCategory,
  searchQuery,
  onSearchChange,
  onLevelChange,
  onCategoryChange,
  onDurationChange,
  onReset,
  activeFiltersCount,
}: CourseFiltersProps) {
  const [durationRange, setDurationRange] = useState<[number, number]>([0, 160])

  const handleDurationChange = (index: 0 | 1, value: number) => {
    const newRange = [...durationRange] as [number, number]
    if (index === 0) {
      // Prevent left thumb from crossing right thumb
      newRange[0] = Math.min(value, durationRange[1] - 10)
    } else {
      // Prevent right thumb from crossing left thumb
      newRange[1] = Math.max(value, durationRange[0] + 10)
    }
    setDurationRange(newRange)
    onDurationChange(newRange)
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            placeholder="Search by title, description, or provider..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Refine your course search with these filters
              </SheetDescription>
            </SheetHeader>
            <Separator className="my-4" />
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Level</label>
                <Select onValueChange={onLevelChange} value={selectedLevel}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="all">All Levels</SelectItem>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select onValueChange={onCategoryChange} value={selectedCategory}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-medium">Duration (hours)</label>
                <div className="px-2">
                  <div
                    className="relative pt-6 pb-2"
                    style={{ touchAction: 'none' }}
                  >
                    <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-primary/20 rounded-full" />
                    <div
                      className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-primary rounded-full"
                      style={{
                        left: `${(durationRange[0] / 160) * 100}%`,
                        right: `${100 - (durationRange[1] / 160) * 100}%`
                      }}
                    />
                    <input
                      type="range"
                      min={0}
                      max={160}
                      step={10}
                      value={durationRange[0]}
                      onChange={(e) => handleDurationChange(0, parseInt(e.target.value))}
                      className="absolute top-0 left-0 w-full h-8 appearance-none bg-transparent cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md"
                      style={{ zIndex: 1 }}
                    />
                    <input
                      type="range"
                      min={0}
                      max={160}
                      step={10}
                      value={durationRange[1]}
                      onChange={(e) => handleDurationChange(1, parseInt(e.target.value))}
                      className="absolute top-0 left-0 w-full h-8 appearance-none bg-transparent cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md"
                      style={{ zIndex: 2 }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{durationRange[0]}h</span>
                  <span className="font-medium">{durationRange[1]}h</span>
                </div>
              </div>
            </div>
            <SheetFooter className="mt-6">
              <Button variant="outline" onClick={onReset}>Reset Filters</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedLevel !== 'all' && (
            <Badge variant="secondary" className="bg-primary/10">
              Level: {selectedLevel}
              <Button
                variant="ghost"
                size="icon"
                className="ml-1 h-4 w-4 hover:bg-transparent"
                onClick={() => onLevelChange('all')}
              >
                ×
              </Button>
            </Badge>
          )}
          {selectedCategory !== 'all' && (
            <Badge variant="secondary" className="bg-primary/10">
              Category: {selectedCategory}
              <Button
                variant="ghost"
                size="icon"
                className="ml-1 h-4 w-4 hover:bg-transparent"
                onClick={() => onCategoryChange('all')}
              >
                ×
              </Button>
            </Badge>
          )}
          {(durationRange[0] > 0 || durationRange[1] < 160) && (
            <Badge variant="secondary" className="bg-primary/10">
              Duration: {durationRange[0]}h - {durationRange[1]}h
              <Button
                variant="ghost"
                size="icon"
                className="ml-1 h-4 w-4 hover:bg-transparent"
                onClick={() => {
                  setDurationRange([0, 160]);
                  onDurationChange([0, 160]);
                }}
              >
                ×
              </Button>
            </Badge>
          )}
        </div>
      )}
      {selectedCategory && (
        <div className="mt-2 text-sm text-muted-foreground">
          <p className="italic">
            {categoryDescriptions[selectedCategory as CategoryType]}
          </p>
        </div>
      )}
    </div>
  )
}

