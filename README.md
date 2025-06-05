# 🚀 Jibril Portfolio Website

> 个人作品集网站，采用现代化前端技术栈构建，展示专业技能和教育背景。

## ✨ 特性

- 🎨 **现代化设计** - 简洁美观的用户界面
- 📱 **响应式布局** - 完美支持各种设备尺寸
- ⚡ **高性能** - 使用 Tailwind CSS 优化样式
- 🔧 **易于维护** - 模块化的项目结构
- 🌐 **SEO 友好** - 语义化 HTML 和优化的元标签
- 🎬 **动漫卡片轮播** - 支持无限循环、圆形按钮、SVG箭头、自适应居中、Garamond 字体美化

## 🛠️ 技术栈

- **HTML5** - 语义化标记
- **Tailwind CSS v4.1.8** - 实用优先的 CSS 框架
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - 自动添加浏览器前缀

## 📁 项目结构

```
jibril-website/
├── src/
│   ├── assets/          # 静态资源文件
│   ├── components/      # 可复用组件
│   ├── styles/          # 样式文件
│   │   └── input.css    # Tailwind 输入文件
│   └── index.html       # 主页面
├── dist/                # 构建输出目录
│   └── output.css       # 编译后的 CSS
├── node_modules/        # 依赖包
├── tailwind.config.js   # Tailwind 配置
├── package.json         # 项目配置
└── README.md           # 项目说明
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone [项目地址]
cd jibril-website
```

### 2. 安装依赖

```bash
npm install
```

### 3. 开发模式

启动开发服务器并监听文件变化：

```bash
npm run dev
```

在另一个终端窗口中启动本地服务器：

```bash
npm run serve
```

### 4. 构建生产版本

```bash
npm run build
```

### 5. 预览构建结果

```bash
npm run preview
```

## 📝 可用脚本

- `npm run dev` - 启动 Tailwind CSS 监听模式
- `npm run build` - 构建压缩版本的 CSS
- `npm run serve` - 启动本地开发服务器
- `npm run preview` - 构建并预览生产版本

## 🎨 自定义配置

### 颜色主题

项目使用自定义的颜色调色板：

- **Primary**: 蓝色系 (用于主要元素)
- **Secondary**: 绿色系 (用于次要元素)

### 响应式断点

- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px

## 🔧 自定义组件类

项目包含以下预定义的组件类：

- `.btn-primary` - 主要按钮样式
- `.card` - 卡片组件样式
- `.section-title` - 章节标题样式
- **Favourite Anime Carousel** - 动漫卡片轮播组件，支持无限循环与美观交互

## 📱 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👤 作者

**Lingchen Song**
- GitHub: [@jibril2333](https://github.com/jibril2333)
- 职位: Cloud Developer @ Nissan Motor Company
- 地点: Tokyo, Japan

---

*如果这个项目对你有帮助，请给它一个 ⭐️* 