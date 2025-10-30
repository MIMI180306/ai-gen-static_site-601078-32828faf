/**
 * 问题输入组件
 */
const ProblemInput = ({ value, onChange, difficulty, onDifficultyChange, onSolve, onClear, loading }) => {
  const difficulties = [
    { value: 'easy', label: '简单', icon: '🟢' },
    { value: 'medium', label: '中等', icon: '🟡' },
    { value: 'hard', label: '困难', icon: '🔴' }
  ];

  return (
    <div className="problem-input">
      <div className="input-header">
        <h2>📝 输入数学问题</h2>
        <Select
          value={difficulty}
          onChange={onDifficultyChange}
          options={difficulties}
        />
      </div>

      <textarea
        className="problem-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="输入数学问题，例如：\n• 求解方程：2x + 5 = 15\n• 计算：(3 + 5) × 2\n• 求导：x^2 + 3x + 2\n• 因式分解：x^2 - 5x + 6"
        rows="5"
        disabled={loading}
      />

      <div className="input-actions">
        <Button
          onClick={onSolve}
          variant="primary"
          disabled={loading || !value.trim()}
        >
          {loading ? '求解中...' : '🚀 开始求解'}
        </Button>
        <Button
          onClick={onClear}
          variant="secondary"
          disabled={loading}
        >
          🗑️ 清空
        </Button>
      </div>

      <div className="input-tips">
        <p>💡 提示：支持基本运算、方程求解、因式分解、求导等</p>
      </div>
    </div>
  );
};