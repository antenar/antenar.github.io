import React from 'react';
import { MarkerType } from '@xyflow/react';

export const nodes = [
  // Core Network Infrastructure
  {
    id: 'cloud-center',
    type: 'default',
    data: { label: 'Antennar Cloud' },
    position: { x: 400, y: 200 },
    style: {
      background: 'hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      border: '2px solid hsl(var(--primary))',
      borderRadius: '50px',
      width: 120,
      height: 60,
    },
  },
  
  // TX Nodes
  {
    id: 'tx-01',
    type: 'input',
    data: { label: 'TX Node 001' },
    position: { x: 100, y: 50 },
    style: { background: 'hsl(var(--success) / 0.1)', border: '2px solid hsl(var(--success))' },
  },
  {
    id: 'tx-02',
    type: 'input',
    data: { label: 'TX Node 002' },
    position: { x: 100, y: 350 },
    style: { background: 'hsl(var(--success) / 0.1)', border: '2px solid hsl(var(--success))' },
  },
  
  // RX Nodes
  {
    id: 'rx-01',
    type: 'output',
    data: { label: 'RX Node 001' },
    position: { x: 700, y: 50 },
    style: { background: 'hsl(var(--info) / 0.1)', border: '2px solid hsl(var(--info))' },
  },
  {
    id: 'rx-02',
    type: 'output',
    data: { label: 'RX Node 002' },
    position: { x: 700, y: 350 },
    style: { background: 'hsl(var(--info) / 0.1)', border: '2px solid hsl(var(--info))' },
  },
  
  // Edge Computing Nodes
  {
    id: 'edge-01',
    type: 'default',
    data: { label: 'Edge Server A' },
    position: { x: 300, y: 50 },
    style: { background: 'hsl(var(--warning) / 0.1)', border: '2px solid hsl(var(--warning))' },
  },
  {
    id: 'edge-02',
    type: 'default',
    data: { label: 'Edge Server B' },
    position: { x: 500, y: 350 },
    style: { background: 'hsl(var(--warning) / 0.1)', border: '2px solid hsl(var(--warning))' },
  },
  
  // IoT Devices
  {
    id: 'iot-cluster',
    type: 'default',
    data: { label: 'IoT Cluster' },
    position: { x: 200, y: 450 },
    style: { 
      background: 'hsl(var(--muted))', 
      border: '2px solid hsl(var(--muted-foreground))',
      borderRadius: '10px',
    },
  },
  
  // 5G Base Station
  {
    id: '5g-base',
    type: 'default',
    data: { label: '5G Base Station' },
    position: { x: 600, y: 450 },
    style: { 
      background: 'hsl(var(--primary) / 0.2)', 
      border: '2px solid hsl(var(--primary))',
      borderRadius: '20px',
    },
  },
  
  // Network Control Center
  {
    id: 'control-center',
    type: 'default',
    data: { label: 'Network Control' },
    position: { x: 400, y: 50 },
    style: { 
      background: 'hsl(var(--destructive) / 0.1)', 
      border: '2px solid hsl(var(--destructive))',
      width: 140,
    },
  },
];

export const edges = [
  // Core Cloud Connections
  {
    id: 'cloud-tx01',
    source: 'tx-01',
    target: 'cloud-center',
    label: 'AI Beam Control',
    type: 'smoothstep',
    style: { stroke: 'hsl(var(--success))', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--success))' },
  },
  {
    id: 'cloud-tx02',
    source: 'tx-02',
    target: 'cloud-center',
    label: 'Vision Feed',
    type: 'smoothstep',
    style: { stroke: 'hsl(var(--success))', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--success))' },
  },
  {
    id: 'cloud-rx01',
    source: 'cloud-center',
    target: 'rx-01',
    label: 'Signal Route',
    type: 'smoothstep',
    style: { stroke: 'hsl(var(--info))', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--info))' },
  },
  {
    id: 'cloud-rx02',
    source: 'cloud-center',
    target: 'rx-02',
    label: 'Data Stream',
    type: 'smoothstep',
    style: { stroke: 'hsl(var(--info))', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--info))' },
  },
  
  // Edge Computing Connections
  {
    id: 'edge-tx01',
    source: 'tx-01',
    target: 'edge-01',
    label: 'Local Processing',
    type: 'straight',
    style: { stroke: 'hsl(var(--warning))', strokeWidth: 2 },
    animated: true,
  },
  {
    id: 'edge-cloud',
    source: 'edge-01',
    target: 'cloud-center',
    label: 'Edge Sync',
    type: 'step',
    style: { stroke: 'hsl(var(--warning))', strokeWidth: 2 },
  },
  {
    id: 'edge02-rx02',
    source: 'edge-02',
    target: 'rx-02',
    label: 'Direct Link',
    type: 'straight',
    style: { stroke: 'hsl(var(--warning))', strokeWidth: 2 },
  },
  
  // IoT and 5G Connections
  {
    id: 'iot-tx02',
    source: 'iot-cluster',
    target: 'tx-02',
    label: 'Sensor Data',
    type: 'smoothstep',
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 2, strokeDasharray: '5,5' },
    animated: true,
  },
  {
    id: '5g-cloud',
    source: '5g-base',
    target: 'cloud-center',
    label: '5G Backhaul',
    type: 'smoothstep',
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 4 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
  },
  {
    id: '5g-rx02',
    source: '5g-base',
    target: 'rx-02',
    label: 'mmWave Link',
    type: 'straight',
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 3 },
    animated: true,
  },
  
  // Control Center Connections
  {
    id: 'control-cloud',
    source: 'control-center',
    target: 'cloud-center',
    label: 'Management API',
    type: 'step',
    style: { stroke: 'hsl(var(--destructive))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--destructive))' },
  },
  {
    id: 'control-edge01',
    source: 'control-center',
    target: 'edge-01',
    label: 'Config Update',
    type: 'step',
    style: { stroke: 'hsl(var(--destructive))', strokeWidth: 1, strokeDasharray: '3,3' },
  },
];