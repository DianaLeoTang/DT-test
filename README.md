# DT-test
前端测试工具项目

## 📸 视觉回归测试 (UI Test)

这个项目使用 BackstopJS 进行视觉回归测试，并提供了一个友好的图片管理界面。

### 快速开始

#### 1. 上传参考图片（首次使用）

```bash
# 启动上传管理服务器
npm run ui:upload
```

然后在浏览器中打开: `http://localhost:3000/upload.html`

在界面中：
- 📁 为每个测试场景的不同视口选择参考图片
- ⬆️ 上传图片到系统
- 🔄 点击"同步到 BackstopJS"按钮，将图片同步到测试目录

#### 2. 运行视觉测试

```bash
# 运行 BackstopJS 测试
npm run ui
```

测试会自动：
- 访问配置的页面
- 截取屏幕截图
- 与参考图片对比
- 生成测试报告

#### 3. 手动同步参考图片（可选）

如果需要单独同步参考图片到 BackstopJS：

```bash
npm run ui:sync
```

### 工作流程

```
1. 上传参考图片
   ↓
2. 同步到 BackstopJS
   ↓
3. 运行测试
   ↓
4. 查看对比报告
```

### 配置文件说明

- **backstop.json** - BackstopJS 主配置文件，定义测试场景、视口等
- **reference-config.json** - 参考图片管理配置，由上传系统自动维护
- **backstop_data/bitmaps_reference/** - BackstopJS 参考图片目录
- **uploaded_references/** - 用户上传的原始图片存储

### 添加新的测试场景

编辑 `backstop.json`，在 `scenarios` 数组中添加新场景：

```json
{
  "label": "页面名称",
  "url": "http://your-url.com",
  "delay": 2000,
  "misMatchThreshold": 0.1
}
```

然后在上传界面中为新场景上传参考图片。

### 自定义视口

编辑 `backstop.json` 中的 `viewports` 数组：

```json
{
  "label": "mobile",
  "width": 375,
  "height": 667
}
```

### 注意事项

- ⚠️ 首次运行测试前必须先上传参考图片
- 📸 参考图片应该是期望的正确页面状态
- 🔄 修改页面后，如果视觉变化是预期的，需要更新参考图片
- 📊 测试报告会在 `backstop_data/html_report/` 目录生成

### 可用命令

| 命令 | 说明 |
|------|------|
| `npm run ui:upload` | 启动图片上传管理界面 |
| `npm run ui:sync` | 手动同步参考图片到 BackstopJS |
| `npm run ui` | 运行视觉测试 |
| `npm run ui:init` | 初始化 BackstopJS（首次安装时） |

---

## 🧪 其他测试

### E2E 测试
```bash
npm run e2e:test
```

### 服务测试
```bash
npm run service:test
```
