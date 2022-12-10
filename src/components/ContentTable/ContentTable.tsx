import TableHeader from '../TableHeader/TableHeader'
import Character from '../Character/Character'
import Box from '../Box/Box'
import { ICharacter } from '../../types/types'
import styled from 'styled-components'
interface IContentTable {
  data: ICharacter[]
}

const Wrapper = styled(Box)`
  min-height: 415px;
`

const ContentTable = ({ data }: IContentTable) => {
  return (
    <Box direction='column' isFullWidth bgColor='white'>
      <TableHeader />
      <Wrapper isFullWidth>
        {data.map((i: ICharacter) => (
          <Character
            key={i.id}
            name={i.name}
            image={i.image}
            species={i.species}
            location={i.location.name}
            gender={i.gender}
            status={i.status}
          />
        ))}
      </Wrapper>
    </Box>
  )
}

export default ContentTable
