interface ButtonProps {
  label: string;
  color: string;
}

export const Button = ({ label, color }: ButtonProps) => {
  return (
    <button 
      style={{ 
        backgroundColor: color, 
        border: 'none', 
        padding: '10px 20px', 
        borderRadius: '8px', 
        cursor: 'pointer', 
        color: '#fff', 
        fontWeight: 'bold',
        transition: 'opacity 0.2s'
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
      onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {label}
    </button>
  );
};
