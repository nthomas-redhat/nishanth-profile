import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Users, Wrench, Award } from "lucide-react"

const skillCategories = [
  {
    title: "Leadership & Management",
    icon: Users,
    skills: [
      "Agile and Scrum Methodologies",
      "Strategic Technical Leadership",
      "People Management",
      "Cross-functional Team Management",
      "Project Management",
      "Stakeholder Communication",
      "Execution & Prioritization",
    ],
  },
  {
    title: "Technical Expertise",
    icon: Code2,
    skills: ["Microservices Architecture", "System Design", "Golang", "Java", "React", "Kubernetes", "Containers"],
  },
  {
    title: "Cloud & DevOps",
    icon: Wrench,
    skills: ["Cloud Technologies", "DevOps Integration", "CI/CD", "OpenShift", "AWS", "Operational Excellence"],
  },
  {
    title: "Certifications",
    icon: Award,
    skills: [
      "License to Lead - First-Line Manager (IBM)",
      "Disciplined Agile Senior Scrum Master (DASSM)",
      "US Patent: US9596135B1",
      "US Patent: US20170249088A1",
    ],
  },
]

export function SkillsSection() {
  return (
    <section className="border-b bg-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight md:text-4xl">Core Skills & Expertise</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="bg-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
