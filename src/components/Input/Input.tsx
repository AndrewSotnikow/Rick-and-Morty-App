import styled from 'styled-components'
import { ChangeEvent, forwardRef, ForwardedRef } from 'react'
import search from '../../images/search.svg'
import { InputType } from '../../types/types'

export interface InputProps {
  type: InputType
  label?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue_40};
  border-radius: 5px;
  width: 140px;
  height: 40px;
  padding: 11px 12px;

  &::after {
    content: '';
    position: absolute;
    left: 110px;
    transform: translate(0, -10%);
    width: 20px;
    height: 20px;
    background-image: url(${search});
  }
`

const Field = styled.input<InputProps>`
  max-width: 80%;
  font-family: 'OswaldRegular', sans-serif;
  font-size: 14px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.primary_50};

  &::placeholder {
    font-family: 'OswaldRegular', sans-serif;
    font-size: 14px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.primary_50};
  }
`

const Input = forwardRef(
  ({ type, label, placeholder, onChange }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Wrapper>
        <Field ref={ref} type={type} label={label} placeholder={placeholder} onChange={onChange} />
      </Wrapper>
    )
  },
)

Input.displayName = 'Input'

export default Input
