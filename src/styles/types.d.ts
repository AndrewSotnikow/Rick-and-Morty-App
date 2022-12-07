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
    textVariants: Record<TextVariant, TextTypography>
  }
}

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: [string]
  url: string
  created: string
}
