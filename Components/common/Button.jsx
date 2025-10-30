/**
 * 通用按钮组件
 */
const Button = ({ children, onClick, variant = 'primary', disabled = false, className = '' }) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};