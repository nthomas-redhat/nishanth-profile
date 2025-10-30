import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section className="border-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight md:text-4xl">Education</h2>

          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                Master of Computer Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground md:text-lg">Bangalore University</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
