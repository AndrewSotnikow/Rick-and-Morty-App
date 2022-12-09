import styled, { css } from 'styled-components'
import { ReactNode } from 'react'
import triangle from '../../images/triangle.svg'
import Text from '../Text/Text'
import Box from '../Box/Box'
import { TextVariant } from '../../styles/types'

export interface DropdownProps {
  data: string[]
  placeholder: boolean | ReactNode
  callback: (item: string[]) => void
  reset: boolean
}

export interface ListProps {
  variant?: TextVariant
}
export interface IListItemProps {
  checked?: boolean
}
export interface IWrappermProps {
  isOpen?: boolean
}

export const Wrapper = styled(Box)<IWrappermProps>`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue_40};
  border-radius: 5px;
  width: 140px;
  height: 40px;
  padding: 11px 12px;
  z-index: 1;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 12px;
    top: 17px;
    width: 8px;
    height: 5px;
    background-image: url(${triangle});
    background-repeat: no-repeat;
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`

export const List = styled.ul<ListProps>`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blue_40};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0 2px 18px #dde3ec);
  font-family: ${({ theme, variant }) => theme.textVariants[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.textVariants[variant].fontSize}px;
  line-height: ${({ theme, variant }) => theme.textVariants[variant].lineHeight}%;
`
export const ListItem = styled.li<IListItemProps>`
  padding: 10px 12px;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme, checked }) => !checked && theme.colors.blue_10};
  }
  background-color: ${({ theme, checked }) => checked && theme.colors.blue_10};
`

export const Placeholder = styled(Text)`
  color: ${({ theme }) => theme.colors.primary_80};
`
