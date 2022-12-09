import { useState, useEffect, useRef, Dispatch, SetStateAction, RefObject } from 'react'
import Text from '../Text/Text'
import { DropdownProps, List, ListItem, Placeholder, Wrapper } from './styles'

const Dropdown = ({ data, placeholder, callback, reset }: DropdownProps) => {
  const [show, setShow] = useState(false)
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])

  useEffect(() => {
    setSelectedSpecies([])
  }, [reset])

  useEffect(() => {
    callback(selectedSpecies)
  }, [selectedSpecies])

  const handleListClick = (item: string) => {
    if (selectedSpecies.includes(item)) {
      setSelectedSpecies((prev: string[]) => {
        const res = prev.filter((species) => species !== item)
        return res
      })
    } else {
      setSelectedSpecies((prev: string[]) => [...prev, item])
    }
  }

  const useOutsideClick = (callback: Dispatch<SetStateAction<boolean>>) => {
    const ref = useRef(null) as RefObject<HTMLUListElement>

    useEffect(() => {
      const handleClick = (e: Event) => {
        if (!e.target) return

        const target = e.target as Element
        if (ref.current && !ref.current.contains(target)) {
          callback(false)
        }
      }

      document.addEventListener('click', handleClick, true)

      return () => {
        document.removeEventListener('click', handleClick, true)
      }
    }, [ref])

    return ref
  }

  const ref = useOutsideClick(() => {
    setShow(false)
  })

  return (
    <Wrapper onClick={() => setShow(true)} isOpen={show} justify='center'>
      {!show && !selectedSpecies.length && (
        <Placeholder variant='placeholder'>{placeholder}</Placeholder>
      )}
      {!show && selectedSpecies.length !== 0 && (
        <Text variant='placeholder'>Total: {selectedSpecies.length}</Text>
      )}
      {show && selectedSpecies.length !== 0 && (
        <Text variant='placeholder'>Total: {selectedSpecies.length}</Text>
      )}
      {show && (
        <List variant='dropdown' ref={ref}>
          {data.map((item: string, index: number) => (
            <ListItem
              key={index}
              checked={selectedSpecies.includes(item)}
              onClick={(e) => {
                if (e.currentTarget.textContent !== null) {
                  handleListClick(e.currentTarget.textContent)
                }
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  )
}

export default Dropdown
