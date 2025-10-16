module.exports = async (page, scenario, vp) => {
  console.log('AUTH HANDLER > ' + scenario.label);
  
  // 等待页面加载完成
  // 页面已经加载完成，等待一下确保稳定
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 检查当前URL
  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);
  
  // 如果跳转到了登录页面，尝试设置认证信息
  if (currentUrl.includes('login') || await page.$('input[placeholder*="手机号"]')) {
    console.log('检测到登录页面，设置认证信息...');
    
    // 方法1: 设置localStorage认证信息
    await page.evaluate(() => {
      // 根据您的应用设置相应的认证信息
      localStorage.setItem('token', 'test_token_123');
      localStorage.setItem('userInfo', JSON.stringify({
        id: 'test_user',
        phone: '13800138000'
      }));
    });
    
    // 重新导航到目标页面
    // await page.goto('http://10.59.207.193:10086/#/chooseAddress', { waitUntil: 'networkidle0' });
    await page.goto(scenario.url, { waitUntil: 'networkidle0' });
    
    console.log('重新导航后的URL:', page.url());
  }
  
  // 等待页面完全加载
  await new Promise(resolve => setTimeout(resolve, 2000));
};