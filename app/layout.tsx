import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
})

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
        <Script id="segment-analytics" strategy="beforeInteractive">
          {`
            !function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/"+key+"/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="uzYwJSsDVTUMCAhmc6uiSkLh1heqTvWa";;analytics.SNIPPET_VERSION="5.2.0";
            analytics.load("uzYwJSsDVTUMCAhmc6uiSkLh1heqTvWa");
            analytics.page();
          }}();
          `}
        </Script>
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
      <body className={`${inter.className} ${outfit.variable}`} suppressHydrationWarning>
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

