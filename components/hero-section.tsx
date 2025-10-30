import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>United Kingdom</span>
          </div>

          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Nishanth Thomas
          </h1>

          <p className="mb-6 text-xl text-muted-foreground md:text-2xl">Software Engineering Manager</p>

          <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
            Engineering Manager with 20+ years of experience, currently leading UI and Observability for OpenShift Data
            Foundation. Built and manage a global team of 15 engineers, delivering scalable open-source solutions
            generating <span className="font-semibold text-primary">$100M+ in annual revenue</span>.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="mailto:nishusemail@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/nishanththomas/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a
              href="mailto:nishusemail@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              nishusemail@gmail.com
            </a>
            <a href="tel:+447496392354" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +44 7496392354
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
