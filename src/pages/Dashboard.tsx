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
  Signal,
  Camera,
  Radar,
  Waves,
  Cpu,
  Eye,
  Thermometer
} from "lucide-react";
import occupancyGridImage from "@/assets/occupancy-grid-map.jpg";
import radarRangeDopplerImage from "@/assets/radar-range-doppler.jpg";
import lidarPointCloudImage from "@/assets/lidar-point-cloud.jpg";
import rfLinkBudgetImage from "@/assets/rf-link-budget.jpg";

const Dashboard = () => {
  const devices = [
    { id: "TX-001-WAREHOUSE-A", location: "Manufacturing Floor East", efficiency: 94.7, status: "optimal", connectedRx: 12, linkBudget: -72.3, pathLoss: 85.2 },
    { id: "TX-002-WAREHOUSE-B", location: "Manufacturing Floor West", efficiency: 87.3, status: "good", connectedRx: 8, linkBudget: -78.1, pathLoss: 92.8 },
    { id: "TX-003-OFFICE-TOWER", location: "Corporate Headquarters", efficiency: 91.8, status: "optimal", connectedRx: 15, linkBudget: -69.5, pathLoss: 80.1 },
    { id: "TX-004-DATACENTER", location: "Primary Data Center", efficiency: 76.2, status: "warning", connectedRx: 6, linkBudget: -84.7, pathLoss: 98.3 }
  ];

  const metrics = [
    { title: "System Uptime", value: "99.97%", icon: Zap, trend: "No Failures", color: "text-success" },
    { title: "Connected Receivers", value: "41", icon: Radio, trend: "Active Links", color: "text-primary" },
    { title: "RF Compliance", value: "100%", icon: Shield, trend: "All Systems", color: "text-info" },
    { title: "Energy Savings", value: "34.2%", icon: TrendingUp, trend: "vs Omnidirectional", color: "text-success" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Antennar Cloud Platform</h1>
          </div>
          <p className="text-muted-foreground">Real-time monitoring and control of your RF transmission systems with computer vision analytics</p>
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
                      <span className="text-xs text-muted-foreground">{metric.trend}</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* RF Link Budget Analysis */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>RF Link Budget Analysis</span>
                  </CardTitle>
                  <CardDescription>Friis equation calculations and path loss optimization</CardDescription>
                </div>
                <Badge variant="outline" className="text-success border-success/20 bg-success/10">Live Data</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-muted/20 rounded-lg overflow-hidden">
                <img 
                  src={rfLinkBudgetImage} 
                  alt="RF Link Budget Analysis Dashboard" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 space-y-2 bg-background/80 p-2 rounded">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Optimal Link Budget</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span>Path Loss &gt; 90dB</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Occupancy Grid Visualization */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>BEV Occupancy Grid</span>
                  </CardTitle>
                  <CardDescription>Computer vision environment mapping</CardDescription>
                </div>
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10">Vision AI</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-muted/20 rounded-lg overflow-hidden">
                <img 
                  src={occupancyGridImage} 
                  alt="Bird's Eye View Occupancy Grid" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 space-y-1 bg-background/80 p-2 rounded">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Occupied</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Free Space</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>Unknown</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sensor Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Radar Range Doppler */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Radar className="h-5 w-5 text-primary" />
                <span>Radar Range-Doppler Map</span>
              </CardTitle>
              <CardDescription>Real-time velocity and distance analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-muted/20 rounded-lg overflow-hidden">
                <img 
                  src={radarRangeDopplerImage} 
                  alt="Radar Range Doppler Heatmap" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 space-y-1 bg-background/80 p-2 rounded">
                  <div className="text-xs font-semibold">Detection: 12 targets</div>
                  <div className="text-xs text-muted-foreground">Range: 0-100m</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LiDAR Point Cloud */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Waves className="h-5 w-5 text-primary" />
                <span>LiDAR Point Cloud</span>
              </CardTitle>
              <CardDescription>3D environment reconstruction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-muted/20 rounded-lg overflow-hidden">
                <img 
                  src={lidarPointCloudImage} 
                  alt="LiDAR Point Cloud Visualization" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-background/80 p-2 rounded">
                  <div className="text-xs font-semibold">Points: 2.3M</div>
                  <div className="text-xs text-muted-foreground">Range: 200m</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Health */}
        <Card className="bg-gradient-card border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>System Health & Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Network Uptime</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={99.97} className="h-2" />
                <div className="text-xs text-muted-foreground">99.97% (SLA: 99.9%)</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>RF Link Quality</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={92} className="h-2" />
                <div className="text-xs text-muted-foreground">Avg SNR: 28.4 dB</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Energy Efficiency</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={85} className="h-2" />
                <div className="text-xs text-muted-foreground">34.2% savings vs omnidirectional</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connected TX Systems */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Radio className="h-5 w-5 text-primary" />
                  <span>Connected TX Systems</span>
                </CardTitle>
                <CardDescription>Monitor TX-RX links with real-time performance metrics</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Add System
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
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-muted-foreground">
                          RX Connections: {device.connectedRx}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Link Budget: {device.linkBudget} dBm
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="font-semibold">{device.efficiency}%</p>
                      <p className="text-sm text-muted-foreground">Efficiency</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold">{device.pathLoss} dB</p>
                      <p className="text-sm text-muted-foreground">Path Loss</p>
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
                  <span className="text-sm">TX-001 beam optimization increased efficiency to 94.7%</span>
                </div>
                <span className="text-xs text-muted-foreground">2 minutes ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <Camera className="h-4 w-4 text-info" />
                  <span className="text-sm">Computer vision detected new obstacle in TX-002 environment</span>
                </div>
                <span className="text-xs text-muted-foreground">8 minutes ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 text-info" />
                  <span className="text-sm">RF exposure compliance verified for all 4 systems</span>
                </div>
                <span className="text-xs text-muted-foreground">15 minutes ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <Radar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Radar detected 23 new targets in environment map</span>
                </div>
                <span className="text-xs text-muted-foreground">22 minutes ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <span className="text-sm">TX-004 path loss increased to 98.3 dB - beam recalibrating</span>
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