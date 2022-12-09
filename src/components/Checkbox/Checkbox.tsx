import { CheckboxContainer, HiddenCheckbox, ICheckbox, Icon, StyledCheckbox } from './styles'

const Checkbox = ({ isChecked = false, onClick, ...props }: ICheckbox) => {
  return (
    <CheckboxContainer {...props} onClick={onClick}>
      <HiddenCheckbox isChecked={isChecked} {...props} />
      <StyledCheckbox isChecked={isChecked}>
        {isChecked && (
          <Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </Icon>
        )}
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

export default Checkbox
