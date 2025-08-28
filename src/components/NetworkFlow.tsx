import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import './NetworkFlow/xy-theme.css';

import {
  nodes as initialNodes,
  edges as initialEdges,
} from './NetworkFlow/initial-elements';
import AnnotationNode from './NetworkFlow/AnnotationNode';
import ToolbarNode from './NetworkFlow/ToolbarNode';
import ResizerNode from './NetworkFlow/ResizerNode';
import CircleNode from './NetworkFlow/CircleNode';
import TextInputNode from './NetworkFlow/TextInputNode';
import ButtonEdge from './NetworkFlow/ButtonEdge';

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextInputNode,
};

const edgeTypes = {
  button: ButtonEdge,
};

const nodeClassName = (node: any) => node.type;

const NetworkFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge({
      ...params,
      type: 'smoothstep',
      style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
      label: 'New Connection',
    }, eds)),
    [],
  );

  return (
    <div className="h-[600px] w-full border border-border rounded-lg bg-background/50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineStyle={{ stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
        defaultEdgeOptions={{
          style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
        }}
        style={{ backgroundColor: "hsl(var(--background))" }}
        panOnScroll
        selectionOnDrag
        panOnDrag={[1, 2]}
      >
        <MiniMap 
          zoomable 
          pannable 
          nodeClassName={nodeClassName}
          style={{
            backgroundColor: 'hsl(var(--muted))',
            border: '1px solid hsl(var(--border))',
          }}
          nodeColor={() => 'hsl(var(--primary))'}
          maskColor="hsl(var(--muted) / 0.7)"
        />
        <Controls />
        <Background 
          gap={20} 
          size={1}
          color="hsl(var(--muted-foreground) / 0.3)"
        />
      </ReactFlow>
    </div>
  );
};

export default NetworkFlow;