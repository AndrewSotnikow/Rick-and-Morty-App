import styled, { css } from 'styled-components'
import { Color, TextVariant } from '../../styles/types'

export interface IPaginationButtonProps {
  bgColor: Color
  textColor?: Color
  isHover?: boolean
  arrow?: string
  variant: TextVariant
}

export const PaginationButton = styled.button<IPaginationButtonProps>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  border: 1px solid ${({ theme }) => theme.colors.blue_40};
  box-shadow: 0 2px 4px rgba(176 194 205 / 30%);
  border-radius: 5px;
  width: 40px;
  height: 40px;
  font-family: ${({ theme, variant }) => theme.textVariants[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.textVariants[variant].fontSize}px;
  line-height: ${({ theme, variant }) => theme.textVariants[variant].lineHeight}%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_10};
  }

  ${({ arrow }) => css`
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center center;
  `}
`
export default PaginationButton
