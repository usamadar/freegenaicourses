import { Metadata } from 'next'
import { courses } from "@/data/courses"

// Helper function to get unique values
const getUnique = (arr: string[]) => Array.from(new Set(arr))

// Generate course statistics
const courseStats = {
  total: courses.length,
  providers: getUnique(courses.map(c => c.provider)),
  topics: getUnique(courses.flatMap(c => c.topics)),
  levels: getUnique(courses.map(c => c.level)),
  categories: getUnique(courses.map(c => c.category))
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.freegenaicourses.com'),
  title: {
    default: "Free Gen AI Courses | Learn Generative AI and Prompt Engineering",
    template: "%s | Free Gen AI Courses"
  },
  description: `Discover our collection of ${courseStats.total} free Generative AI courses from top providers like ${
    courseStats.providers.slice(0, 4).join(', ')
  }. Learn ${courseStats.topics.slice(0, 5).join(', ')} and more.`,
  keywords: [
    "generative AI courses",
    "free AI courses", 
    "prompt engineering",
    "ChatGPT courses",
    "AI learning",
    "machine learning courses",
    "DeepLearning.AI",
    "OpenAI courses",
    "artificial intelligence education",
    "LLM training",
    "AI certification"
  ],
  authors: [{ 
    name: "Free Gen AI Courses Directory",
    url: "https://www.freegenaicourses.com"
  }],
  creator: "Free Gen AI Courses Directory",
  publisher: "Free Gen AI Courses Directory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.freegenaicourses.com",
    title: "Free Gen AI Courses | Learn Generative AI and Prompt Engineering",
    description: `Browse ${courseStats.total} free AI courses across ${courseStats.levels.join(', ')} levels. Learn from ${courseStats.providers.slice(0, 3).join(', ')} and more.`,
    siteName: "Free Gen AI Courses",
    alternateLocale: ["en_GB"],
    images: [{
      url: "https://www.freegenaicourses.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Free Gen AI Courses Directory",
      type: "image/jpeg"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Gen AI Courses | Learn Generative AI and Prompt Engineering",
    description: `Discover ${courseStats.total} free AI courses from leading providers. Topics include ${courseStats.topics.slice(0, 3).join(', ')} and more.`,
    images: ["https://www.freegenaicourses.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.freegenaicourses.com",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  },
  other: {
    'course-count': String(courseStats.total),
    'course-providers': courseStats.providers.join(', '),
    'course-topics': courseStats.topics.join(', '),
    'course-levels': courseStats.levels.join(', '),
    'course-categories': courseStats.categories.join(', '),
    'courses': JSON.stringify(courses.map(course => ({
      id: course.id,
      title: course.title,
      provider: course.provider,
      level: course.level,
      category: course.category,
      duration: course.duration
    })))
  }
} 