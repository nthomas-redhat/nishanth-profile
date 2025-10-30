import { Building2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function JourneySection() {
  const experiences = [
    {
      company: "IBM (via Red Hat acquisition)",
      role: "Software Engineering Manager",
      period: "Jan 2023 - Present",
      location: "United Kingdom",
      highlights: [
        "Leading UI and Observability for OpenShift Data Foundation",
        "Managing 15 engineers globally with 98% on-time delivery",
        "Driving $100M+ annual revenue through scalable solutions",
      ],
    },
    {
      company: "Red Hat",
      role: "Software Engineering Manager",
      period: "Nov 2018 - Jan 2023",
      location: "United Kingdom & India",
      highlights: [
        "Built team from inception to 12 developers",
        "Spearheaded microfrontend architecture transformation",
        "Established observability and monitoring capabilities",
      ],
    },
    {
      company: "Red Hat",
      role: "Principal Software Engineer",
      period: "Oct 2013 - Nov 2018",
      location: "Bangalore, India",
      highlights: [
        "Led team of 8 in microservices architecture design",
        "Integrated Nagios-based monitoring solution",
        "Mentored junior engineers, reducing onboarding time by 20%",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            MY JOURNEY <Calendar className="inline-block ml-2 h-10 w-10 text-orange-500" />
          </h2>
          <p className="text-lg text-muted-foreground">20+ years of engineering leadership and innovation</p>
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                  </div>
                  <div className="text-lg font-semibold text-muted-foreground">{exp.role}</div>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            I'm always interested in discussing engineering leadership, open-source contributions, and building
            high-performing teams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://www.linkedin.com/in/nishanththomas/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="mailto:nishusemail@gmail.com">Email Me</Link>
            </Button>
          </div>
          <div className="mt-6 text-sm opacity-75">
            <p>nishusemail@gmail.com | +44 7496392354 | United Kingdom</p>
          </div>
        </div>
      </div>
    </section>
  )
}
