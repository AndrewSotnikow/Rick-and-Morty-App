import styled from 'styled-components/macro'
import { Spacing, spacingMixin } from '../../styles/spacing'
import { resolveResponsiveProp } from '../../styles/mixins'
import { TextVariant, Color } from '../../styles/types'
type Align = 'left' | 'right' | 'center'

export interface TextProps extends Spacing {
  variant?: TextVariant
  fontWeight?: 'Regular' | 'Medium' | 'Bold'
  color?: Color
  align?: Align
}

const Text = styled.p<TextProps>`
  color: ${({ theme, color }) => color && theme.colors[color]};
  font-family: ${({ theme, variant }) => theme.textVariants[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.textVariants[variant].fontSize}px;
  line-height: ${({ theme, variant }) => theme.textVariants[variant].lineHeight}%;

  ${({ align }) =>
    align &&
    resolveResponsiveProp({
      type: 'text-align',
      value: align,
    })}

  ${spacingMixin}
`
export default Text
