import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Radio, 
  Cloud, 
  Zap, 
  Shield, 
  Map, 
  Code, 
  CheckCircle,
  ArrowRight,
  Waves,
  Eye,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";
import heroAntennaArray from "@/assets/hero-antenna-array.jpg";
import cloudNetworkVisual from "@/assets/cloud-network-visual.jpg";

const Landing = () => {
  const features = [
    {
      icon: Zap,
      title: "Adaptive RF Steering",
      description: "AI-powered beam optimization that adapts to environmental changes in real-time."
    },
    {
      icon: Shield,
      title: "Compliance & Safety",
      description: "Automated monitoring ensures regulatory compliance and safe operation parameters."
    },
    {
      icon: Map,
      title: "Environment Mapping", 
      description: "Computer vision creates detailed RF environment maps for optimal performance."
    },
    {
      icon: Code,
      title: "Plug-and-Play API",
      description: "Simple REST API integration - get your devices connected in minutes, not months."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Install Hardware",
      description: "Mount our smart TX/RX units with integrated cameras at your sites.",
      icon: Radio
    },
    {
      number: "02", 
      title: "Connect to Cloud",
      description: "Devices automatically connect to Antennar Cloud for AI processing.",
      icon: Cloud
    },
    {
      number: "03",
      title: "Access Dashboard & API", 
      description: "Control everything through our web interface or integrate via API.",
      icon: Activity
    }
  ];

  const pricingTiers = [
    {
      name: "Starter Kit",
      price: "$2,995",
      period: "per device",
      description: "Smart TX/RX hardware with camera integration",
      features: [
        "1x Smart TX/RX Unit",
        "Computer vision module",
        "Cloud connectivity",
        "Basic dashboard access",
        "Standard support"
      ]
    },
    {
      name: "Cloud Subscription",
      price: "$299",
      period: "per node/month",
      description: "Full AI processing and management platform",
      features: [
        "Real-time RF optimization",
        "Environment mapping",
        "Safety monitoring", 
        "Full API access",
        "Advanced analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "volume pricing",
      description: "Large-scale deployments with custom integration",
      features: [
        "Volume hardware discounts",
        "Custom API endpoints",
        "Dedicated support team",
        "SLA guarantees",
        "On-premise options",
        "Training & consulting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 bg-gradient-hero overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroAntennaArray} 
            alt="Futuristic antenna array with AI-powered vision systems"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60"></div>
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.1)_0%,transparent_50%)] z-10"></div>
        <div className="container mx-auto text-center relative z-20">
          <Badge className="mb-6 bg-tech-blue/10 text-tech-blue border-tech-blue/20">
            Vision-Guided Radio Transmission
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-tech-blue to-tech-cyan bg-clip-text text-transparent">
            Make Wireless Networks
            <br />
            Smarter & Safer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Antennar Cloud combines smart hardware with AI-powered RF control. 
            Install our equipment, connect to the cloud, and access adaptive transmission through our API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-signal hover:shadow-glow-primary text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/dashboard">View Live Demo</Link>
            </Button>
          </div>
          
          {/* Floating dashboard preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Waves className="h-5 w-5 text-tech-blue" />
                    <span className="text-sm text-muted-foreground">RF Efficiency</span>
                  </div>
                  <div className="text-2xl font-bold text-signal-green">94.7%</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-tech-cyan" />
                    <span className="text-sm text-muted-foreground">Active Nodes</span>
                  </div>
                  <div className="text-2xl font-bold">1,247</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-tech-purple" />
                    <span className="text-sm text-muted-foreground">Compliance Status</span>
                  </div>
                  <div className="text-2xl font-bold text-signal-green">✓ All Clear</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your wireless infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-gradient-card border-border/50 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 relative">
                      <div className="w-16 h-16 bg-gradient-signal rounded-full flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-background" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-tech-blue text-background text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-8 w-8 text-tech-blue" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for intelligent wireless infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 group hover:shadow-glow-signal transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-signal rounded-lg">
                      <feature.icon className="h-6 w-6 text-background" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with our hardware, then scale with cloud subscriptions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-tech-blue shadow-glow-primary' : 'bg-gradient-card border-border/50'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-signal text-background">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-tech-blue">
                    {tier.price}
                    <span className="text-sm text-muted-foreground font-normal">/{tier.period}</span>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-signal-green" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${tier.popular ? 'bg-gradient-signal hover:shadow-glow-primary' : ''}`} 
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img 
            src={cloudNetworkVisual} 
            alt="Cloud network data visualization"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Developer-First API</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple REST endpoints to control your wireless infrastructure
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Quick Start Examples</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/api-docs">Full Documentation</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-tech-blue mb-2">Register Device</h4>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <span className="text-tech-cyan">POST</span> /api/devices/register<br/>
                      <span className="text-muted-foreground">{"{"}</span><br/>
                      <span className="ml-4">"device_id": "ANT-001",</span><br/>
                      <span className="ml-4">"location": {"{"}"lat": 40.7128, "lng": -74.0060{"}"}</span><br/>
                      <span className="text-muted-foreground">{"}"}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-tech-blue mb-2">Get Link Status</h4>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <span className="text-signal-green">GET</span> /api/devices/ANT-001/status<br/>
                      <span className="text-muted-foreground">Returns: RF efficiency, signal quality, compliance status</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Radio className="h-6 w-6 text-tech-blue" />
                <span className="text-lg font-bold">Antennar Cloud</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Telecommunications Equipment Company
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
                <li><Link to="/api-docs" className="hover:text-foreground">API Docs</Link></li>
                <li><a href="#" className="hover:text-foreground">Hardware</a></li>
                <li><a href="#" className="hover:text-foreground">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">About</Link></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
                <li><a href="#" className="hover:text-foreground">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
                <li><a href="#" className="hover:text-foreground">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Antennar. All rights reserved. | Telecommunications Equipment Company
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;