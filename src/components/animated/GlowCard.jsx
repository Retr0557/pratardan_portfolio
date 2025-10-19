const GlowCard = ({ children, className = '' }) => {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white dark:bg-gray-900 rounded-lg p-6 ring-1 ring-gray-900/5">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
