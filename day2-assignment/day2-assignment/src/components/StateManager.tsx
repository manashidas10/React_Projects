import { useState } from 'react';

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
      <p style={{ margin: 0, fontWeight: 'bold', color: isOn ? '#22c55e' : '#64748b' }}>
        Status: {isOn ? 'ON' : 'OFF'}
      </p>
      <button 
        onClick={() => setIsOn(!isOn)}
        style={{
          backgroundColor: isOn ? '#22c55e' : '#334155',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          width: 'fit-content'
        }}
      >
        Click to Switch
      </button>
    </div>
  );
};

export const TextMirror = () => {
  const [text, setText] = useState('');
  return (
    <div style={{ marginTop: '1.5rem' }}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type to see the magic..." 
        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white' }}
      />
      <div style={{ minHeight: '1.5rem', marginTop: '0.5rem', color: '#38bdf8', fontStyle: 'italic', background: 'rgba(56, 189, 248, 0.05)', padding: '8px', borderRadius: '4px' }}>
        {text ? text : 'Mirrored text will appear here...'}
      </div>
    </div>
  );
};
