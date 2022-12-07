import Box from '../Box/Box'
import Text from '../Text/Text'
import Checkbox from '../Checkbox/Checkbox'
import styled from 'styled-components'

const Wrapper = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue_30};
`

const TableHeader = () => {
  return (
    <Wrapper direction='row' pl={24} pt={12} pb={12} isFullWidth align='center'>
      <Checkbox mr={24} isChecked={true} />
      <Box direction='row' isFullWidth>
        <Box mr={24} isFullWidth>
          <Text variant='heading3' color='primary_80'>
            Name
          </Text>
        </Box>
        <Box mr={24} isFullWidth>
          <Text variant='heading3' color='primary_80'>
            Avatar
          </Text>
        </Box>
        <Box mr={24} isFullWidth>
          <Text variant='heading3' color='primary_80'>
            Origin
          </Text>
        </Box>
        <Box mr={24} isFullWidth>
          <Text variant='heading3' color='primary_80'>
            Gender
          </Text>
        </Box>
        <Box mr={24} isFullWidth>
          <Text variant='heading3' color='primary_80'>
            Status
          </Text>
        </Box>
      </Box>
    </Wrapper>
  )
}

export default TableHeader
