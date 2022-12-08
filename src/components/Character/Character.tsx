import Box from '../Box/Box'
import Text from '../Text/Text'
import Alive from '../../images/alive.svg'
import Unknown from '../../images/unknown.svg'
import Dead from '../../images/death.svg'
import Checkbox from '../Checkbox/Checkbox'
import Image from '../Image/Image'
import styled from 'styled-components'
import { useState } from 'react'

interface ICharacterProps {
  image: string
  name: string
  species: string
  location: string
  gender: string
  status: string
}

const Wrapper = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.colors.blue_15};
`

const statusIcon = (status: string) => {
  let image = ''
  if (status === 'Alive') {
    image = Alive
  } else if (status === 'unknown') {
    image = Unknown
  } else if (status === 'Dead') {
    image = Dead
  }
  return image
}

const Character = ({ image, name, species, location, gender, status }: ICharacterProps) => {
  const [checked, setChecked] = useState(false)
  return (
    <Wrapper
      pt={16}
      pl={24}
      pb={16}
      direction='row'
      isFullWidth
      bgColor={status === 'Dead' ? 'blue_5' : 'white'}
    >
      <Checkbox isChecked={checked} mr={24} mt={8} onClick={() => setChecked(!checked)} />
      <Box isFullWidth mt={4}>
        <Text variant='heading3' color={status === 'Dead' ? 'primary_70' : 'primary_100'}>
          {name}
        </Text>
        <Text variant='body' color={status === 'Dead' ? 'primary_50' : 'primary_80'}>
          {species}
        </Text>
      </Box>
      <Box isFullWidth>
        <Image src={image} alt={`${name} avatar`} width={50} height={50} withBorder withShadow />
      </Box>
      <Box isFullWidth mt={8}>
        <Text
          variant='body'
          color={status === 'Dead' && location === 'unknown' ? 'primary_25' : 'primary_100'}
        >
          {location}
        </Text>
      </Box>
      <Box isFullWidth mt={8}>
        <Text variant='body' color={status === 'Dead' ? 'primary_70' : 'primary_100'}>
          {gender}
        </Text>
      </Box>
      <Box isFullWidth direction='row' align='center' mt={8}>
        <Box mr={8}>
          <Image src={statusIcon(status)} alt={`${name} avatar`} width={18} height={18} />
        </Box>
        <Text variant='heading3' color={status === 'unknown' ? 'primary_70' : 'primary_100'}>
          {status}
        </Text>
      </Box>
    </Wrapper>
  )
}

export default Character
