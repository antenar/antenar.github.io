import React, { Fragment, memo } from 'react';
import { Handle, useStore, Position, useReactFlow } from '@xyflow/react';

const dimensionAttrs = ['width', 'height'];

export default memo(({ id }: { id: string }) => {
  const { setNodes } = useReactFlow();
  const dimensions = useStore((s) => {
    const node = s.nodeLookup.get('antennar-cloud');
    if (
      !node ||
      !node.measured?.width ||
      !node.measured?.height ||
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
        if (n.id === 'antennar-cloud') {
          return {
            ...n,
            style: {
              ...n.style,
              [attr]: value,
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
            value={dimensions ? Math.round(dimensions[attr as keyof typeof dimensions]) : 0}
            onChange={updateDimension(attr)}
            className="text-input-node__input nodrag"
            disabled={!dimensions}
          />
        </Fragment>
      ))}
      {!dimensions && 'no node connected'}
      <Handle type="target" position={Position.Top} className='custom-handle' />
    </div>
  );
});