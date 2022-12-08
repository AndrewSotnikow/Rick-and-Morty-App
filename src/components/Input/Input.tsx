import styled from 'styled-components'
import { ChangeEvent } from 'react'
import search from '../../images/search.svg'
import { InputType } from '../../types/types'

export interface InputProps {
  type: InputType
  label?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #bac6d8;
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
  &::placeholder {
    font-family: 'OswaldRegular';
    font-size: 14px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.primary_50};
  }
`

const Input = ({ type, label, placeholder, onChange }: InputProps) => {
  return (
    <Wrapper>
      <Field type={type} label={label} placeholder={placeholder} onChange={onChange} />
    </Wrapper>
  )
}

export default Input
