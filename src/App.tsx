/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import './styles/_fonts.css'
import Box from './components/Box/Box'
import Text from './components/Text/Text'
import Pagination from './components/Pagination/Paginaton'
import { useFetch } from './hooks/useFetch'
import PageContainer from './components/PageContainer/PageContainer'
import ContentTable from './components/ContentTable/ContentTable'

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
            <ContentTable data={currentPosts} />
            <Box align='flex-end' isFullWidth mt={43}>
              <Pagination
                totalCount={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </Box>
          </PageContainer>
        </Box>
      )}
    </>
  )
}

export default App
