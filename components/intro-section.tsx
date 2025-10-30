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
              I'm a <strong className="font-semibold text-foreground">Software Engineering Manager</strong> who has
              built, scaled, and led high-performing teams delivering open-source solutions that generate{" "}
              <strong className="font-semibold text-foreground">$100M+ in annual revenue</strong>.
            </p>

            <p>
              I'm currently leading <strong className="font-semibold text-foreground">UI and Observability</strong> for{" "}
              <Link
                href="https://www.redhat.com/en/technologies/cloud-computing/openshift-data-foundation"
                className="text-primary hover:underline"
              >
                OpenShift Data Foundation
              </Link>{" "}
              at IBM (via Red Hat acquisition). Previously, I spent years helping Red Hat grow from a startup culture to
              a leading enterprise open-source company.
            </p>

            <p className="text-muted-foreground text-base">
              If you're looking for engineering leadership insights, you may find my experience in{" "}
              <strong className="font-medium text-foreground">building teams from scratch</strong>,{" "}
              <strong className="font-medium text-foreground">microfrontend architecture</strong>, and{" "}
              <strong className="font-medium text-foreground">open-source governance</strong> helpful.
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
              <Link href="mailto:nishusemail@gmail.com">
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image 
                src="/engineering-manager-headshot.png" 
                alt="Nishanth Thomas" 
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
