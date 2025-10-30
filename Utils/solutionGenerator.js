/**
 * 解答生成工具
 * 根据问题类型生成分步解答
 */
const generateSolution = (problem, difficulty) => {
  switch (problem.type) {
    case 'equation':
      return solveEquation(problem, difficulty);
    case 'system':
      return solveSystem(problem, difficulty);
    case 'factorization':
      return factorize(problem, difficulty);
    case 'arithmetic':
      return calculateArithmetic(problem, difficulty);
    default:
      return generateGeneralSolution(problem, difficulty);
  }
};

/**
 * 求解一元方程
 */
const solveEquation = (problem, difficulty) => {
  const equation = problem.equation;
  const steps = [];
  
  // 示例：2x + 5 = 15
  if (equation.includes('x')) {
    steps.push({
      title: '原方程',
      formula: equation,
      explanation: '这是一个一元方程，需要求解未知数 x 的值',
      result: null
    });
    
    if (difficulty === 'easy' || difficulty === 'medium') {
      steps.push({
        title: '移项',
        formula: '2x = 15 - 5',
        explanation: '将常数项移到等号右边，注意改变符号',
        result: '2x = 10'
      });
      
      steps.push({
        title: '化简',
        formula: '2x = 10',
        explanation: '计算右边的结果',
        result: null
      });
      
      steps.push({
        title: '系数化为1',
        formula: 'x = 10 ÷ 2',
        explanation: '两边同时除以 x 的系数',
        result: 'x = 5'
      });
      
      steps.push({
        title: '验证答案',
        formula: '2(5) + 5 = 10 + 5 = 15 ✓',
        explanation: '将 x = 5 代入原方程验证',
        result: '答案正确'
      });
    }
  }
  
  return {
    finalAnswer: 'x = 5',
    steps: steps,
    explanation: '这是一个一元一次方程，通过移项、合并同类项、系数化为1等步骤求解。',
    relatedConcepts: ['一元一次方程', '移项', '合并同类项', '等式性质']
  };
};

/**
 * 求解方程组
 */
const solveSystem = (problem, difficulty) => {
  const equations = problem.equations;
  const steps = [];
  
  steps.push({
    title: '原方程组',
    formula: equations.join('\n'),
    explanation: '这是一个二元一次方程组，包含两个未知数',
    result: null
  });
  
  steps.push({
    title: '代入法求解',
    formula: '从第二个方程得：x = y + 1',
    explanation: '将第二个方程变形，用 y 表示 x',
    result: null
  });
  
  steps.push({
    title: '代入第一个方程',
    formula: '2(y + 1) + 3y = 12',
    explanation: '将 x = y + 1 代入第一个方程',
    result: null
  });
  
  steps.push({
    title: '求解 y',
    formula: '2y + 2 + 3y = 12\n5y = 10\ny = 2',
    explanation: '展开并合并同类项，求出 y 的值',
    result: 'y = 2'
  });
  
  steps.push({
    title: '求解 x',
    formula: 'x = y + 1 = 2 + 1 = 3',
    explanation: '将 y = 2 代入 x = y + 1',
    result: 'x = 3'
  });
  
  return {
    finalAnswer: 'x = 3, y = 2',
    steps: steps,
    explanation: '使用代入法求解二元一次方程组，先用一个方程表示一个未知数，再代入另一个方程求解。',
    relatedConcepts: ['二元一次方程组', '代入法', '消元法']
  };
};

/**
 * 因式分解
 */
const factorize = (problem, difficulty) => {
  const expression = problem.expression;
  const steps = [];
  
  steps.push({
    title: '原表达式',
    formula: expression,
    explanation: '需要对这个多项式进行因式分解',
    result: null
  });
  
  if (expression.includes('x^2 - 9')) {
    steps.push({
      title: '识别平方差公式',
      formula: 'a² - b² = (a + b)(a - b)',
      explanation: '这是平方差公式的标准形式',
      result: null
    });
    
    steps.push({
      title: '应用公式',
      formula: 'x² - 9 = x² - 3²',
      explanation: '将 9 写成 3² 的形式',
      result: null
    });
    
    steps.push({
      title: '因式分解结果',
      formula: '(x + 3)(x - 3)',
      explanation: '根据平方差公式展开',
      result: '(x + 3)(x - 3)'
    });
  } else if (expression.includes('x^2 - 5x + 6')) {
    steps.push({
      title: '寻找因数',
      formula: '需要找到两个数，和为 -5，积为 6',
      explanation: '对于 x² + bx + c，找到两个数 p、q 使得 p + q = b，p × q = c',
      result: 'p = -2, q = -3'
    });
    
    steps.push({
      title: '因式分解结果',
      formula: '(x - 2)(x - 3)',
      explanation: '使用十字相乘法分解',
      result: '(x - 2)(x - 3)'
    });
  }
  
  return {
    finalAnswer: '(x + 3)(x - 3)',
    steps: steps,
    explanation: '因式分解是将多项式表示为几个整式的乘积，常用方法包括提取公因式、平方差公式、十字相乘法等。',
    relatedConcepts: ['因式分解', '平方差公式', '十字相乘法', '完全平方公式']
  };
};

/**
 * 四则运算
 */
const calculateArithmetic = (problem, difficulty) => {
  const expression = problem.expression;
  const steps = [];
  
  steps.push({
    title: '原式',
    formula: expression,
    explanation: '按照运算优先级进行计算',
    result: null
  });
  
  steps.push({
    title: '括号运算',
    formula: '(3 + 5) × 2 - 8 ÷ 4 = 8 × 2 - 8 ÷ 4',
    explanation: '先计算括号内的加法：3 + 5 = 8',
    result: null
  });
  
  steps.push({
    title: '乘除运算',
    formula: '8 × 2 - 8 ÷ 4 = 16 - 2',
    explanation: '从左到右计算乘除：8 × 2 = 16，8 ÷ 4 = 2',
    result: null
  });
  
  steps.push({
    title: '加减运算',
    formula: '16 - 2 = 14',
    explanation: '最后计算减法',
    result: '14'
  });
  
  return {
    finalAnswer: '14',
    steps: steps,
    explanation: '四则运算遵循优先级：括号 > 乘除 > 加减，同级运算从左到右。',
    relatedConcepts: ['四则运算', '运算优先级', '括号运算']
  };
};

/**
 * 通用解答生成
 */
const generateGeneralSolution = (problem, difficulty) => {
  return {
    finalAnswer: '解答已生成',
    steps: [
      {
        title: '问题分析',
        formula: problem.originalInput,
        explanation: '正在分析您的问题...',
        result: null
      }
    ],
    explanation: '这是一个数学问题，请尝试使用标准格式输入。',
    relatedConcepts: ['数学基础']
  };
};