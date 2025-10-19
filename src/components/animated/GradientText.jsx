const GradientText = ({ children, className = '' }) => {
  return (
    <span
      className={`
        bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600
        bg-clip-text text-transparent
        animate-gradient
        ${className}
      `}
      style={{
        backgroundSize: '200% auto',
        animation: 'gradient 3s linear infinite',
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
