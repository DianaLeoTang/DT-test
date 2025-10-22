const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async () => {
  console.log('🍪 开始保存Cookie...\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  
  console.log('📱 浏览器已打开');
  console.log('🔐 请在浏览器中手动登录...');
  console.log('⏰ 登录成功后，请等待10秒（不要关闭浏览器）\n');
  
  // 打开你的网站
  await page.goto('http://10.59.207.193:10086/');
  
  // 等待用户手动登录
  await new Promise(resolve => {
    console.log('⏳ 等待60秒供您登录...');
    setTimeout(resolve, 60000);
  });
  
  // 尝试访问需要登录的页面，确认登录成功
  await page.goto('http://10.59.207.193:10086/#/chooseAddress');
  await page.waitForTimeout(3000);
  
  const currentUrl = page.url();
  if (currentUrl.includes('login')) {
    console.log('⚠️  似乎还在登录页，请确认是否登录成功');
  } else {
    console.log('✅ 已成功访问需要登录的页面');
  }
  
  // 获取所有Cookie
  const cookies = await page.cookies();
  
  // 保存Cookie
  const cookieDir = './backstop_data/engine_scripts';
  await fs.ensureDir(cookieDir);
  const cookiePath = `${cookieDir}/cookies.json`;
  
  await fs.writeFile(cookiePath, JSON.stringify(cookies, null, 2));
  
  console.log('\n✅ Cookie已保存！');
  console.log('📁 保存位置:', cookiePath);
  console.log('🍪 Cookie数量:', cookies.length);
  
  // 显示Cookie信息
  console.log('\n📊 Cookie详情:');
  cookies.forEach(cookie => {
    console.log(`   ${cookie.name}: ${cookie.value.substring(0, 20)}...`);
  });
  
  await browser.close();
  console.log('\n🎉 完成！现在可以运行: backstop test');
})();