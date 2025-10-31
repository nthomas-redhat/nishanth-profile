import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Patent {
  number: string
  title: string
  description: string
  url: string
  year: string
}

const patents: Patent[] = [
  {
    number: "US9596135B1",
    title: "Network Management Innovation",
    description: "Methods and apparatus for computer network management, specifically focused on enterprise network architecture and optimization.",
    url: "https://patents.google.com/patent/US9596135B1",
    year: "2017"
  },
  {
    number: "US20170249088A1",
    title: "System Architecture Design",
    description: "System and method for scalable distributed system architecture with focus on fault tolerance and high availability.",
    url: "https://patents.google.com/patent/US20170249088A1",
    year: "2017"
  }
]

export function PatentsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            PATENTS & PUBLICATIONS <Award className="inline-block ml-2 h-10 w-10 text-yellow-500" />
          </h2>
          <p className="text-lg text-muted-foreground">Innovations in network management and system architecture</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {patents.map((patent, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">US Patent</Badge>
                      <Badge variant="outline">{patent.year}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{patent.title}</CardTitle>
                    <CardDescription className="font-mono text-sm text-primary">
                      {patent.number}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {patent.description}
                </p>
                <Link
                  href={patent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline font-medium"
                >
                  View Patent on Google Patents
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

