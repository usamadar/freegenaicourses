import LastUpdated from "./last-updated"

export default function Hero() {
  return (
    <div className="bg-primary/10 py-6 text-center rounded-b-lg">
      <h1 className="text-3xl font-bold tracking-tight">Find the best free generative AI courses in one place</h1>
      <p className="mt-2 text-muted-foreground text-base">Browse, bookmark, and track your progress with ease.</p>
      <LastUpdated />
    </div>
  )
}
