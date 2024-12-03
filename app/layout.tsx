import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.freegenaicourses.com'),
  title: {
    default: "Free Gen AI Courses | Learn Generative AI and Prompt Engineering",
    template: "%s | Free Gen AI Courses"
  },
  description: "Discover 15+ free, high-quality Generative AI courses from top providers like DeepLearning.AI, Google, Microsoft, and Stanford. Learn prompt engineering, LLMs, and AI applications.",
  keywords: ["generative AI courses", "free AI courses", "prompt engineering", "ChatGPT courses", "AI learning", "machine learning courses", "DeepLearning.AI", "OpenAI courses"],
  authors: [{ name: "Free Gen AI Courses Directory" }],
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
    description: "Discover 15+ free, high-quality Generative AI courses from top providers like DeepLearning.AI, Google, Microsoft, and Stanford. Learn prompt engineering, LLMs, and AI applications.",
    siteName: "Free Gen AI Courses",
    images: [{
      url: "https://www.freegenaicourses.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Free Gen AI Courses Directory"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Gen AI Courses | Learn Generative AI and Prompt Engineering",
    description: "Discover 15+ free, high-quality Generative AI courses from top providers like DeepLearning.AI, Google, Microsoft, and Stanford.",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NXNTWCLP');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXNTWCLP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
        <Script
          id="schema-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.freegenaicourses.com",
              "name": "Free Gen AI Courses",
              "description": "Discover high-quality generative AI courses to advance your skills",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.freegenaicourses.com?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}

