import styled from 'styled-components'
import { Spacing, spacingMixin } from '../../styles/spacing'

export interface ICheckbox extends Spacing {
  isChecked: boolean
  onClick: () => void
}
export interface IStyledCheckbox extends Spacing {
  isChecked: boolean
}
export interface IHiddenCheckbox {
  isChecked: boolean
}

export const CheckboxContainer = styled.div<Spacing>`
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  ${spacingMixin}
`

export const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary_80};
  stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<IHiddenCheckbox>`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div<IStyledCheckbox>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  transition: all 150ms;
  border: 1px solid ${({ theme }) => theme.colors.blue_40};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`
