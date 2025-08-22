import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Radio, 
  Activity, 
  Shield, 
  Zap, 
  BarChart3, 
  MapPin,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Signal
} from "lucide-react";

const Dashboard = () => {
  const devices = [
    { id: "TX-001-WAREHOUSE-A", location: "Manufacturing Floor East", efficiency: 94.7, status: "optimal" },
    { id: "TX-002-WAREHOUSE-B", location: "Manufacturing Floor West", efficiency: 87.3, status: "good" },
    { id: "TX-003-OFFICE-TOWER", location: "Corporate Headquarters", efficiency: 91.8, status: "optimal" },
    { id: "TX-004-DATACENTER", location: "Primary Data Center", efficiency: 76.2, status: "warning" }
  ];

  const metrics = [
    { title: "Fleet Efficiency", value: "92.5%", icon: Zap, trend: "+2.3%", color: "text-success" },
    { title: "Active Nodes", value: "247", icon: Radio, trend: "+15", color: "text-primary" },
    { title: "Compliance Score", value: "100%", icon: Shield, trend: "+0.5%", color: "text-info" },
    { title: "Environment Maps", value: "342", icon: MapPin, trend: "+12", color: "text-success" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Enterprise Dashboard</h1>
          </div>
          <p className="text-muted-foreground">Real-time monitoring and control of your enterprise wireless infrastructure</p>
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
                      <TrendingUp className="h-3 w-3 text-success" />
                      <span className="text-xs text-success">{metric.trend}</span>
                    </div>
                  </div>
                  <div className={`p-3 bg-primary rounded-lg`}>
                    <metric.icon className="h-6 w-6 text-primary-foreground" />
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
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>RF Performance Analytics</span>
                  </CardTitle>
                  <CardDescription>Real-time signal propagation and efficiency visualization</CardDescription>
                </div>
                <Badge variant="outline" className="text-success border-success/20 bg-success/10">Live Data</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-muted/20 rounded-lg overflow-hidden">
                {/* Professional analytics visualization */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-success/10"></div>
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-success rounded-full animate-pulse shadow-sm"></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse shadow-sm"></div>
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-info rounded-full animate-pulse shadow-sm"></div>
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-warning rounded-full animate-pulse shadow-sm"></div>
                
                {/* Professional legend */}
                <div className="absolute bottom-4 left-4 space-y-2">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Optimal Performance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Good Performance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span>Needs Attention</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>System Health</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Network Performance</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={98} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>RF Optimization</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Regulatory Compliance</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={100} className="h-2" />
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-success">
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
                  <Radio className="h-5 w-5 text-primary" />
                  <span>Connected Nodes</span>
                </CardTitle>
                <CardDescription>Monitor and control individual transmission nodes</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Add Node
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {devices.map((device) => (
                <div key={device.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/50">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Signal className="h-8 w-8 text-primary" />
                      {device.status === 'optimal' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full"></div>
                      )}
                      {device.status === 'warning' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-warning rounded-full"></div>
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
                          ? 'bg-success/20 text-success border-success/50' 
                          : device.status === 'warning'
                          ? 'bg-warning/20 text-warning border-warning/50'
                          : ''
                      }
                    >
                      {device.status === 'optimal' ? 'Optimal' : device.status === 'warning' ? 'Attention' : 'Good'}
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

        {/* Recent Activity */}
        <Card className="bg-gradient-card border-border/50 mt-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Node TX-001-WAREHOUSE-A efficiency increased to 94.7%</span>
                </div>
                <span className="text-xs text-muted-foreground">2 minutes ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 text-info" />
                  <span className="text-sm">Compliance check completed - all nodes passing</span>
                </div>
                <span className="text-xs text-muted-foreground">15 minutes ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <span className="text-sm">TX-004-DATACENTER performance below optimal threshold</span>
                </div>
                <span className="text-xs text-muted-foreground">1 hour ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;