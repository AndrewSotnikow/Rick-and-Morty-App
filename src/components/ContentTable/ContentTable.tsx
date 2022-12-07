import TableHeader from '../TableHeader/TableHeader'
import Character from '../Character/Character'
import Box from '../Box/Box'
import { ICharacter } from '../../types/types'

interface IContentTable {
  data: ICharacter[]
}

const ContentTable = ({ data }: IContentTable) => {
  return (
    <Box direction='column' isFullWidth bgColor='white'>
      <TableHeader />
      <Box isFullWidth>
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
      </Box>
    </Box>
  )
}

export default ContentTable
