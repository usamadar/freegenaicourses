import { Badge } from "@/components/ui/badge"

interface LevelBadgeProps {
  level: "Beginner" | "Intermediate" | "Advanced"
}

export function LevelBadge({ level }: LevelBadgeProps) {
  return (
    <Badge 
      className={`
        transition-colors duration-300
        ${level === "Beginner" ? "bg-[hsl(var(--level-beginner))] text-white hover:opacity-90" : ""}
        ${level === "Intermediate" ? "bg-[hsl(var(--level-intermediate))] text-black hover:opacity-90" : ""}
        ${level === "Advanced" ? "bg-[hsl(var(--level-advanced))] text-white hover:opacity-90" : ""}
      `}
    >
      {level}
    </Badge>
  )
} 