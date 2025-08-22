import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Radio, 
  Shield, 
  Target, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Building2,
  Zap,
  Users,
  TrendingUp,
  Cloud,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const StatCard = ({ title, value, hint }: { title: string; value: string; hint?: string }) => (
  <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6">
    <div className="text-sm text-muted-foreground">{title}</div>
    <div className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{value}</div>
    {hint && <div className="mt-2 text-xs text-muted-foreground">{hint}</div>}
  </div>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="rounded-2xl bg-primary text-primary-foreground p-6 text-sm overflow-x-auto border border-border shadow-sm">
    <code>{children}</code>
  </pre>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <Card className="bg-card/70 border-border/50 hover:shadow-md transition-all duration-200">
    <CardHeader>
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-primary rounded-lg">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const PricingTier = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  cta, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  cta: string; 
  popular?: boolean; 
}) => (
  <Card className={`relative ${popular ? 'border-primary shadow-lg' : 'bg-card/70 border-border/50'}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
      </div>
    )}
    <CardHeader className="text-center">
      <CardTitle className="text-xl">{name}</CardTitle>
      <div className="text-3xl font-bold text-primary">
        {price}
        <span className="text-sm text-muted-foreground font-normal">/{period}</span>
      </div>
      <CardDescription className="text-sm">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full mt-6 ${popular ? 'bg-primary hover:bg-primary/90' : ''}`} 
        variant={popular ? "default" : "outline"}
      >
        {cta}
      </Button>
    </CardContent>
  </Card>
);

const Landing = () => {
  const features = [
    {
      icon: Target,
      title: "Precision RF Steering",
      description: "Computer vision-guided beam control delivers up to 40% efficiency gains over omnidirectional transmission."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Automated exposure monitoring and reporting ensures FCC/ETSI compliance with real-time safety margins."
    },
    {
      icon: BarChart3,
      title: "Environment Intelligence", 
      description: "Continuous mapping of RF environment optimizes performance while avoiding interference and obstacles."
    },
    {
      icon: Building2,
      title: "Enterprise Integration",
      description: "RESTful API with JWT authentication integrates seamlessly with existing network management systems."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Deploy Hardware",
      description: "Install our certified TX/RX units with integrated vision systems at transmission endpoints.",
      icon: Radio
    },
    {
      number: "02", 
      title: "Cloud Processing",
      description: "Real-time computer vision and RF analytics run in our secure cloud infrastructure.",
      icon: Cloud
    },
    {
      number: "03",
      title: "Control & Monitor", 
      description: "Manage fleet performance through web dashboard or integrate via enterprise API.",
      icon: Activity
    }
  ];

  const pricingTiers = [
    {
      name: "Hardware Kit",
      price: "$4,995",
      period: "per link",
      description: "Complete TX/RX hardware with vision modules",
      features: [
        "Certified TX/RX hardware pair",
        "Integrated camera modules",
        "Professional installation guide",
        "90-day hardware warranty",
        "Basic technical support"
      ],
      cta: "Request Quote"
    },
    {
      name: "Cloud Platform",
      price: "$399",
      period: "per node/month",
      description: "Complete AI-powered RF management service",
      features: [
        "Real-time beam optimization",
        "Regulatory compliance monitoring",
        "Environment mapping & analytics",
        "Enterprise API access",
        "24/7 technical support",
        "99.9% uptime SLA"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "volume pricing",
      description: "Scalable solution for large deployments",
      features: [
        "Volume hardware pricing",
        "Dedicated cloud infrastructure",
        "Custom API development",
        "On-site training & support",
        "Advanced security features",
        "Multi-year service agreements"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-muted/50 text-foreground border-border">
            Professional Telecommunications Equipment • Cloud-Native Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground max-w-4xl mx-auto">
            Vision-Guided Radio Transmission Systems
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional-grade TX/RX hardware with integrated computer vision, managed through our enterprise cloud platform. 
            Achieve 40% efficiency gains while maintaining regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/dashboard">View Platform</Link>
            </Button>
          </div>
          
          {/* Real-time metrics dashboard preview */}
          <div className="relative max-w-5xl mx-auto">
            <Card className="bg-gradient-card border border-border shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Live Fleet Performance</CardTitle>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    All Systems Operational
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <StatCard title="Active Links" value="247" hint="across 12 sites" />
                  <StatCard title="Avg. Efficiency" value="87.3%" hint="+34% vs baseline" />
                  <StatCard title="Compliance Score" value="100%" hint="zero violations" />
                  <StatCard title="Uptime" value="99.97%" hint="last 30 days" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Enterprise Implementation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional deployment and management in three phases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-gradient-card border-border/50 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 relative">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                        <step.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-muted text-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Enterprise Platform Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive RF management and optimization suite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Proven ROI for Enterprise Networks</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-success/10 rounded-lg p-2">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">40% Efficiency Improvement</h3>
                    <p className="text-muted-foreground text-sm">Average link efficiency gains measured across industrial deployments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Zero Compliance Issues</h3>
                    <p className="text-muted-foreground text-sm">Automated monitoring prevents regulatory violations and audit failures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-info/10 rounded-lg p-2">
                    <BarChart3 className="h-6 w-6 text-info" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">18-Month Payback</h3>
                    <p className="text-muted-foreground text-sm">Typical ROI timeline through reduced power consumption and improved throughput</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-card border-border shadow-lg">
              <CardHeader>
                <CardTitle>Customer Case Study</CardTitle>
                <CardDescription>Manufacturing facility - 500,000 sq ft</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <StatCard title="Annual Savings" value="$127K" hint="power & efficiency gains" />
                <StatCard title="Deployment Time" value="3 weeks" hint="vs 6 months baseline" />
                <StatCard title="Interference Reduction" value="89%" hint="vs legacy equipment" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Enterprise Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional hardware and cloud services with transparent pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingTier
                key={index}
                name={tier.name}
                price={tier.price}
                period={tier.period}
                description={tier.description}
                features={tier.features}
                cta={tier.cta}
                popular={tier.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Developer-First API</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              RESTful API with comprehensive documentation and enterprise authentication
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Node Registration</h4>
                  <CodeBlock>{`POST /api/v1/nodes/register
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGc...
Content-Type: application/json

{
  "node_id": "TX-001-WAREHOUSE-A",
  "site_id": "SITE_001",
  "location": {
    "lat": 40.7589, 
    "lng": -73.9851
  },
  "hardware_version": "v2.1.3"
}`}</CodeBlock>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Link Performance Query</h4>
                  <CodeBlock>{`GET /api/v1/links/TX-001-WAREHOUSE-A/status
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGc...

Response:
{
  "link_id": "TX-001-WAREHOUSE-A",
  "snr_db": 31.4,
  "efficiency_percent": 87.3,
  "beam_mode": "AUTO_TRACK",
  "compliance_status": "COMPLIANT",
  "last_updated": "2024-01-15T14:30:25Z"
}`}</CodeBlock>
                </div>
              </div>
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>API Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>JWT-based authentication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Rate limiting & quotas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Webhook notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>OpenAPI 3.0 specification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>SDKs for Python, Node.js, Go</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/api-docs">View Full Documentation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Radio className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Antennar</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional telecommunications equipment manufacturer specializing in vision-guided RF systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                <li><Link to="/api-docs" className="hover:text-foreground transition-colors">API Documentation</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Hardware Specs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Antennar</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press & Media</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Sales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal & Compliance</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Regulatory Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Antennar Corporation. All rights reserved. | Professional Telecommunications Equipment Manufacturer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;