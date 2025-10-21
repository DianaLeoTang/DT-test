module.exports = async (page, scenario, vp) => {
  console.log('\n【onBefore】开始准备页面访问...');
  
  // 1. 加载 cookies
  await require('./loadCookies')(page, scenario);
  
  // 2. 在页面加载前注入认证信息（关键！）
  // 这样可以确保访问任何页面前都已经有认证信息
  await page.evaluateOnNewDocument(() => {
    // 设置 localStorage 认证信息
    localStorage.setItem('token', '{"data":{"stoken":"AAFcmAAAYS00eLCBeZhoCQ3c6DU53Z0IXTUwLLkJYbVE9gtAIAAALpziyB_nov9BB4GLhgpptTIQclsAAGTf6xFpDAAA_NmwGcUugxoHZngaW6gAAMnvgB5a3AAAgACM","uid":100376347,"phone":"19801191517"}}');
    localStorage.setItem('userInfo', JSON.stringify({
      id: 'test_user',
      phone: '13800138000',
      name: '测试用户'
    }));
  });
  
  console.log('✅ 认证信息已准备好，即将访问页面\n');
};
