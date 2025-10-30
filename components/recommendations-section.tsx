import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Recommendation {
  name: string
  title: string
  company: string
  relationship: string
  text: string
  image?: string
}

const recommendations: Recommendation[] = [
  {
    name: "Mudit Agarwal",
    title: "Program Director - Fusion Data Foundation",
    company: "Red Hat & IBM",
    relationship: "Managed Nishanth directly",
    text: "I had the pleasure of working closely with Nishanth for several years first at RedHat and then IBM. Nishanth is a great leader who was deeply invested in his team's growth, and many engineers under his guidance have gone on to take on larger roles. Throughout our collaboration, Nishanth demonstrated a deep understanding of both technical and managerial aspects of our projects. His ability to effectively lead a team, prioritize tasks, and navigate complex challenges was instrumental in the successful delivery of multiple key initiatives. I highly recommend Nishanth for any leadership role where dedication, expertise, and a proven track record of success are valued. He would be a valuable asset to any organization looking to drive innovation and achieve ambitious goals.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Eran Tamir",
    title: "Senior Principal Product Manager at Red Hat, OpenShift Data Foundation",
    company: "Red Hat & IBM",
    relationship: "Worked with Nishanth on the same team",
    text: "I had the pleasure to work with Nishanth while he led the UI and UX engineering teams of OpenShift Data Foundation. Nishanth did an amazing job bringing those two disciplines together, helping the teams collaborate effectively and stay aligned on shared goals. He was also a great partner to share thoughts on strategy, platform integration and finding practical ways to quickly resolve conflicts and challenges. Nishanth's calm personality together with his professionalism and dedication, made him a valuable asset to our product development and adoption.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Alfonso Martínez",
    title: "Senior Full Stack Developer",
    company: "Red Hat & IBM",
    relationship: "Reported directly to Nishanth",
    text: "I strongly recommend Nishanth as a great Engineering Manager! Having worked with him for more than 2 years, I can honestly say he has made a positive impact on our team and projects. One of Nishanth's greatest strengths is his commitment to team development. They prioritize mentorship and actively encourage team members to pursue professional growth. Through regular 1-1 meetings and constructive feedback, he creates a supportive atmosphere where everyone feels valued and empowered. Communication is another area where Nishanth shines, ensuring that all team members are aligned with project goals and expectations. He really values our input and foster a culture where everyone feels included, which has made our team stronger and more productive. I'm confident he'll continue to lead teams to achieve great things!",
    image: "/placeholder-user.jpg"
  },
  // Add more recommendations here
]

export function RecommendationsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            RECOMMENDATIONS <Star className="inline-block ml-2 h-10 w-10 text-yellow-500 fill-yellow-500" />
          </h2>
          <p className="text-lg text-muted-foreground">What colleagues and leaders say about working with me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={rec.image} alt={rec.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {rec.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{rec.name}</h3>
                    <p className="text-sm text-muted-foreground">{rec.title}</p>
                    <p className="text-sm text-muted-foreground">{rec.company}</p>
                    <p className="text-xs text-primary mt-1">{rec.relationship}</p>
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{rec.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            View all recommendations on{" "}
            <a 
              href="https://www.linkedin.com/in/nishanththomas/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

