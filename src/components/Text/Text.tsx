import styled from 'styled-components/macro'
import { Spacing, spacingMixin } from '../../styles/spacing'
import { resolveResponsiveProp } from '../../styles/mixins'
import { TextVariant, Color } from '../../styles/types'
type Align = 'left' | 'right' | 'center'

export interface TextProps extends Spacing {
  fontSize: number
  lineHeight: number
  variant: TextVariant
  fontFamily?: string
  fontWeight?: 'Regular' | 'Medium' | 'Bold'
  color?: Color
  align?: Align
}

const Text = styled.p<TextProps>`
  color: ${({ theme, color }) => color && theme.colors[color]};
  font-size: ${({ theme, variant }) => theme.textVariants[variant].fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  font-family: ${({ fontFamily }) => fontFamily && fontFamily};
  ${({ align }) =>
    align &&
    resolveResponsiveProp({
      type: 'text-align',
      value: align,
    })}

  ${spacingMixin}
`
export default Text
