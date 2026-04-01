import { useState } from 'react';

export const HoverBox = () => {
  const [bgColor, setBgColor] = useState('#3b82f6');
  
  return (
    <div
      onMouseEnter={() => setBgColor('#ef4444')} // Red
      onMouseLeave={() => setBgColor('#3b82f6')} // Blue
      style={{
        width: '100%',
        height: '100px',
        backgroundColor: bgColor,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'default',
        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
      }}
    >
      {bgColor === '#ef4444' ? 'REEDDD RED RED' : 'BLUE BLUE BLUE'}
    </div>
  );
};
