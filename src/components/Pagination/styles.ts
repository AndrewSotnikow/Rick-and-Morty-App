import styled, { css } from 'styled-components'
import { Color } from '../../styles/types'

interface IPaginationButtonProps {
  color: Color
  isHover?: boolean
  arrow?: string
}

const PaginationButton = styled.button<IPaginationButtonProps>`
  background: ${({ theme, color }) => theme.colors[color]};
  border: 1px solid ${({ theme }) => theme.colors.blue_40};
  box-shadow: 0px 2px 4px rgba(176, 194, 205, 0.3);
  border-radius: 5px;
  width: 40px;
  height: 40px;
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
