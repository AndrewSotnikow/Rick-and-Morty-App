import styled, { css } from 'styled-components'
import { useState, ReactNode, useEffect, useRef, Dispatch, SetStateAction, RefObject } from 'react'
import triangle from '../../images/triangle.svg'
import Text from '../Text/Text'
import Box from '../Box/Box'
import { TextVariant } from '../../styles/types'

interface DropdownProps {
  data: string[]
  placeholder: boolean | ReactNode
  callback: (item: string[]) => void
  reset: boolean
}

interface ListProps {
  variant?: TextVariant
}
interface IListItemProps {
  checked?: boolean
}
interface IWrappermProps {
  isOpen?: boolean
}

const Wrapper = styled(Box)<IWrappermProps>`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue_40};
  border-radius: 5px;
  width: 140px;
  height: 40px;
  padding: 11px 12px;
  z-index: 1;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 12px;
    top: 17px;
    width: 8px;
    height: 5px;
    background-image: url(${triangle});
    background-repeat: no-repeat;
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`

const List = styled.ul<ListProps>`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blue_40};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0 2px 18px #dde3ec);
  font-family: ${({ theme, variant }) => theme.textVariants[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.textVariants[variant].fontSize}px;
  line-height: ${({ theme, variant }) => theme.textVariants[variant].lineHeight}%;
`
const ListItem = styled.li<IListItemProps>`
  padding: 10px 12px;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme, checked }) => !checked && theme.colors.blue_10};
  }
  background-color: ${({ theme, checked }) => checked && theme.colors.blue_10};
`

const Placeholder = styled(Text)`
  color: ${({ theme }) => theme.colors.primary_80};
`

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
