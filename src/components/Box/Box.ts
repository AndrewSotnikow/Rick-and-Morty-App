import styled, { css } from 'styled-components/macro'
import { resolveResponsiveProp } from '../../styles/mixins'
import { Spacing, spacingMixin } from '../../styles/spacing'
import { Color } from '../../styles/types'

export type Direction = 'row' | 'column' | 'column-reverse' | 'row-reverse'
type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
export type Align = 'flex-start' | 'flex-end' | 'center' | 'stretch'
type Wrap = 'wrap' | 'nowrap'
export interface BoxProps extends Spacing {
  bgColor?: Color
  direction?: Direction
  justify?: Justify
  align?: Align
  wrap?: Wrap
  gap?: number
  isFullWidth?: boolean
  isFullHeight?: boolean
  hasNoShrink?: boolean
}

const Box = styled.div<BoxProps>`
  display: flex;
  background-color: ${({ theme, bgColor }) => bgColor && theme.colors[bgColor]};

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}

  ${({ isFullHeight }) =>
    isFullHeight &&
    css`
      height: 100%;
    `}

  ${({ hasNoShrink }) =>
    hasNoShrink &&
    css`
      flex-shrink: 0;
    `}
    

    ${({ direction }) =>
    resolveResponsiveProp({
      type: 'flex-direction',
      value: direction || 'column',
    })}


    ${({ justify }) =>
    resolveResponsiveProp({
      type: 'justify-content',
      value: justify || 'flex-start',
    })}

    ${({ align }) =>
    resolveResponsiveProp({
      type: 'align-items',
      value: align || 'flex-start',
    })}

    ${({ wrap }) =>
    resolveResponsiveProp({
      type: 'flex-wrap',
      value: wrap || 'nowrap',
    })}


    ${({ gap, direction }) => {
    if (!gap) return css``

    const typeFromDirection = {
      column: 'margin-top',
      'column-reverse': 'margin-top',
      row: 'margin-right',
      'row-reverse': 'margin-left',
    }

    const desktopDirection = direction || 'column'

    const childrenGap = css`
      ${resolveResponsiveProp({
        type: typeFromDirection[desktopDirection],
        value: gap,
        unit: 'px',
      })};
    `

    const zeroGap = css`
      &:last-child {
        ${resolveResponsiveProp({
          type: typeFromDirection[desktopDirection],
          value: 0,
          unit: 'px',
        })};
      }
    `

    return desktopDirection === 'column'
      ? css`
          & > * {
            & + * {
              ${childrenGap};
            }
          }
        `
      : css`
          & > * {
            ${childrenGap};
            ${zeroGap};
          }
        `
  }};

  ${spacingMixin}
`
export default Box
