export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-url': {
        url: 'rebase' // 自动根据 output.css 的位置调整 url 路径
      }
    }
  }