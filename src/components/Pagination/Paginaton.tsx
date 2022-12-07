import { Dispatch, SetStateAction } from 'react'
import Box from '../Box/Box'
import Text from '../Text/Text'
import PaginationButton from './styles'
import ArrowLeft from '../../images/arrowLeft.svg'
import ArrowRight from '../../images/arrowRight.svg'

interface IPaginationProps {
  totalCount: number
  postsPerPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  currentPage: number
}

const Pagination = ({
  totalCount,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: IPaginationProps) => {
  const pages: number[] = []

  const totalPageCount = Math.ceil(totalCount / postsPerPage)

  for (let i = 1; i <= totalPageCount; i++) {
    pages.push(i)
  }
  const number = 3
  return (
    <Box direction='row'>
      <PaginationButton
        bgColor='white'
        textColor='primary_80'
        variant='buttons'
        isHover={true}
        arrow={ArrowLeft}
        onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
      />
      {pages.slice(currentPage - 1, currentPage - 1 + number).map((page, index) => {
        return (
          <PaginationButton
            key={index}
            onClick={() => setCurrentPage(page)}
            bgColor={page == currentPage ? 'blue_10' : 'white'}
            textColor='primary_80'
            variant='buttons'
          >
            {page}
          </PaginationButton>
        )
      })}
      <Text variant='buttons' color='primary_80' mt={8} pl={20} pr={20}>
        ...
      </Text>
      {pages.slice(-number).map((page, index) => {
        return (
          <PaginationButton
            key={index}
            onClick={() => setCurrentPage(page)}
            bgColor={page == currentPage ? 'blue_10' : 'white'}
            textColor='primary_80'
            variant='buttons'
          >
            {page}
          </PaginationButton>
        )
      })}
      <PaginationButton
        bgColor='white'
        textColor='primary_80'
        isHover={true}
        arrow={ArrowRight}
        onClick={() => currentPage !== pages.length && setCurrentPage(currentPage + 1)}
        variant='buttons'
      />
    </Box>
  )
}

export default Pagination
