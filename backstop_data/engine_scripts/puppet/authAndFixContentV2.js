module.exports = async (page, scenario, vp) => {
  console.log('\n========================================');
  console.log('开始执行认证和内容固定脚本 V2');
  console.log('========================================\n');
  
  // ==================== 第一步：处理认证 ====================
  console.log('【步骤 1/3】处理认证...');
  
  await page.evaluate(() => {
    // 设置 localStorage 认证信息
    // ⚠️ 方案 1: 如果您知道有效的 token，直接在这里设置
    // localStorage.setItem('token', 'YOUR_REAL_TOKEN_HERE');
    
    // ⚠️ 方案 2: 如果不需要真实登录，设置模拟数据跳过验证
    localStorage.setItem('token', '{"data":{"stoken":"AAFcmAAAYS00eLCBeZhoCQ3c6DU53Z0IXTUwLLkJYbVE9gtAIAAALpziyB_nov9BB4GLhgpptTIQclsAAGTf6xFpDAAA_NmwGcUugxoHZngaW6gAAMnvgB5a3AAAgACM","uid":100376347,"phone":"19801191517"}}');
    localStorage.setItem('userInfo', JSON.stringify({
      id: 'test_user',
      phone: '13800138000',
      name: '测试用户'
    }));
    
    console.log('LocalStorage token 已设置');
  });
  
  // 检查是否在登录页
  await new Promise(resolve => setTimeout(resolve, 1000));
  let currentUrl = page.url();
  console.log('当前页面:', currentUrl);
  
  // 如果在登录页，尝试导航到目标页面
  if (currentUrl.includes('login') || currentUrl !== scenario.url) {
    console.log('检测到需要跳转，导航到目标页面...');
    try {
      await page.goto(scenario.url, { 
        waitUntil: 'networkidle2',
        timeout: 10000 
      });
      console.log('✅ 已导航到目标页面');
    } catch (error) {
      console.log('⚠️ 导航超时，继续执行...');
    }
  }
  
  // 再次等待页面稳定
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  currentUrl = page.url();
  console.log('最终页面:', currentUrl);
  
  if (currentUrl.includes('login')) {
    console.log('\n⚠️⚠️⚠️ 警告：仍然停留在登录页面 ⚠️⚠️⚠️');
    console.log('可能的原因：');
    console.log('1. 应用强制要求真实的 token');
    console.log('2. 需要真实登录才能访问该页面');
    console.log('3. 路由守卫拦截了未登录用户');
    console.log('\n解决方法：');
    console.log('1. 在浏览器中登录后，获取真实的 token');
    console.log('2. 更新此脚本中的 token 值');
    console.log('3. 或者更新 cookies.json 文件');
    console.log('参考文档：GET-COOKIES-GUIDE.md\n');
  }
  
  // ==================== 第二步：等待页面完全加载 ====================
  console.log('【步骤 2/3】等待页面完全加载...');
  
  try {
    // 等待常见的页面元素
    await page.waitForSelector('body', { timeout: 5000 });
    console.log('✅ 页面已加载');
  } catch (error) {
    console.log('⚠️ 等待超时，继续执行');
  }
  
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // ==================== 第三步：固定动态内容 ====================
  console.log('【步骤 3/3】固定动态内容...');
  
  await page.evaluate(() => {
    console.log('开始固定页面内容...');
    
    // 1. 固定所有输入框
    const inputs = document.querySelectorAll('input[type="text"], input[type="tel"], input:not([type])');
    console.log(`找到 ${inputs.length} 个输入框`);
    inputs.forEach(input => {
      input.value = '';
      input.setAttribute('value', '');
      input.setAttribute('readonly', 'readonly');
    });
    
    // 2. 固定所有文本域
    const textareas = document.querySelectorAll('textarea');
    console.log(`找到 ${textareas.length} 个文本域`);
    textareas.forEach(textarea => {
      textarea.value = '';
      textarea.textContent = '';
      textarea.setAttribute('readonly', 'readonly');
    });
    
    
    // 3. 移除所有动画、过渡效果、光标
    const style = document.createElement('style');
    style.innerHTML = `
      *, *::before, *::after {
        animation: none !important;
        animation-duration: 0s !important;
        transition: none !important;
        transition-duration: 0s !important;
      }
      input, textarea {
        caret-color: transparent !important;
      }
    `;
    document.head.appendChild(style);
    
    console.log('✅ 内容固定完成');
  });
  
  console.log('\n========================================');
  console.log('脚本执行完成');
  console.log('========================================\n');
};

