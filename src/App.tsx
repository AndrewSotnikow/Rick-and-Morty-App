/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import './styles/_fonts.css'
import Box from './components/Box/Box'
import Text from './components/Text/Text'
import PageContainer from './components/PageContainer/PageContainer'
import Pagination from './components/Pagination/Paginaton'
import { useFetch } from './hooks/useFetch'

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
        <PageContainer justify='flex-start' align='flex-start' mt={55} ml={103} mr={102} mb={54}>
          <Text fontSize={40} lineHeight={40} variant='heading1' align='left'>
            Characters
          </Text>
          <Box mt={24} direction='row'>
            <Text fontSize={40} lineHeight={40} variant='heading1' color='red'>
              Search
            </Text>
            <Text fontSize={40} lineHeight={40} variant='heading1'>
              Species
            </Text>
          </Box>
          <Box mt={25} direction='row'>
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
      )}
    </>
  )
}

export default App
