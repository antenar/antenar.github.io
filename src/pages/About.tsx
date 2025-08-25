import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Radio, 
  Building, 
  Users, 
  Award,
  Globe,
  Zap,
  BarChart3,
  Shield,
  Target,
  ArrowRight
} from "lucide-react";

const About = () => {
  const competitiveAdvantages = [
    {
      competitor: "Huawei",
      title: "Advanced AI Integration vs Legacy Architecture",
      advantage: "Unlike Huawei's traditional fixed-configuration systems, Antennar's computer vision-guided RF dynamically adapts to environmental changes in real-time, delivering 40% better performance efficiency."
    },
    {
      competitor: "Nokia", 
      title: "Intelligent Automation vs Manual Configuration",
      advantage: "While Nokia requires extensive manual RF planning and optimization, Antennar's AI-powered platform automatically optimizes beam patterns and power levels, reducing deployment time by 70%."
    },
    {
      competitor: "Ericsson",
      title: "Real-time Environmental Awareness vs Static Solutions", 
      advantage: "Ericsson's traditional radio systems operate with fixed parameters. Antennar's vision-guided technology continuously monitors environmental conditions, automatically adjusting for weather, obstacles, and interference."
    },
    {
      competitor: "Cisco",
      title: "Enterprise-First Design vs Generic Solutions",
      advantage: "Unlike Cisco's one-size-fits-all approach, Antennar is purpose-built for enterprise environments with industry-specific optimizations for manufacturing, logistics, and critical infrastructure."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded", 
      description: "Antennar Corporation established with mission to revolutionize enterprise wireless infrastructure"
    },
    {
      year: "2022", 
      title: "Technology Breakthrough",
      description: "First successful demonstration of computer vision-guided RF beam steering in industrial environment"
    },
    {
      year: "2023",
      title: "Enterprise Platform Launch",
      description: "Antennar Cloud platform deployed for enterprise manufacturing customers"
    },
    {
      year: "2024",
      title: "Market Expansion",
      description: "Enhanced RF optimization algorithms and expanded enterprise partnerships across multiple industries"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Engineering Excellence",
      description: "We build enterprise-grade systems that deliver measurable performance improvements and maintain 99.9% reliability standards."
    },
    {
      icon: Shield,
      title: "Regulatory Leadership",
      description: "Safety and compliance are foundational to our design process. We exceed industry standards and work closely with regulatory bodies."
    },
    {
      icon: Users,
      title: "Customer Partnership",
      description: "We partner with enterprise customers to solve their most complex wireless infrastructure challenges with tailored solutions."
    },
    {
      icon: Globe,
      title: "Industry Impact",
      description: "Our technology enables the next generation of wireless networks that power critical infrastructure and industrial operations."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">About Antennar Corporation</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Antennar is a Telecommunications Equipment Provider delivering vision-guided transmission systems. Our transmitters, receivers, and cloud platform bring precision and adaptability to ICT networks worldwide. By integrating computer vision with telecommunications hardware, Antennar ensures wireless systems remain reliable and efficient across diverse applications.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-card border-border/50 mb-16">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Enterprise Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To transform enterprise wireless infrastructure through intelligent integration of computer vision, 
              artificial intelligence, and radio frequency engineering. We deliver measurable performance improvements, 
              regulatory compliance, and operational efficiency for Fortune 500 companies and critical infrastructure operators.
            </p>
          </CardContent>
        </Card>

        {/* Technology & Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span>Technology Leadership</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Enterprise wireless networks require precision, reliability, and regulatory compliance. 
                Our proprietary technology stack integrates computer vision directly into RF hardware, 
                enabling real-time environmental awareness and adaptive transmission optimization.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-semibold">AI-Powered RF Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-success" />
                  <span className="font-semibold">Computer Vision Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-info" />
                  <span className="font-semibold">Automated Regulatory Compliance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Radio className="h-6 w-6 text-primary" />
                <span>Enterprise Hardware</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our professional TX/RX systems are engineered for mission-critical environments. 
                Each unit combines precision RF components with advanced computer vision modules 
                and enterprise-grade edge computing capabilities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-success" />
                  <span className="font-semibold">Industrial-Grade Durability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-info" />
                  <span className="font-semibold">5G/6G Enterprise Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Real-time Edge Processing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Antennar Over Traditional Providers</h2>
          <div className="space-y-6">
            {competitiveAdvantages.map((advantage, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {advantage.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">
                    vs {advantage.competitor}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.advantage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Corporate Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary rounded-lg">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Corporate Milestones</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <Card className="flex-1 bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise ROI */}
        <Card className="bg-gradient-subtle border-border/50 mb-16">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Enterprise Value Proposition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Average efficiency improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">18 mo</div>
                <div className="text-sm text-muted-foreground">Typical ROI payback period</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-info mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Regulatory compliance rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-subtle border-border/50 text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">Partner with Antennar</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Fortune 500 companies and critical infrastructure operators already leveraging 
              Antennar's enterprise wireless optimization platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Schedule Enterprise Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Enterprise Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;