import { Info } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function PrerequisitesLegend() {
  const [open, setOpen] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <div className="relative z-20 inline-block">
      <Button
        variant="ghost"
        size="icon"
        className="h-4 w-4 p-0 hover:bg-transparent touch-manipulation"
        type="button"
        tabIndex={0}
        aria-label="Show prerequisites legend"
        onClick={e => {
          e.stopPropagation();
          setOpen((prev) => !prev)
        }}
      >
        <Info className="h-3 w-3 text-muted-foreground hover:text-primary transition-colors" />
      </Button>
      {open && (
        <div
          ref={popoverRef}
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-background border shadow-md rounded-lg max-w-[300px] w-max text-sm p-4 z-50"
        >
          <p className="font-medium text-sm text-foreground mb-2">Prerequisites Level:</p>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-sm text-foreground">Essential</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="text-sm text-foreground">Recommended</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm text-foreground">Helpful</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 