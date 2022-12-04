import { css } from 'styled-components/macro'

type Value = string | number

type PropertyProps = {
  type: string
  value: Value
  unit?: string
}

export const resolveResponsiveProp = ({ type, value, unit }: PropertyProps) => {
  return css`
    ${`${type}: ${value}${unit || ''}`};
  `
}
