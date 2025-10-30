/**
 * 主应用组件
 */
const App = () => {
  const { useState } = React;
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <div className="header-content">
          <h1>🧮 数学问题求解器</h1>
          <p className="subtitle">提供详细的分步解答和解释</p>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>
      <main className="main-content">
        <SolverPage />
      </main>
      <footer className="app-footer">
        <p>© 2024 数学求解器 | 支持多种难度级别的数学问题</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));