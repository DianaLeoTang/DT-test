const puppeteer = require('puppeteer');
const fs = require('fs');

// 兼容的等待函数
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const cookiePath = './backstop_data/engine_scripts/cookies.json';
  
  if (!fs.existsSync(cookiePath)) {
    console.log('❌ Cookie文件不存在，请先运行: node save-cookies.js');
    return;
  }
  
  const cookies = JSON.parse(fs.readFileSync(cookiePath));
  console.log('🍪 找到', cookies.length, '个Cookie\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  
  // 先访问首页
  await page.goto('http://10.59.207.193:10086/');
  
  // 设置Cookie
  await page.setCookie(...cookies);
  console.log('✅ Cookie已加载\n');
  
  // 访问需要登录的页面
  console.log('🔍 测试访问收件信息页面...');
  await page.goto('http://10.59.207.193:10086/#/chooseAddress', {
    waitUntil: 'networkidle0'
  });
  await wait(3000);
  
  const url = page.url();
  if (url.includes('login')) {
    console.log('❌ Cookie已失效，跳转到登录页');
    console.log('💡 请重新运行: node save-cookies.js');
  } else {
    console.log('✅ Cookie有效！成功访问页面');
    await page.screenshot({ path: 'test-with-cookie.png', fullPage: true });
    console.log('📸 截图已保存: test-with-cookie.png');
  }
  
  await browser.close();
})();