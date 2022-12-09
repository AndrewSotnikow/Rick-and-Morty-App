/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, ChangeEvent, useEffect, useRef, RefObject } from 'react'
import './styles/_fonts.css'
import Box from './components/Box/Box'
import Text from './components/Text/Text'
import Input from './components/Input/Input'
import Pagination from './components/Pagination/Paginaton'
import { useFetch } from './hooks/useFetch'
import PageContainer from './components/PageContainer/PageContainer'
import ContentTable from './components/ContentTable/ContentTable'
import { ICharacter } from './types/types'
import Dropdown from './components/Dropdown/Dropdown'

function App() {
  const { loading, data, error } = useFetch('https://rickandmortyapi.com/api/character')

  const [currentPage, setCurrentPage] = useState(1)
  const [names, setNames] = useState<ICharacter[]>([])
  const [species, setSpecies] = useState<ICharacter[]>([])
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])
  const [resetDropdown, setResetDropdown] = useState(false)
  const postsPerPage = 5
  const inputRef = useRef(null) as RefObject<HTMLInputElement>
  const dataToRender = () => {
    return names.length ? names : selectedSpecies.length ? species : data
  }

  const findSpecies = (): string[] => {
    const selectedSpecies: string[] = Array.from(
      new Set(
        data.map((item: ICharacter) => {
          return item.species
        }),
      ),
    )
    return selectedSpecies
  }

  const filterBySpecies = (): ICharacter[] =>
    data.filter((item: ICharacter) => {
      return selectedSpecies.includes(item.species)
    })

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
    setResetDropdown(true)
    setNames(filteredNames)
    return
  }

  useEffect(() => {
    if (names.length !== 0) {
      setSelectedSpecies([])
    }
    if (selectedSpecies.length !== 0) {
      setNames([])
      setSpecies(filterBySpecies())
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
    if (selectedSpecies.length === 0) {
      setSpecies([])
    }
  }, [names.length, selectedSpecies.length])

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
            <Box mt={24} mb={25} direction='row' gap={48}>
              <Input
                ref={inputRef}
                type='text'
                placeholder='Search'
                onChange={(e) => {
                  filterName(e, data)
                }}
              />
              <Dropdown
                placeholder='Species'
                data={findSpecies()}
                callback={setSelectedSpecies}
                reset={resetDropdown}
              />
            </Box>
            <ContentTable data={currentPosts} />
            <Box align='flex-end' isFullWidth mt={43}>
              <Pagination
                totalCount={names.length || species.length || data.length}
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
