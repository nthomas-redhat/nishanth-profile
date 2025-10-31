import { Github, Heart, Users2 } from "lucide-react"

export function OpenSourceSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            OPEN SOURCE CONTRIBUTION <Github className="inline-block ml-2 h-10 w-10" />
          </h2>
          <p className="text-lg text-muted-foreground">Contributing to the open-source community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-950 dark:to-blue-950 rounded-2xl p-6 md:p-8">
            <div className="space-y-4">
              <div className="text-center mb-4">
                <Github className="h-12 w-12 mx-auto text-foreground" />
                <h3 className="text-lg font-semibold text-foreground mt-3">Key Projects</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
                  <div className="font-semibold text-sm text-foreground">OpenShift Data Foundation</div>
                  <div className="text-xs text-muted-foreground">Software-defined storage for containers</div>
                </div>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
                  <div className="font-semibold text-sm text-foreground">Tendrl</div>
                  <div className="text-xs text-muted-foreground">Storage Management Platform</div>
                </div>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
                  <div className="font-semibold text-sm text-foreground">Gluster</div>
                  <div className="text-xs text-muted-foreground">Software Defined Storage</div>
                </div>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
                  <div className="font-semibold text-sm text-foreground">Ceph</div>
                  <div className="text-xs text-muted-foreground">Software Defined Storage</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Leadership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Played a pivotal role in the open-source community by contributing to governance discussions,
                  streamlining developer workflows, and fostering transparency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Collaborated with distributed teams worldwide to establish project direction, prioritize objectives,
                  and align technical roadmaps with business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
