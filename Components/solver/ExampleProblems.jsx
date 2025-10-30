/**
 * 示例问题组件
 */
const ExampleProblems = ({ onLoadExample }) => {
  const examples = [
    {
      text: '2x + 5 = 15',
      difficulty: 'easy',
      category: '一元一次方程',
      icon: '🟢'
    },
    {
      text: 'x^2 - 5x + 6 = 0',
      difficulty: 'medium',
      category: '一元二次方程',
      icon: '🟡'
    },
    {
      text: 'x^2 - 9',
      difficulty: 'easy',
      category: '因式分解',
      icon: '🟢'
    },
    {
      text: '(3 + 5) × 2 - 8 ÷ 4',
      difficulty: 'easy',
      category: '四则运算',
      icon: '🟢'
    },
    {
      text: 'x^3 + 3x^2 + 2x',
      difficulty: 'medium',
      category: '求导',
      icon: '🟡'
    },
    {
      text: '2x + 3y = 12, x - y = 1',
      difficulty: 'hard',
      category: '二元一次方程组',
      icon: '🔴'
    }
  ];

  return (
    <div className="example-problems">
      <h3>📖 示例问题</h3>
      <div className="examples-grid">
        {examples.map((example, index) => (
          <div
            key={index}
            className="example-card"
            onClick={() => onLoadExample(example)}
          >
            <div className="example-header">
              <span className="example-icon">{example.icon}</span>
              <span className="example-category">{example.category}</span>
            </div>
            <div className="example-text">{example.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};