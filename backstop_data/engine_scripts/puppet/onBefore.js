module.exports = async (page, scenario, viewport) => {
  console.log('设置登录状态...');
  
  await page.goto('http://10.59.207.193:10086/', { waitUntil: 'networkidle0' });
  
  // 设置localStorage（不是Cookie）
  await page.evaluate(() => {
    localStorage.setItem('_TOKEN_', JSON.stringify({
      data: {
        stoken: "AAFcmAAAYS00eLCBeZhoCQ3c6DU53Z0IXTUwLLkJYbVE9gtAIAAALpziyB_nov9BB4GLhgpptTIQclsAAGTf6xFpDAAA_NmwGcUugxoHZngaW6gAAMnvgB5a3AAAgACM",
        uid: 100376347,
        phone: "19801191517"
      }
    }));
  });
  
  console.log('localStorage已设置');
  
  await page.reload({ waitUntil: 'networkidle0' });
  
  console.log('页面已刷新');
};