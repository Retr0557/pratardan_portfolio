const AnimatedButton = ({ children, onClick, className = '', variant = 'primary' }) => {
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-medium
        transition-all duration-300 transform
        hover:scale-105 active:scale-95
        shadow-lg hover:shadow-xl
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
