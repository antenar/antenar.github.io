import React, { Fragment, memo } from 'react';
import { Handle, useStore, Position, useReactFlow } from '@xyflow/react';

const dimensionAttrs = ['width', 'height'];

export default memo(({ id }: { id: string }) => {
  const { setNodes } = useReactFlow();
  const dimensions = useStore((s) => {
    const node = s.nodeLookup.get('2-3');
    if (
      !node ||
      !node.measured.width ||
      !node.measured.height ||
      !s.edges.some((edge) => edge.target === id)
    ) {
      return null;
    }
    return {
      width: node.measured.width,
      height: node.measured.height,
    };
  });
  const updateDimension = (attr: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === '2-3') {

          const parentNode = nds.find(node => node.id === '2-1');
          const parentWidth = parentNode ? (parentNode.style?.width as number) : Infinity;
          const parentHeight = parentNode ? (parentNode.style?.height as number) : Infinity;
          
          const currentNode = nds.find(node => node.id === '2-3');
          const currentPosX = currentNode?.position.x || 0;
          const currentPosY = currentNode?.position.y || 0;
  
          const maxWidth = Math.max(parentWidth - currentPosX, 0);
          const maxHeight = Math.max(parentHeight - currentPosY, 0);
  
          const newSize = {
            width: attr === 'width' ? Math.min(value, maxWidth) : (currentNode?.style?.width as number),
            height: attr === 'height' ? Math.min(value, maxHeight) : (currentNode?.style?.height as number),
          };
  
          return {
            ...n,
            style: {
              ...n.style,
              [attr]: newSize[attr as keyof typeof newSize],
            },
          };
        }
  
        return n;
      }),
    );
  };
  
  
  return (
    <div>
      {dimensionAttrs.map((attr) => (
        <Fragment key={attr}>
          <label>Node {attr}</label>
          <input
            type="number"
            value={dimensions ? parseInt((dimensions as any)[attr]) : 0}
            onChange={updateDimension(attr)}
            className="text-input-node__input nodrag"
            disabled={!dimensions}
          />
        </Fragment>
      ))}
      {!dimensionAttrs && 'no node connected'}
      <Handle type="target" position={Position.Top} className='custom-handle' />
    </div>
  );
});