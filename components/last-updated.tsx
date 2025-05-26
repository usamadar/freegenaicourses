"use client"

export default function LastUpdated() {
  const formattedDate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <p className="mt-2 text-sm text-muted-foreground">
      Last Updated: {formattedDate}
    </p>
  )
}
