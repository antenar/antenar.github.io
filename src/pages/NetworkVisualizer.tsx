import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Radio, 
  Activity, 
  Signal, 
  Wifi,
  MapPin,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Network,
  Antenna,
  Building2,
  Radar,
  Eye,
  BarChart3,
  Cloud as CloudIcon
} from "lucide-react";
import cloudNetworkVisual from "@/assets/cloud-network-visual.jpg";

const NetworkVisualizer = () => {
  const networkNodes = [
    { id: "NODE-001", type: "TX", location: "Downtown Hub", status: "active", connections: 24, signal: 95, load: 67 },
    { id: "NODE-002", type: "RX", location: "Suburban Relay", status: "active", connections: 18, signal: 88, load: 54 },
    { id: "NODE-003", type: "TX", location: "Industrial Zone", status: "warning", connections: 12, signal: 76, load: 89 },
    { id: "NODE-004", type: "RX", location: "Residential Area", status: "active", connections: 31, signal: 92, load: 72 },
    { id: "NODE-005", type: "TX", location: "Airport Terminal", status: "active", connections: 8, signal: 98, load: 34 },
    { id: "NODE-006", type: "RX", location: "University Campus", status: "maintenance", connections: 0, signal: 0, load: 0 }
  ];

  const trafficMetrics = [
    { title: "Active Connections", value: "93", icon: Network, color: "text-primary" },
    { title: "Network Throughput", value: "2.4 Gbps", icon: TrendingUp, color: "text-success" },
    { title: "Coverage Area", value: "847 km²", icon: Radar, color: "text-info" },
    { title: "Beam Efficiency", value: "94.2%", icon: Antenna, color: "text-success" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/20 text-success border-success/50';
      case 'warning': return 'bg-warning/20 text-warning border-warning/50';
      case 'maintenance': return 'bg-muted text-muted-foreground border-border';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'maintenance': return Activity;
      default: return Activity;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Network className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Network Visualizer</h1>
          </div>
          <p className="text-muted-foreground">
            Real-time visualization of Antennar Cloud Platform network topology and performance
          </p>
        </div>

        {/* Traffic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {trafficMetrics.map((metric, index) => (
            <Card key={index} className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                  </div>
                  <div className="p-3 bg-primary rounded-lg">
                    <metric.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Network Topology Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 bg-gradient-card border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <CloudIcon className="h-5 w-5 text-primary" />
                    <span>Cloud Network Topology</span>
                  </CardTitle>
                  <CardDescription>Live network visualization with AI-optimized beam patterns</CardDescription>
                </div>
                <Badge variant="outline" className="text-success border-success/20 bg-success/10">
                  Real-time
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-muted/20 rounded-lg overflow-hidden">
                <img 
                  src={cloudNetworkVisual} 
                  alt="Cloud Network Topology Visualization" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                        <span className="text-white">Active Links</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-warning rounded-full"></div>
                        <span className="text-white">High Traffic</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-background/80">
                      View Full Map
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-primary" />
                <span>AI Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm font-semibold">Optimal Performance</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  All TX systems operating within optimal parameters
                </p>
              </div>
              
              <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <span className="text-sm font-semibold">High Load Detected</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  NODE-003 experiencing 89% capacity utilization
                </p>
              </div>
              
              <div className="p-3 bg-info/10 rounded-lg border border-info/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Antenna className="h-4 w-4 text-info" />
                  <span className="text-sm font-semibold">Beam Optimization</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  AI adjusted 12 beam patterns for weather conditions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Network Nodes Status */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Radio className="h-5 w-5 text-primary" />
                  <span>Network Nodes</span>
                </CardTitle>
                <CardDescription>Monitor individual node performance and connectivity</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Add Node
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {networkNodes.map((node) => {
                const StatusIcon = getStatusIcon(node.status);
                return (
                  <div key={node.id} className="p-4 bg-muted/20 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          {node.type === 'TX' ? (
                            <Building2 className="h-6 w-6 text-primary" />
                          ) : (
                            <Wifi className="h-6 w-6 text-primary" />
                          )}
                          <StatusIcon className="absolute -bottom-1 -right-1 h-3 w-3" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{node.id}</p>
                          <p className="text-xs text-muted-foreground">{node.location}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(node.status)}>
                        {node.type}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="text-muted-foreground">Connections</p>
                        <p className="font-semibold">{node.connections}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Signal</p>
                        <p className="font-semibold">{node.signal}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Load</p>
                        <p className="font-semibold">{node.load}%</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NetworkVisualizer;