import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Radio, 
  Key, 
  Cpu,
  Shield,
  BarChart3,
  Activity,
  Copy,
  ExternalLink,
  CheckCircle
} from "lucide-react";

const ApiDocs = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/auth/token",
      description: "Generate JWT access token for API authentication",
      category: "Authentication"
    },
    {
      method: "POST", 
      path: "/api/v1/nodes/register",
      description: "Register a new transmission node with the platform",
      category: "Node Management"
    },
    {
      method: "GET",
      path: "/api/v1/nodes",
      description: "List all registered nodes in your fleet",
      category: "Node Management"
    },
    {
      method: "GET",
      path: "/api/v1/nodes/{id}/status",
      description: "Get real-time node status and performance metrics",
      category: "Monitoring"
    },
    {
      method: "GET",
      path: "/api/v1/nodes/{id}/environment",
      description: "Retrieve RF environment mapping and analysis data",
      category: "Environment"
    },
    {
      method: "POST",
      path: "/api/v1/nodes/{id}/beam-control",
      description: "Adjust beam steering and transmission parameters",
      category: "Control"
    },
    {
      method: "GET",
      path: "/api/v1/compliance/report",
      description: "Generate regulatory compliance and safety reports",
      category: "Compliance"
    }
  ];

  const codeExamples = {
    auth: `curl -X POST https://api.antennar.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "ak_prod_1234567890abcdef",
    "secret": "sk_prod_abcdef1234567890"
  }'

# Response:
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "token_type": "Bearer",
  "expires_in": 3600
}`,
    
    register: `curl -X POST https://api.antennar.com/v1/nodes/register \\
  -H "Authorization: Bearer eyJ0eXAiOiJKV1Q..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "node_id": "TX-001-WAREHOUSE-A",
    "hardware_version": "v2.1.3",
    "site_id": "SITE_001_MANUFACTURING",
    "location": {
      "latitude": 40.758896,
      "longitude": -73.985130,
      "altitude": 45.2,
      "address": "123 Industrial Drive, Newark, NJ"
    },
    "installation_date": "2024-01-15T09:00:00Z"
  }'

# Response:
{
  "node_id": "TX-001-WAREHOUSE-A",
  "status": "registered",
  "activation_key": "ak_node_xyz789"
}`,

    status: `curl -X GET https://api.antennar.com/v1/nodes/TX-001-WAREHOUSE-A/status \\
  -H "Authorization: Bearer eyJ0eXAiOiJKV1Q..."

# Response:
{
  "node_id": "TX-001-WAREHOUSE-A",
  "status": "online",
  "performance": {
    "efficiency_percent": 94.7,
    "signal_quality": "excellent",
    "throughput_mbps": 1247.3,
    "latency_ms": 2.1
  },
  "beam_control": {
    "azimuth_degrees": 45.2,
    "elevation_degrees": 12.8,
    "power_level": 0.87,
    "adaptive_mode": true
  },
  "compliance_status": "compliant",
  "last_updated": "2024-01-20T10:30:25Z"
}`,

    beamControl: `curl -X POST https://api.antennar.com/v1/nodes/TX-001-WAREHOUSE-A/beam-control \\
  -H "Authorization: Bearer eyJ0eXAiOiJKV1Q..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "target_coordinates": {
      "azimuth": 50.0,
      "elevation": 15.0
    },
    "power_level": 0.8,
    "adaptive_mode": true,
    "safety_constraints": {
      "max_power_dbm": 30,
      "avoid_zones": ["human_presence", "reflective_surfaces"]
    }
  }'

# Response:
{
  "node_id": "TX-001-WAREHOUSE-A",
  "beam_adjustment": "successful",
  "estimated_completion": "2024-01-20T10:31:00Z"
}`
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Code className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">API Documentation</h1>
          </div>
          <p className="text-muted-foreground">
            Complete REST API reference for enterprise integration with Antennar platform
          </p>
        </div>

        {/* Quick Start */}
        <Card className="bg-gradient-card border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cpu className="h-5 w-5 text-primary" />
              <span>Enterprise Quick Start</span>
            </CardTitle>
            <CardDescription>Get your integration running in under 15 minutes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Key className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-sm">1. Generate API Keys</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Create production credentials in your enterprise dashboard
                </p>
              </div>
              <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Radio className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-sm">2. Register Nodes</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Add your hardware fleet to the platform
                </p>
              </div>
              <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Activity className="h-4 w-4 text-success" />
                  <span className="font-semibold text-sm">3. Start Integration</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Access real-time data and control systems
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="bg-primary hover:bg-primary/90">
                <ExternalLink className="h-4 w-4 mr-2" />
                Interactive API Explorer
              </Button>
              <Button variant="outline">
                Download Enterprise SDK
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Endpoints List */}
          <Card className="lg:col-span-2 bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>API Endpoints</CardTitle>
              <CardDescription>Production-ready endpoints with enterprise SLA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="p-4 bg-muted/20 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={endpoint.method === 'GET' ? 'default' : 'secondary'}
                          className={
                            endpoint.method === 'GET' 
                              ? 'bg-success/20 text-success border-success/50'
                              : endpoint.method === 'POST'
                              ? 'bg-primary/20 text-primary border-primary/50'
                              : ''
                          }
                        >
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {endpoint.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SDK Info */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Enterprise SDKs</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-muted/20 rounded-lg border border-border/50">
                  <div className="font-semibold text-sm mb-1">JavaScript/Node.js</div>
                  <code className="text-xs text-muted-foreground">npm install @antennar/enterprise-sdk</code>
                </div>
                <div className="p-3 bg-muted/20 rounded-lg border border-border/50">
                  <div className="font-semibold text-sm mb-1">Python</div>
                  <code className="text-xs text-muted-foreground">pip install antennar-enterprise</code>
                </div>
                <div className="p-3 bg-muted/20 rounded-lg border border-border/50">
                  <div className="font-semibold text-sm mb-1">Go</div>
                  <code className="text-xs text-muted-foreground">go get github.com/antennar/go-enterprise</code>
                </div>
                <div className="p-3 bg-muted/20 rounded-lg border border-border/50">
                  <div className="font-semibold text-sm mb-1">REST API</div>
                  <code className="text-xs text-muted-foreground">Direct HTTPS integration</code>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-sm mb-2">Enterprise Features</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-success" />
                    <span>99.9% uptime SLA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-success" />
                    <span>10,000 req/min rate limit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-success" />
                    <span>JWT authentication</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-success" />
                    <span>24/7 dedicated support</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Code Examples */}
        <Card className="bg-gradient-card border-border/50 mt-6">
          <CardHeader>
            <CardTitle>Integration Examples</CardTitle>
            <CardDescription>Production-ready code samples for common enterprise use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="auth" className="w-full">
              <TabsList className="grid grid-cols-4 w-full mb-6">
                <TabsTrigger value="auth">Authentication</TabsTrigger>
                <TabsTrigger value="register">Node Registration</TabsTrigger>
                <TabsTrigger value="status">Status Monitoring</TabsTrigger>
                <TabsTrigger value="control">Beam Control</TabsTrigger>
              </TabsList>

              {Object.entries(codeExamples).map(([key, code]) => (
                <TabsContent key={key} value={key}>
                  <div className="relative">
                    <pre className="bg-primary text-primary-foreground rounded-lg p-6 text-sm overflow-x-auto font-mono">
                      <code>{code}</code>
                    </pre>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="absolute top-4 right-4"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Response Schemas */}
        <Card className="bg-gradient-card border-border/50 mt-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Response Schemas</span>
            </CardTitle>
            <CardDescription>Enterprise data structures and response formats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-primary" />
                  <span>Node Status Response</span>
                </h4>
                <div className="bg-primary text-primary-foreground rounded-lg p-4 text-sm font-mono">
                  <code>{`{
  "node_id": "string",
  "status": "online|offline|maintenance",
  "performance": {
    "efficiency_percent": "number (0-100)",
    "signal_quality": "string",
    "throughput_mbps": "number",
    "latency_ms": "number"
  },
  "beam_control": {
    "azimuth_degrees": "number",
    "elevation_degrees": "number",
    "power_level": "number (0-1)",
    "adaptive_mode": "boolean"
  },
  "compliance_status": "compliant|warning|violation",
  "last_updated": "ISO 8601 timestamp"
}`}</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-success" />
                  <span>Environment Analysis Response</span>
                </h4>
                <div className="bg-primary text-primary-foreground rounded-lg p-4 text-sm font-mono">
                  <code>{`{
  "node_id": "string",
  "environment_data": {
    "coverage_area": {
      "radius_meters": "number",
      "coordinates": "array"
    },
    "signal_analysis": {
      "strength_dbm": "array",
      "interference_sources": "array",
      "multipath_reflections": "array"
    },
    "obstacles": {
      "detected_objects": "array",
      "human_presence": "boolean",
      "environmental_hazards": "array"
    }
  },
  "generated_at": "ISO 8601 timestamp"
}`}</code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiDocs;