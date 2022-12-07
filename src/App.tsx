/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import './styles/_fonts.css'
import Box from './components/Box/Box'
import Text from './components/Text/Text'
import Pagination from './components/Pagination/Paginaton'
import { useFetch } from './hooks/useFetch'
import PageContainer from './components/PageContainer/PageContainer'
import Checkbox from './components/Checkbox/Checkbox'
import TableHeader from './components/TableHeader/TableHeader';

interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: [string]
  url: string
  created: string
}

function App() {
  const { loading, data, error } = useFetch('https://rickandmortyapi.com/api/character')

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = data.slice(firstPostIndex, lastPostIndex)

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Box justify='center' align='center' isFullWidth isFullHeight bgColor='primary_blue'>
          <PageContainer>
            <Text variant='heading1' align='left'>
              Characters
            </Text>
            <Box mt={24} direction='row'>
              <Text variant='heading1' color='red'>
                Search
              </Text>
              <Text variant='heading1'>Species</Text>
            </Box>
            <Box direction='column' isFullWidth bgColor='white'>
              <TableHeader  />
              <Box ml={24} mt={12} mb={12}>
                <ul>
                  {currentPosts.map((i: ICharacter) => (
                    <li key={i.id}>{i.name}</li>
                  ))}
                </ul>
              </Box>
            </Box>
            <Pagination
              totalCount={data.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </PageContainer>
        </Box>
      )}
    </>
  )
}

export default App
