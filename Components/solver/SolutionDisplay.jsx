/**
 * 解答显示组件
 */
const SolutionDisplay = ({ solution }) => {
  const { useState } = React;
  const [expandedSteps, setExpandedSteps] = useState(new Set([0]));

  const toggleStep = (index) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSteps(newExpanded);
  };

  const expandAll = () => {
    setExpandedSteps(new Set(solution.steps.map((_, i) => i)));
  };

  const collapseAll = () => {
    setExpandedSteps(new Set());
  };

  return (
    <div className="solution-display">
      <div className="solution-header">
        <h2>✅ 解答过程</h2>
        <div className="solution-controls">
          <button className="control-btn" onClick={expandAll}>展开全部</button>
          <button className="control-btn" onClick={collapseAll}>折叠全部</button>
        </div>
      </div>

      <div className="solution-result">
        <div className="result-label">最终答案：</div>
        <div className="result-value">{solution.finalAnswer}</div>
      </div>

      <div className="solution-steps">
        <h3>📋 详细步骤：</h3>
        {solution.steps.map((step, index) => (
          <StepCard
            key={index}
            step={step}
            index={index}
            isExpanded={expandedSteps.has(index)}
            onToggle={() => toggleStep(index)}
          />
        ))}
      </div>

      {solution.explanation && (
        <div className="solution-explanation">
          <h3>💡 详细解释：</h3>
          <p>{solution.explanation}</p>
        </div>
      )}

      {solution.relatedConcepts && solution.relatedConcepts.length > 0 && (
        <div className="related-concepts">
          <h3>📚 相关概念：</h3>
          <div className="concept-tags">
            {solution.relatedConcepts.map((concept, index) => (
              <span key={index} className="concept-tag">{concept}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};