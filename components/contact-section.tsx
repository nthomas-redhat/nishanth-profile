import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight md:text-4xl">Let's Connect</h2>

          <Card className="border-2">
            <CardContent className="p-8">
              <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
                I'm always interested in discussing engineering leadership, open-source contributions, and opportunities
                to build high-performing teams. Feel free to reach out!
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="mailto:nishusemail@gmail.com"
                  className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-secondary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">nishusemail@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+447496392354"
                  className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-secondary"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+44 7496392354</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/nishanththomas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-secondary"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">nishanththomas</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-lg border p-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">United Kingdom</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="mailto:nishusemail@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/nishanththomas/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    View LinkedIn Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
