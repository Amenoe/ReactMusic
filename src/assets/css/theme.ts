/* 全局样式定义 */
const theme = {
  color: {
    PRIMARY_COLOR: '#c20c0c',
    PRIMARY_COLOR_DARK: '#a40011',
    HEADER_BACKGROUND_COLOR: '#242221', // 头部背景颜色
    FOOTER_BACKGROUND_COLOR: '#f2f2f2', // 页脚背景颜色
    MAIN_BACKGROUND_COLOR: '#f5f5f5', // 页面主体背景颜色
    BORDER_COLOR_BASE: '#d3d3d3'
  },
  mixin: {
    wrapv1: `
      width: 1100px;
      margin: 0 auto;
      `,
    wrapv2: `
      width: 980px;
      margin: 0 auto;
      `
  }
}
export default theme
