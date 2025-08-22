import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Radio, 
  Key, 
  Zap,
  Shield,
  Map,
  Activity,
  Copy,
  ExternalLink
} from "lucide-react";

const ApiDocs = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/api/auth/token",
      description: "Generate API access token",
      category: "Authentication"
    },
    {
      method: "POST", 
      path: "/api/devices/register",
      description: "Register a new device with the platform",
      category: "Device Management"
    },
    {
      method: "GET",
      path: "/api/devices",
      description: "List all registered devices",
      category: "Device Management"
    },
    {
      method: "GET",
      path: "/api/devices/{id}/status",
      description: "Get real-time device status and metrics",
      category: "Monitoring"
    },
    {
      method: "GET",
      path: "/api/devices/{id}/environment",
      description: "Retrieve RF environment mapping data",
      category: "Environment"
    },
    {
      method: "POST",
      path: "/api/devices/{id}/beam-control",
      description: "Adjust beam steering parameters",
      category: "Control"
    },
    {
      method: "GET",
      path: "/api/compliance/report",
      description: "Generate compliance and safety report",
      category: "Compliance"
    }
  ];

  const codeExamples = {
    auth: `curl -X POST https://api.antennar.cloud/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your_api_key",
    "secret": "your_secret"
  }'`,
    
    register: `curl -X POST https://api.antennar.cloud/devices/register \\
  -H "Authorization: Bearer {access_token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "device_id": "ANT-001",
    "hardware_version": "v2.1",
    "location": {
      "latitude": 40.7128,
      "longitude": -74.0060,
      "altitude": 45.2
    },
    "installation_date": "2024-01-15"
  }'`,

    status: `curl -X GET https://api.antennar.cloud/devices/ANT-001/status \\
  -H "Authorization: Bearer {access_token}"

# Response:
{
  "device_id": "ANT-001",
  "status": "online",
  "rf_efficiency": 94.7,
  "signal_quality": "excellent",
  "beam_angle": {
    "azimuth": 45.2,
    "elevation": 12.8
  },
  "compliance_status": "compliant",
  "last_updated": "2024-01-20T10:30:00Z"
}`,

    beamControl: `curl -X POST https://api.antennar.cloud/devices/ANT-001/beam-control \\
  -H "Authorization: Bearer {access_token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target_azimuth": 50.0,
    "target_elevation": 15.0,
    "power_level": 0.8,
    "adaptive_mode": true
  }'`
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Code className="h-6 w-6 text-tech-blue" />
            <h1 className="text-3xl font-bold">API Documentation</h1>
          </div>
          <p className="text-muted-foreground">
            Complete REST API reference for Antennar Cloud platform integration
          </p>
        </div>

        {/* Quick Start */}
        <Card className="bg-gradient-card border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-tech-blue" />
              <span>Quick Start</span>
            </CardTitle>
            <CardDescription>Get up and running in minutes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-background/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Key className="h-4 w-4 text-tech-cyan" />
                  <span className="font-semibold text-sm">1. Get API Key</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Generate credentials in your dashboard settings
                </p>
              </div>
              <div className="p-4 bg-background/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Radio className="h-4 w-4 text-tech-blue" />
                  <span className="font-semibold text-sm">2. Register Device</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Add your hardware to the platform
                </p>
              </div>
              <div className="p-4 bg-background/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Activity className="h-4 w-4 text-signal-green" />
                  <span className="font-semibold text-sm">3. Start Monitoring</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Access real-time data and controls
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="bg-gradient-signal hover:shadow-glow-primary">
                <ExternalLink className="h-4 w-4 mr-2" />
                Interactive API Explorer
              </Button>
              <Button variant="outline">
                Download SDK
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Endpoints List */}
          <Card className="lg:col-span-2 bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>API Endpoints</CardTitle>
              <CardDescription>Complete list of available endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="p-4 bg-background/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={endpoint.method === 'GET' ? 'default' : 'secondary'}
                          className={
                            endpoint.method === 'GET' 
                              ? 'bg-signal-green/20 text-signal-green border-signal-green/50'
                              : endpoint.method === 'POST'
                              ? 'bg-tech-blue/20 text-tech-blue border-tech-blue/50'
                              : ''
                          }
                        >
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm font-mono">{endpoint.path}</code>
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
                <Code className="h-5 w-5 text-tech-purple" />
                <span>SDK Libraries</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-background/20 rounded-lg">
                  <div className="font-semibold text-sm mb-1">JavaScript/Node.js</div>
                  <code className="text-xs text-muted-foreground">npm install @antennar/cloud-sdk</code>
                </div>
                <div className="p-3 bg-background/20 rounded-lg">
                  <div className="font-semibold text-sm mb-1">Python</div>
                  <code className="text-xs text-muted-foreground">pip install antennar-cloud</code>
                </div>
                <div className="p-3 bg-background/20 rounded-lg">
                  <div className="font-semibold text-sm mb-1">Go</div>
                  <code className="text-xs text-muted-foreground">go get github.com/antennar/cloud-go</code>
                </div>
                <div className="p-3 bg-background/20 rounded-lg">
                  <div className="font-semibold text-sm mb-1">REST API</div>
                  <code className="text-xs text-muted-foreground">Direct HTTP calls</code>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-sm mb-2">Support</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Rate limit: 1000 req/min</div>
                  <div>Response format: JSON</div>
                  <div>Authentication: Bearer token</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Code Examples */}
        <Card className="bg-gradient-card border-border/50 mt-6">
          <CardHeader>
            <CardTitle>Code Examples</CardTitle>
            <CardDescription>Common usage patterns and request examples</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="auth" className="w-full">
              <TabsList className="grid grid-cols-4 w-full mb-6">
                <TabsTrigger value="auth">Authentication</TabsTrigger>
                <TabsTrigger value="register">Register Device</TabsTrigger>
                <TabsTrigger value="status">Get Status</TabsTrigger>
                <TabsTrigger value="control">Beam Control</TabsTrigger>
              </TabsList>

              {Object.entries(codeExamples).map(([key, code]) => (
                <TabsContent key={key} value={key}>
                  <div className="relative">
                    <pre className="bg-background/50 rounded-lg p-4 text-sm overflow-x-auto font-mono">
                      <code>{code}</code>
                    </pre>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="absolute top-2 right-2"
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
              <Shield className="h-5 w-5 text-tech-purple" />
              <span>Response Schemas</span>
            </CardTitle>
            <CardDescription>Expected response formats and data structures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-tech-cyan" />
                  <span>Device Status Response</span>
                </h4>
                <div className="bg-background/50 rounded-lg p-4 text-sm font-mono">
                  <code>{`{
  "device_id": "string",
  "status": "online|offline|maintenance", 
  "rf_efficiency": "number (0-100)",
  "signal_quality": "string",
  "beam_angle": {
    "azimuth": "number",
    "elevation": "number"
  },
  "compliance_status": "compliant|warning|violation",
  "last_updated": "ISO 8601 timestamp"
}`}</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <Map className="h-4 w-4 text-signal-green" />
                  <span>Environment Map Response</span>
                </h4>
                <div className="bg-background/50 rounded-lg p-4 text-sm font-mono">
                  <code>{`{
  "device_id": "string",
  "map_data": {
    "resolution": "number (meters)",
    "coverage_area": "object",
    "signal_strength": "array",
    "interference_sources": "array",
    "obstacles": "array"
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