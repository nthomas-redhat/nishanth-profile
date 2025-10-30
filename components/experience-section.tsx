import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Engineering Manager",
    company: "IBM (via Red Hat acquisition)",
    location: "United Kingdom",
    period: "Jan 2023 - Present",
    achievements: [
      "Grew the engineering team from inception to 15 engineers, promoting 10 and managing out underperformers to establish a culture of excellence",
      "Directed a team of opensource developers across the globe to deliver 14 software updates, achieving a 98% on-time delivery",
      "Spearheaded the UI overhaul from monolithic to microfrontend architecture, boosting productivity by 30%",
      "Established robust code review protocol and integrated CI/CD practices, achieving a 30% reduction in software defects",
      "Led integration of advanced observability features, reducing troubleshooting time by 40%",
      "Aligned cross-functional teams to drive adoption to 10,000 clusters, contributing to $100M revenue growth",
    ],
    metrics: ["15 engineers", "98% on-time", "30% productivity boost", "$100M revenue"],
  },
  {
    title: "Software Engineering Manager",
    company: "Red Hat",
    location: "United Kingdom",
    period: "Jan 2022 - Jan 2023",
    achievements: [
      "Led a global team of 12 open-source developers to deliver key updates to OpenShift Data Foundation",
      "Played a pivotal role in the open-source community by contributing to governance discussions",
      "Streamlined developer workflows and fostered transparency across distributed teams",
    ],
    metrics: ["12 developers", "Global team"],
  },
  {
    title: "Software Engineering Manager",
    company: "Red Hat",
    location: "Bangalore, India",
    period: "Nov 2018 - Jan 2022",
    achievements: [
      "Spearheaded the formation of the OpenShift Data Foundation UI and observability engineering team",
      "Grew the team from inception to 12 developers",
      "Collaborated with distributed teams to establish project direction and align technical roadmaps",
      "Laid groundwork for scalable observability features",
    ],
    metrics: ["Team inception", "12 developers"],
  },
  {
    title: "Principal Software Engineer",
    company: "Red Hat",
    location: "Bangalore, India",
    period: "Oct 2013 - Nov 2018",
    achievements: [
      "Directed an engineering team of 8 in designing and implementing microservices architecture",
      "Achieved a 35% improvement in application response times",
      "Spearheaded integration of Nagios-based monitoring solution, leading to 40% reduction in troubleshooting time",
      "Mentored junior engineers, reducing onboarding time by 20%",
    ],
    metrics: ["8 engineers", "35% faster", "40% less troubleshooting"],
  },
  {
    title: "Software Engineer",
    company: "Cisco Systems",
    location: "Bangalore, India",
    period: "Jan 2011 - Jan 2012",
    achievements: ["Developed advanced VPN features for Cisco Prime, enhancing network management capabilities"],
    metrics: [],
  },
  {
    title: "Senior Staff Engineer | Technical Lead",
    company: "Motorola",
    location: "Hyderabad, India",
    period: "Feb 2010 - Feb 2011",
    achievements: [
      "Led development team in designing and implementing Motorola EMS",
      "Built provisioning and monitoring capabilities for Motorola WiMAX networks using web and Java-based tools",
    ],
    metrics: [],
  },
]

export function ExperienceSection() {
  return (
    <section className="border-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight md:text-4xl">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                      <CardDescription className="mt-2 flex flex-col gap-1 text-base">
                        <span className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          {exp.company} • {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                      </CardDescription>
                    </div>
                    {exp.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {exp.metrics.map((metric, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
