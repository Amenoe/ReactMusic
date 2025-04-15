import 'styled-components'

// 扩展 DefaultTheme 接口
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      PRIMARY_COLOR: string
      PRIMARY_COLOR_DARK: string
      HEADER_BACKGROUND_COLOR: string
      FOOTER_BACKGROUND_COLOR: string
      MAIN_BACKGROUND_COLOR: string
      BORDER_COLOR_BASE: string
    }
    mixin: {
      wrapv1: string
      wrapv2: string
      textNoWrap: string
    }
  }
}
