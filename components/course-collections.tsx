import { courses } from '@/data/courses'
import { collections } from '@/data/collections'
import { CourseCard } from './course-card'

export default function CourseCollections() {
  return (
    <div className="my-12 space-y-10">
      {collections.map(collection => {
        const items = courses.filter(c => collection.courseIds.includes(c.id))
        return (
          <div key={collection.id}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">{collection.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{collection.description}</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
