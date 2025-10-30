/**
 * 单步解答卡片组件
 */
const StepCard = ({ step, index, isExpanded, onToggle }) => {
  return (
    <div className={`step-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="step-header" onClick={onToggle}>
        <div className="step-number">步骤 {index + 1}</div>
        <div className="step-title">{step.title}</div>
        <div className="step-toggle">
          {isExpanded ? '▼' : '▶'}
        </div>
      </div>

      {isExpanded && (
        <div className="step-content">
          <div className="step-formula">{step.formula}</div>
          <div className="step-explanation">{step.explanation}</div>
          {step.result && (
            <div className="step-result">
              <strong>结果：</strong> {step.result}
            </div>
          )}
          {step.note && (
            <div className="step-note">
              <strong>注意：</strong> {step.note}
            </div>
          )}
        </div>
      )}
    </div>
  );
};