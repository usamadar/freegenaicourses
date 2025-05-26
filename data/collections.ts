export interface CourseCollection {
  id: string
  title: string
  description: string
  courseIds: string[]
}

export const collections: CourseCollection[] = [
  {
    id: 'beginner-essentials',
    title: 'Beginner Essentials',
    description: 'Start here if you\'re new to generative AI.',
    courseIds: ['google-gen-ai', 'microsoft-gen-ai', 'deeplearning-ai']
  },
  {
    id: 'advanced-llms',
    title: 'Advanced LLMs',
    description: 'Deep dives into large language models and production systems.',
    courseIds: ['stanford-cs224n', 'deeplearning-llmops', 'fsdl-ai-product']
  },
  {
    id: 'trending',
    title: 'Trending Now',
    description: 'Popular courses our users love right now.',
    courseIds: ['freecodecamp-gen-ai', 'huggingface-nlp', 'ibm-gen-ai-data-scientists']
  }
]
