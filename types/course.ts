import { CategoryType } from "./category"

export interface Prerequisite {
  text: string
  level: "essential" | "recommended" | "helpful"
}

export interface Course {
  id: string
  title: string
  provider: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  category: CategoryType
  description: string
  topics: string[]
  link: string
  image: string
  format?: string
  prerequisites?: Prerequisite[]
}

