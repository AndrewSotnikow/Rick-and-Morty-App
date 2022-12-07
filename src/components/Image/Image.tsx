import styled, { css } from 'styled-components'

interface IImageProps {
  src: string
  alt: string
  withShadow?: boolean
  withBorder?: boolean
  width: number
  height: number
}

const Image = styled.img<IImageProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-size: contain;
  background-repeat: no-repeat;
  ${({ withBorder }) =>
    withBorder &&
    css`
      border: 2px dashed ${({ theme }) => theme.colors.blue_15};
    `}

  border-radius: 15px;
  ${({ withShadow }) =>
    withShadow &&
    css`
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `}
`

export default Image
