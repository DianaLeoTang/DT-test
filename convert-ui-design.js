const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertUIDesign() {
  const inputPath = './ui-design.png';
  const outputDir = './backstop_data/bitmaps_reference';
  const outputPath = path.join(outputDir, '0_收件信息页面_完整_0_document_0_mobile.png');
  
  // 检查输入文件是否存在
  if (!fs.existsSync(inputPath)) {
    console.error('❌ 错误：找不到UI设计图！');
    console.log('📝 请按以下步骤操作：');
    console.log('1. 将UI设计图复制到项目根目录');
    console.log('2. 重命名为：ui-design.png');
    console.log('3. 当前应该在：' + path.resolve(inputPath));
    return;
  }
  
  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('✅ 创建目录：' + outputDir);
  }
  
  try {
    // 获取原始图片信息
    const metadata = await sharp(inputPath).metadata();
    console.log('📷 原始图片尺寸：', metadata.width, 'x', metadata.height);
    
    // 转换图片
    await sharp(inputPath)
      .resize(375, null, {
        fit: 'inside',
        withoutEnlargement: false
      })
      .png()
      .toFile(outputPath);
    
    console.log('✅ UI设计图转换成功！');
    console.log('📁 保存位置：' + outputPath);
    console.log('');
    console.log('🚀 接下来运行：backstop test');
  } catch (error) {
    console.error('❌ 转换失败：', error.message);
  }
}

convertUIDesign();