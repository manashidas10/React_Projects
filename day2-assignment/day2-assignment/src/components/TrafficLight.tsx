interface TrafficLightProps {
  color: 'red' | 'yellow' | 'green';
}

export const TrafficLight = ({ color }: TrafficLightProps) => {
  const getMessage = () => {
    switch (color) {
      case 'red': return 'Stop';
      case 'yellow': return 'Slow Down';
      case 'green': return 'Go';
      default: return 'Wait';
    }
  };

  const getHex = () => {
    switch (color) {
      case 'red': return '#ef4444';
      case 'yellow': return '#eab308';
      case 'green': return '#22c55e';
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '40px', width: 'fit-content' }}>
      <div style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: getHex(),
        boxShadow: `0 0 20px ${getHex()}`,
        transition: 'all 0.5s ease'
      }} />
      <span style={{ 
        fontSize: '1rem', 
        fontWeight: 'bold',
        color: getHex(),
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {getMessage()}
      </span>
    </div>
  );
};
