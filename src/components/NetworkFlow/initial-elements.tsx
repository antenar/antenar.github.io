import React from 'react';
import { MarkerType } from '@xyflow/react';

export const nodes = [
  {
    id: 'annotation-1',
    type: 'annotation',
    draggable: false,
    selectable: false,
    data: {
      level: 1,
      label:
        'Antennar Cloud Platform: TX/RX systems with AI-powered beam steering',
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: 'translate(-30px,10px) rotate(-80deg)',
      },
    },
    position: { x: -200, y: -30 },
  },
  {
    id: '1-1',
    type: 'input',
    data: {
      label: 'TX Node 001',
    },
    position: { x: 150, y: 0 },
  },
  {
    id: '1-2',
    type: 'default',
    data: {
      label: 'Cloud Platform',
    },
    position: { x: 0, y: 100 },
  },
  {
    id: '1-3',
    type: 'output',
    data: {
      label: 'RX Node 001',
    },
    position: { x: 300, y: 100 },
  },
  {
    id: 'annotation-2',
    type: 'annotation',
    draggable: false,
    selectable: false,
    data: {
      level: 2,
      label: 'Real-time monitoring, AI optimization and beam steering controls',
      arrowStyle: {
        left: 0,
        bottom: 0,
        transform: 'translate(5px, 25px) scale(1, -1) rotate(100deg)',
      },
    },
    position: { x: 220, y: 200 },
  },
  {
    id: '2-1',
    type: 'group',
    data: {},
    position: {
      x: -170,
      y: 250,
    },
    style: {
      width: 380,
      height: 180,
    },
  },
  {
    id: '2-2',
    type: 'tools',
    data: {},
    position: { x: 50, y: 50 },
    style: {
      width: 80,
      height: 80,
    },
    parentId: '2-1',
    extent: 'parent' as const,
  },
  {
    id: '2-3',
    type: 'resizer',
    data: {
      label: 'Network Control',
    },
    position: { x: 250, y: 50 },
    style: {
      width: 80,
      height: 80,
    },
    parentId: '2-1',
    extent: 'parent' as const,
  },
  {
    id: 'annotation-3',
    type: 'annotation',
    draggable: false,
    selectable: false,
    data: {
      level: 3,
      label: <>Monitor TX/RX performance and environment conditions in real-time</>,
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: 'translate(-35px, 20px) rotate(-80deg)',
      },
    },
    position: { x: -40, y: 570 },
  },
  {
    id: '3-2',
    type: 'textinput',
    position: { x: 150, y: 650 },
    data: {},
  },
  {
    id: '3-1',
    type: 'circle',
    position: { x: 350, y: 500 },
    data: {},
  },
];

export const edges = [
  {
    id: 'e1-2',
    source: '1-1',
    target: '1-2',
    label: 'RF Link',
    type: 'smoothstep',
  },
  {
    id: 'e1-3',
    source: '1-1',
    target: '1-3',
    animated: true,
    label: 'beam pattern',
  },
  {
    id: 'e2-2',
    source: '1-2',
    target: '2-2',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2-3',
    source: '2-2',
    target: '2-3',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e3-3',
    source: '2-3',
    sourceHandle: 'a',
    target: '3-2',
    type: 'button',
    animated: true,
    style: { stroke: 'hsl(var(--primary))' },
  },
  {
    id: 'e3-4',
    source: '2-3',
    sourceHandle: 'b',
    target: '3-1',
    type: 'button',
  },
];