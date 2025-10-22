const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false, 
    args: ['--no-sandbox'] 
  });
  
  const page = await browser.newPage();
  await page.goto('http://10.59.207.193:10086/');
  
  console.log('👉 在浏览器中手动登录，登录成功后按回车键...');
  
  // 等待用户按回车
  await new Promise(resolve => {
    process.stdin.once('data', resolve);
  });
  
  // 直接获取Cookie
  const cookies = await page.cookies();
  
  // 保存
  fs.mkdirSync('backstop_data/engine_scripts', { recursive: true });
  fs.writeFileSync(
    'backstop_data/engine_scripts/cookies.json',
    JSON.stringify(cookies, null, 2)
  );
  
  console.log('✅ Cookie已保存，共', cookies.length, '个');
  console.log('Cookie内容：');
  console.log(JSON.stringify(cookies, null, 2));
  
  await browser.close();
  
  console.log('\n现在运行: backstop test');
})();