/**
 * 通用选择器组件
 */
const Select = ({ value, onChange, options }) => {
  return (
    <div className="select-wrapper">
      <select
        className="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.icon} {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};