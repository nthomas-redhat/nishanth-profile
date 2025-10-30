import { Users, TrendingUp, Award } from "lucide-react"

export function LeadershipSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            PEOPLE LEADERSHIP <Award className="inline-block ml-2 h-10 w-10 text-yellow-500" />
          </h2>
          <p className="text-lg text-muted-foreground">Building and growing high-performing engineering teams</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Team Building from Zero</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Grew the OpenShift Data Foundation UI and Observability team from inception to{" "}
                  <strong className="text-foreground">15 engineers</strong>, promoting 10 team members and establishing
                  a culture of excellence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Team Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Led distributed teams across multiple time zones, coordinating with UX, Product Management, QA, and
                  development teams to deliver <strong className="text-foreground">14 software updates</strong> with{" "}
                  <strong className="text-foreground">98% on-time delivery</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mentorship & Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mentored junior engineers, reducing onboarding time by{" "}
                  <strong className="text-foreground">20%</strong> and aligning their contributions with organizational
                  goals through structured development programs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <Users className="h-24 w-24 mx-auto text-primary" />
              <div className="text-6xl font-bold text-foreground">15</div>
              <div className="text-xl font-medium text-muted-foreground">Engineers Managed</div>
              <div className="text-5xl font-bold text-foreground mt-6">10</div>
              <div className="text-xl font-medium text-muted-foreground">Team Members Promoted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
