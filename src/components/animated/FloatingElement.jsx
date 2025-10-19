import { useEffect, useState } from 'react';

const FloatingElement = ({ children, className = '' }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const y = Math.sin((offset * Math.PI) / 180) * 10;

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${y}px)`,
        transition: 'transform 0.05s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
