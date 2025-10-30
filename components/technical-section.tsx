import { Code2, Zap, BarChart3 } from "lucide-react"

export function TechnicalSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            TECHNICAL EXCELLENCE <Code2 className="inline-block ml-2 h-10 w-10 text-blue-500" />
          </h2>
          <p className="text-lg text-muted-foreground">Architecting scalable solutions and driving innovation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Microfrontend Architecture</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Spearheaded the UI overhaul from monolithic to microfrontend architecture, empowering teams with greater
              autonomy and boosting productivity by <strong className="text-foreground">30%</strong>.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">React</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Kubernetes</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">OpenShift</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">CI/CD & Quality</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Established robust code review protocols and integrated CI/CD practices, achieving a{" "}
              <strong className="text-foreground">30% reduction</strong> in software defects.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">DevOps</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Agile</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Jira</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Observability & Analytics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Led integration of advanced observability features using analytics and telemetry, reducing troubleshooting
              time by <strong className="text-foreground">40%</strong>.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Telemetry</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Analytics</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Monitoring</span>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">10,000+</div>
              <div className="text-muted-foreground">Clusters Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">$100M+</div>
              <div className="text-muted-foreground">Annual Revenue</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
