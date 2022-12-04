import 'styled-components/macro'
import { TextVariants } from './variants'

export type Color = ValuesOf<typeof ColorVariants>
export type TextVariant = ValuesOf<typeof TextVariants>

interface TextTypography {
  fontSize: number
  lineHeight: number
  fontFamily?: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<Color, string>
    fonts: {
      title: string
      text: string
      text_bold: string
      text_light: string
    }
    textVariants: Record<TextVariant, TextTypography>
  }
}
