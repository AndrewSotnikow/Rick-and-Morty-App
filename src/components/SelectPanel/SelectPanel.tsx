import {
  useState,
  ChangeEvent,
  useEffect,
  useRef,
  RefObject,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react'
import Input from '@/components/Input/Input'
import Dropdown from '@/components/Dropdown/Dropdown'
import Box from '@/components/Box/Box'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { ICharacter } from '@/types/types'
import { dropDownData, filterNames, filterBySpecies } from '@/utils/helpers'
import debounce from 'lodash.debounce'

interface ISelectPanel {
  data: ICharacter[]
  setCurrentPage: Dispatch<SetStateAction<number>>
  setDataToRender: Dispatch<SetStateAction<ICharacter[]>>
  setTotalCountPage: Dispatch<SetStateAction<number>>
}

const SelectPanel = ({
  data,
  setCurrentPage,
  setDataToRender,
  setTotalCountPage,
}: ISelectPanel) => {
  const [species, setSpecies] = useState<ICharacter[]>([])
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])
  const [names, setNames] = useState<ICharacter[]>([])
  const [resetDropdown, setResetDropdown] = useState(false)
  const [query, setQuery] = useState('')

  const inputRef = useRef(null) as RefObject<HTMLInputElement>
  let inputRefValue = inputRef.current && inputRef.current.value

  const dataToRender = () => {
    if (names.length) {
      setTotalCountPage(names.length)
      setDataToRender(names)
    } else if (selectedSpecies.length) {
      setDataToRender(species)
      setTotalCountPage(species.length)
    } else {
      setDataToRender(data)
      setTotalCountPage(data.length)
    }
  }

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value.toLowerCase())

  const debouncedOnChange = useCallback(debounce(handleInputOnChange, 200), [])

  const dropdownList = dropDownData(data)

  useEffect(() => {
    if (names.length !== 0) {
      setSelectedSpecies([])
    }

    if (selectedSpecies.length !== 0) {
      setNames([])

      const filteredBySpecies = filterBySpecies(data, selectedSpecies)
      setSpecies(filteredBySpecies)

      if (inputRef.current) {
        inputRefValue = ''
      }
    }

    if (selectedSpecies.length === 0) {
      setSpecies([])
    }

    if (query !== '') {
      const filteredNames = filterNames(query, data)
      setResetDropdown(true)
      setNames(filteredNames)
    } else {
      setCurrentPage(1)
    }

    dataToRender()
  }, [names.length, selectedSpecies.length, inputRefValue, query, species.length])

  return (
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
        onChange={debouncedOnChange}
      />
      <Dropdown
        placeholder='Species'
        data={dropdownList}
        callback={setSelectedSpecies}
        reset={resetDropdown}
      />
    </Box>
  )
}

export default SelectPanel
