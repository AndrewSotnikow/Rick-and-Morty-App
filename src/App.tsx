/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, ChangeEvent, useEffect, useRef, RefObject, ReactElement } from 'react'
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
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  const { loading, data, error } = useFetch('https://rickandmortyapi.com/api/character')

  const [currentPage, setCurrentPage] = useState(1)
  const [names, setNames] = useState<ICharacter[]>([])
  const [species, setSpecies] = useState<ICharacter[]>([])
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])
  const [resetDropdown, setResetDropdown] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const postsPerPage = 5
  const inputRef = useRef(null) as RefObject<HTMLInputElement>
  const inputRefValue = inputRef.current && inputRef.current.value

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

  const filterName = (e: ChangeEvent<HTMLInputElement>, data: ICharacter[]) => {
    const search = e?.target?.value?.toLowerCase()
    setInputValue(search)
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

  const dataToRender = () => {
    return names.length ? names : selectedSpecies.length ? species : data
  }

  // Pagination

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = dataToRender().slice(firstPostIndex, lastPostIndex)

  // Synchronize search field and dropdown

  useEffect(() => {
    if (names.length !== 0) {
      setCurrentPage(1)
    }
    if (selectedSpecies.length !== 0) {
      setResetDropdown(false)
      setNames([])
      setSpecies(filterBySpecies())
      setCurrentPage(1)
    } else if (selectedSpecies.length === 0) {
      setCurrentPage(1)
      setSpecies([])
    }
  }, [names.length, selectedSpecies.length])

  return (
    <>
      {loading ? (
        <Box justify='center' align='center' isFullWidth isFullHeight bgColor='primary_blue'>
          <Text variant='heading1' color='primary_100'>
            Loading...
          </Text>
        </Box>
      ) : error ? (
        <Box justify='center' align='center' isFullWidth isFullHeight bgColor='primary_blue'>
          <Text variant='heading1' color='primary_100'>
            Something went wrong: {error}
          </Text>
        </Box>
      ) : (
        <Box justify='center' align='center' isFullWidth isFullHeight bgColor='primary_blue'>
          <PageContainer>
            <Text variant='heading1' align='left' color='primary_100'>
              Characters
            </Text>
            <Box mt={24} mb={25} direction='row' gap={48}>
              {inputRefValue && inputRefValue.length > 16 && (
                <Tooltip anchorId='searchInput' place='top' isOpen variant='light' offset={20}>
                  {inputRefValue}
                </Tooltip>
              )}
              <Input
                id='searchInput'
                ref={inputRef}
                type='text'
                placeholder='Search'
                onChange={(e) => {
                  filterName(e, data)
                }}
                value={selectedSpecies.length ? '' : inputValue}
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
