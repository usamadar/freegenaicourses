export type CategoryType = "Foundational" | "Comprehensive" | "Specialized" | "Systems";

export const categoryDescriptions: Record<CategoryType, string> = {
  "Foundational": "Courses that cover the basics and fundamental concepts. They focus on helping learners understand core ideas without diving too deep into code or advanced techniques.",
  "Comprehensive": "These courses offer a wide-ranging look at a subject, covering a broad scope of topics in depth. They combine theory and hands-on practice for a rounded experience.",
  "Specialized": "Courses that focus on particular areas or skill sets, like prompt engineering, specific architectures, or industry-focused applications.",
  "Systems": "Courses emphasizing infrastructure, engineering challenges, and large-scale deployment of AI. They cover distributed training, optimization, and technical implementation details."
}; 