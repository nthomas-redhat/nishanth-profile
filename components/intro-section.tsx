import { Button } from "@/components/ui/button"
import { Linkedin, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function IntroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Hi, I'm Nishanth Thomas</h1>

          <div className="text-lg md:text-xl leading-relaxed space-y-4 text-foreground/90">
            <p>
              Passionate engineering leader with decades of experience building products and teams that scale. I believe in servant 
              leadership, technical excellence, and creating environments where engineers thrive. I have built, scaled, and led high-performing teams delivering
              open-source solutions.
            </p>

            <p>
              Currently leading <strong className="font-semibold text-foreground">UI and Observability</strong> for{" "}
              <Link
                href="https://www.redhat.com/en/technologies/cloud-computing/openshift-data-foundation"
                className="text-primary hover:underline"
              >
                OpenShift Data Foundation
              </Link>{" "}
              at IBM where I manage a team of 15 engineers working on infrastructure that powers 10,000+ clusters worldwide and generates <strong className="font-semibold text-foreground">$100M+ in annual revenue</strong>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button size="lg" asChild className="shadow-lg">
              <Link href="https://www.linkedin.com/in/nishanththomas/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/Nishanth_thomas.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                View CV
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image 
                src="/nishanth-thomas-profile.jpg" 
                alt="Nishanth Thomas" 
                width={320}
                height={320}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
