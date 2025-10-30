/**
 * 数学问题数据模型
 */
class Problem {
  constructor(text, type, difficulty) {
    this.id = Date.now();
    this.text = text;
    this.type = type;
    this.difficulty = difficulty;
    this.createdAt = new Date();
  }

  /**
   * 获取问题描述
   */
  getDescription() {
    return `${this.difficulty}难度的${this.type}问题`;
  }

  /**
   * 验证问题是否有效
   */
  isValid() {
    return this.text && this.text.trim().length > 0;
  }
}