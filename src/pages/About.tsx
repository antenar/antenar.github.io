import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Radio, 
  Building, 
  Users, 
  Award,
  Globe,
  Zap,
  Eye,
  Shield,
  Target,
  ArrowRight
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-founder",
      background: "Former RF Engineer at SpaceX, PhD in Electrical Engineering"
    },
    {
      name: "Marcus Rodriguez", 
      role: "CTO & Co-founder",
      background: "Ex-Google Cloud AI, MIT Computer Vision Research"
    },
    {
      name: "Dr. James Park",
      role: "Head of Hardware",
      background: "20+ years in telecommunications, Former Ericsson Senior Engineer"
    },
    {
      name: "Lisa Thompson",
      role: "VP of Engineering", 
      background: "Former Amazon AWS, Distributed systems expert"
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded", 
      description: "Antennar established with vision to revolutionize wireless infrastructure"
    },
    {
      year: "2022", 
      title: "First Prototype",
      description: "Successful demonstration of vision-guided RF steering technology"
    },
    {
      year: "2023",
      title: "Cloud Platform Launch",
      description: "Antennar Cloud platform goes live with first enterprise customers"
    },
    {
      year: "2024",
      title: "Series A Funding",
      description: "$15M raised to accelerate hardware production and AI development"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in wireless technology, combining AI, computer vision, and RF engineering."
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Regulatory compliance and operational safety are built into every aspect of our platform and hardware."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Our success is measured by how much we improve our customers' network performance and operational efficiency."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building technology that will improve wireless connectivity for billions of people worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building className="h-6 w-6 text-tech-blue" />
            <h1 className="text-4xl font-bold">About Antennar</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a telecommunications equipment company pioneering the future of wireless infrastructure 
            through vision-guided radio transmission and cloud-based AI control.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-card border-border/50 mb-16">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-signal bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To make wireless networks smarter, safer, and more efficient through the intelligent 
              combination of computer vision, artificial intelligence, and radio frequency engineering. 
              We believe that by giving wireless infrastructure the ability to see and understand its 
              environment, we can dramatically improve network performance while ensuring safety and compliance.
            </p>
          </CardContent>
        </Card>

        {/* Technology & Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-6 w-6 text-tech-cyan" />
                <span>Technology Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Traditional wireless infrastructure operates blind to its environment. Our revolutionary 
                approach integrates computer vision directly into RF hardware, enabling real-time 
                environmental awareness and adaptive transmission control.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-tech-blue" />
                  <span className="font-semibold">AI-Powered Beam Steering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="h-5 w-5 text-tech-cyan" />
                  <span className="font-semibold">Computer Vision Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-tech-purple" />
                  <span className="font-semibold">Automated Compliance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Radio className="h-6 w-6 text-tech-blue" />
                <span>Hardware Excellence</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our smart TX/RX units represent a breakthrough in telecommunications equipment design. 
                Each device combines precision RF components with advanced camera systems and edge 
                computing capabilities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-signal-green" />
                  <span className="font-semibold">Military-Grade Durability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-tech-purple" />
                  <span className="font-semibold">5G/6G Ready Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-tech-cyan" />
                  <span className="font-semibold">Edge AI Processing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-tech-blue font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 group hover:shadow-glow-signal transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-signal rounded-lg">
                      <value.icon className="h-6 w-6 text-background" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Company Milestones</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="text-2xl font-bold text-tech-blue">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-signal rounded-full"></div>
                </div>
                <Card className="flex-1 bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-hero border-border/50 text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Network?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading telecommunications companies already using Antennar Cloud 
              to optimize their wireless infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-signal hover:shadow-glow-primary text-lg px-8 py-6">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;