import { forwardRef, ForwardedRef } from 'react'
import { Field, Wrapper, InputProps } from './styles'

const Input = forwardRef(
  ({ type, label, placeholder, onChange, id }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Wrapper>
        <Field
          id={id}
          ref={ref}
          type={type}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Wrapper>
    )
  },
)

Input.displayName = 'Input'

export default Input
