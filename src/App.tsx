/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, ChangeEvent } from 'react'
import './styles/_fonts.css'
import Box from './components/Box/Box'
import Text from './components/Text/Text'
import Input from './components/Input/Input'
import Pagination from './components/Pagination/Paginaton'
import { useFetch } from './hooks/useFetch'
import PageContainer from './components/PageContainer/PageContainer'
import ContentTable from './components/ContentTable/ContentTable'
import { ICharacter } from './types/types'

function App() {
  const { loading, data, error } = useFetch('https://rickandmortyapi.com/api/character')

  const [currentPage, setCurrentPage] = useState(1)
  const [names, setNames] = useState<ICharacter[]>([])
  const postsPerPage = 5

  const dataToRender = () => {
    return names.length ? names : data
  }

  const species = new Set(
    data.map((item: ICharacter) => {
      return item.species
    }),
  )

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = dataToRender().slice(firstPostIndex, lastPostIndex)

  const filterName = (e: ChangeEvent<HTMLInputElement>, data: ICharacter[]) => {
    const search = e?.target?.value?.toLowerCase()
    const filteredNames = data.filter((item) => {
      return item.name.toLowerCase().includes(search)
    })
    if (search === '') {
      setCurrentPage(1)
    }
    setNames(filteredNames)
  }

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
            <Box mt={24} mb={25} direction='row'>
              <Input
                type='text'
                placeholder='Search'
                onChange={(e) => {
                  filterName(e, data)
                }}
              />
              <Text variant='heading1'>Species</Text>
            </Box>
            <ContentTable data={currentPosts} />
            <Box align='flex-end' isFullWidth mt={43}>
              <Pagination
                totalCount={names.length || data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                buttonsRange={3}
              />
            </Box>
          </PageContainer>
        </Box>
      )}
    </>
  )
}

export default App
