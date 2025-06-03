/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./*.html"
    ],
    theme: {
      extend: {
        // 在这里添加您的自定义主题配置
      },
    },
    plugins: [
      // 添加您需要的插件
      // require('@tailwindcss/forms'),
      // require('@tailwindcss/typography'),
    ],
  }
  