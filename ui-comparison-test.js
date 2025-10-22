const backstop = require('backstopjs');
const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

async function setupUIComparisonTest() {
  console.log('🚀 开始UI还原度测试准备...');
  
  // 1. 配置
  const config = {
    id: 'ui_restoration',
    viewports: [
      { label: 'iPhone', width: 375, height: 812 }
    ],
    scenarios: [
      {
        label: '收件信息页面',
        url: 'http://10.59.207.193:10086/#/chooseAddress',
        delay: 2000,
        misMatchThreshold: 2,
        selectors: ['document'],
        readySelector: 'body',
        hideSelectors: [
          '.timestamp',
          '.real-time-data'
        ]
      }
    ],
    paths: {
      bitmaps_reference: 'backstop_data/bitmaps_reference',
      bitmaps_test: 'backstop_data/bitmaps_test',
      html_report: 'backstop_data/html_report'
    },
    report: ['browser'],
    engine: 'puppeteer',
    resembleOutputOptions: {
      errorColor: { red: 255, green: 0, blue: 255 },
      transparency: 0.5,
      ignoreAntialiasing: true
    }
  };
  
  // 2. 确保目录存在
  await fs.ensureDir('backstop_data/bitmaps_reference');
  
  // 3. 转换UI设计图
  const uiDesignPath = './ui-design.png'; // 你的UI设计图路径
  const referencePath = './backstop_data/bitmaps_reference/0_收件信息页面_0_document_0_iPhone.png';
  
  if (await fs.pathExists(uiDesignPath)) {
    console.log('📷 正在转换UI设计图...');
    await sharp(uiDesignPath)
      .resize(375, null, { fit: 'inside' })
      .png()
      .toFile(referencePath);
    console.log('✅ UI设计图已准备完成');
  } else {
    console.log('⚠️  请将UI设计图放在项目根目录，命名为 ui-design.png');
    return;
  }
  
  // 4. 运行测试
  console.log('🧪 开始对比测试...');
  try {
    await backstop('test', { config });
    console.log('✅ 测试完成！');
  } catch (error) {
    console.log('⚠️  发现差异，请查看报告');
  }
}

// 运行
setupUIComparisonTest().catch(console.error);