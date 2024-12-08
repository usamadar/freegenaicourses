import { Info } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export function PrerequisitesLegend() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative z-20">
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
            className="max-w-[300px] text-sm bg-background border shadow-md z-50"
            sideOffset={5}
            onClick={() => setShowTooltip(false)}
          >
            <div className="space-y-3 p-1">
              <p className="font-medium text-sm text-foreground">Prerequisites Level:</p>
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
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
} 