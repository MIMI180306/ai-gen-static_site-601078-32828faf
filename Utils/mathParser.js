/**
 * 数学问题解析工具
 * 解析用户输入的数学问题
 */
const parseMathProblem = (input) => {
  const trimmed = input.trim();
  
  // 检测问题类型
  if (trimmed.includes('=') && !trimmed.includes(',')) {
    return {
      type: 'equation',
      equation: trimmed,
      originalInput: input
    };
  }
  
  if (trimmed.includes(',') && trimmed.includes('=')) {
    return {
      type: 'system',
      equations: trimmed.split(',').map(eq => eq.trim()),
      originalInput: input
    };
  }
  
  if (trimmed.includes('^') && !trimmed.includes('=')) {
    return {
      type: 'factorization',
      expression: trimmed,
      originalInput: input
    };
  }
  
  if (trimmed.match(/[+\-×÷*/()\d]/)) {
    return {
      type: 'arithmetic',
      expression: trimmed,
      originalInput: input
    };
  }
  
  return {
    type: 'general',
    expression: trimmed,
    originalInput: input
  };
};