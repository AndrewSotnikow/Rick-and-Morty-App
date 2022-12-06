import { Dispatch, SetStateAction, useEffect } from 'react'
import Box from '../Box/Box'
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
        color='white'
        isHover={true}
        arrow={ArrowLeft}
        onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
      />
      {pages.slice(currentPage - 1, currentPage - 1 + number).map((page, index) => {
        return (
          <PaginationButton
            key={index}
            onClick={() => setCurrentPage(page)}
            color={page == currentPage ? 'blue_10' : 'white'}
          >
            {page}
          </PaginationButton>
        )
      })}
      <p>. . .</p>
      {pages.slice(-number).map((page, index) => {
        return (
          <PaginationButton
            key={index}
            onClick={() => setCurrentPage(page)}
            color={page == currentPage ? 'blue_10' : 'white'}
          >
            {page}
          </PaginationButton>
        )
      })}
      <PaginationButton
        color='white'
        isHover={true}
        arrow={ArrowRight}
        onClick={() => currentPage !== pages.length && setCurrentPage(currentPage + 1)}
      />
    </Box>
  )
}

export default Pagination
