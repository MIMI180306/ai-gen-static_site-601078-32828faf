/**
 * 求解器主页面
 */
const SolverPage = () => {
  const { useState } = React;
  const [problem, setProblem] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * 处理问题求解
   */
  const handleSolve = () => {
    if (!problem.trim()) {
      setError('请输入数学问题');
      return;
    }

    setLoading(true);
    setError('');

    setTimeout(() => {
      try {
        const parsedProblem = parseMathProblem(problem);
        const generatedSolution = generateSolution(parsedProblem, difficulty);
        setSolution(generatedSolution);
        setLoading(false);
      } catch (err) {
        setError('无法解析该问题，请检查输入格式');
        setLoading(false);
      }
    }, 500);
  };

  /**
   * 加载示例问题
   */
  const handleLoadExample = (exampleProblem) => {
    setProblem(exampleProblem.text);
    setDifficulty(exampleProblem.difficulty);
    setSolution(null);
    setError('');
  };

  /**
   * 清空输入
   */
  const handleClear = () => {
    setProblem('');
    setSolution(null);
    setError('');
  };

  return (
    <div className="solver-page">
      <div className="solver-container">
        <div className="input-section">
          <ProblemInput
            value={problem}
            onChange={setProblem}
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
            onSolve={handleSolve}
            onClear={handleClear}
            loading={loading}
          />
          {error && <div className="error-message">❌ {error}</div>}
        </div>

        <ExampleProblems onLoadExample={handleLoadExample} />

        {solution && (
          <div className="solution-section">
            <SolutionDisplay solution={solution} />
          </div>
        )}

        {loading && (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>正在生成解答...</p>
          </div>
        )}
      </div>
    </div>
  );
};