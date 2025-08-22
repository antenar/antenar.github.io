import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Radio, 
  Activity, 
  Shield, 
  Zap, 
  Eye, 
  Map,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Waves
} from "lucide-react";

const Dashboard = () => {
  const devices = [
    { id: "ANT-001", location: "Cell Tower A", efficiency: 94.7, status: "optimal" },
    { id: "ANT-002", location: "Cell Tower B", efficiency: 87.3, status: "good" },
    { id: "ANT-003", location: "Cell Tower C", efficiency: 91.8, status: "optimal" },
    { id: "ANT-004", location: "Cell Tower D", efficiency: 76.2, status: "warning" }
  ];

  const metrics = [
    { title: "Total Efficiency", value: "92.5%", icon: Zap, trend: "+2.3%", color: "text-signal-green" },
    { title: "Active Devices", value: "1,247", icon: Radio, trend: "+15", color: "text-tech-blue" },
    { title: "Compliance Score", value: "98.1%", icon: Shield, trend: "+0.5%", color: "text-tech-purple" },
    { title: "Environment Maps", value: "342", icon: Map, trend: "+12", color: "text-tech-cyan" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-6 w-6 text-tech-blue" />
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <p className="text-muted-foreground">Real-time monitoring and control of your wireless network infrastructure</p>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-signal-green" />
                      <span className="text-xs text-signal-green">{metric.trend}</span>
                    </div>
                  </div>
                  <div className={`p-3 bg-gradient-signal rounded-lg`}>
                    <metric.icon className="h-6 w-6 text-background" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* RF Environment Map */}
          <Card className="lg:col-span-2 bg-gradient-card border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-tech-cyan" />
                    <span>RF Environment Map</span>
                  </CardTitle>
                  <CardDescription>Real-time signal propagation visualization</CardDescription>
                </div>
                <Badge variant="outline" className="text-signal-green border-signal-green">Live</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-background/20 rounded-lg overflow-hidden">
                {/* Simulated heatmap */}
                <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/30 via-transparent to-signal-green/30"></div>
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-tech-blue rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-signal-green rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-tech-cyan rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-tech-purple rounded-full animate-pulse"></div>
                
                {/* Legend */}
                <div className="absolute bottom-4 left-4 space-y-2">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-signal-green rounded-full"></div>
                    <span>Optimal Signal</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                    <span>Good Signal</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                    <span>Interference</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-tech-purple" />
                <span>System Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Network Health</span>
                  <CheckCircle className="h-4 w-4 text-signal-green" />
                </div>
                <Progress value={98} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>RF Optimization</span>
                  <CheckCircle className="h-4 w-4 text-signal-green" />
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Safety Compliance</span>
                  <CheckCircle className="h-4 w-4 text-signal-green" />
                </div>
                <Progress value={100} className="h-2" />
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-signal-green">
                  <CheckCircle className="h-4 w-4" />
                  <span>All systems operational</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Device List */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Radio className="h-5 w-5 text-tech-blue" />
                  <span>Connected Devices</span>
                </CardTitle>
                <CardDescription>Monitor and control individual RF units</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Add Device
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {devices.map((device) => (
                <div key={device.id} className="flex items-center justify-between p-4 bg-background/20 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Waves className="h-8 w-8 text-tech-blue" />
                      {device.status === 'optimal' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-signal-green rounded-full"></div>
                      )}
                      {device.status === 'warning' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{device.id}</p>
                      <p className="text-sm text-muted-foreground">{device.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="font-semibold">{device.efficiency}%</p>
                      <p className="text-sm text-muted-foreground">Efficiency</p>
                    </div>
                    
                    <Badge 
                      variant={device.status === 'optimal' ? 'default' : device.status === 'warning' ? 'destructive' : 'secondary'}
                      className={
                        device.status === 'optimal' 
                          ? 'bg-signal-green/20 text-signal-green border-signal-green/50' 
                          : ''
                      }
                    >
                      {device.status === 'optimal' ? 'Optimal' : device.status === 'warning' ? 'Warning' : 'Good'}
                    </Badge>
                    
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;