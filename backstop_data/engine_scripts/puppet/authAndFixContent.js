module.exports = async (page, scenario, vp) => {
  console.log('开始执行认证和内容固定脚本...');
  
  // 首先执行原来的认证逻辑
  const authHandler = require('./authHandler.js');
  await authHandler(page, scenario, vp);
  
  // 然后固定动态内容
  console.log('正在处理动态内容...');
  
  await page.evaluate(() => {
    // 固定所有输入框的值为空或固定文本
    const inputs = document.querySelectorAll('input[type="text"], input:not([type])');
    inputs.forEach(input => {
      input.value = '';
      input.setAttribute('value', '');
      input.setAttribute('readonly', 'readonly');
    });

    // 固定所有文本域
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.value = '';
      textarea.textContent = '';
      textarea.setAttribute('readonly', 'readonly');
    });

    // 移除所有动画和过渡效果
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        animation: none !important;
        transition: none !important;
      }
      input, textarea {
        caret-color: transparent !important;
      }
    `;
    document.head.appendChild(style);
  });

  console.log('认证和内容固定完成');
};

