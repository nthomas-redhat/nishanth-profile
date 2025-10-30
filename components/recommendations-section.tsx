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
    name: "John Doe",
    title: "Senior Vice President, Engineering",
    company: "Tech Company",
    relationship: "Managed Nishanth directly",
    text: "Add your LinkedIn recommendation text here. Go to your LinkedIn profile, scroll to Recommendations, and copy the text from your colleagues.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Jane Smith",
    title: "Director of Product Management",
    company: "Another Company",
    relationship: "Worked with Nishanth on the same team",
    text: "Another recommendation text goes here. Replace these with your actual LinkedIn recommendations to showcase your impact and leadership.",
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

