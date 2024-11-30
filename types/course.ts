export type Course = {
  id: string
  title: string
  provider: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
  category: string
  description: string
  topics: string[]
  link: string
  image: string
}

