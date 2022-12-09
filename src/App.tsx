/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, ChangeEvent, useEffect, useRef, RefObject, useContext } from 'react'
import '@/styles/_fonts.css'
import Box from '@/components/Box/Box'
import Pagination from '@/components/Pagination/Paginaton'
import { useFetch } from '@/hooks/useFetch'
import PageContainer from '@/components/PageContainer/PageContainer'
import ContentTable from '@/components/ContentTable/ContentTable'
import { ICharacter } from '@/types/types'
import 'react-tooltip/dist/react-tooltip.css'
import Header from '@/components/Header/Header'
import Loader from '@/components/Loader/Loader'
import Error from '@/components/Error/Error'
import SelectPanel from '@/components/SelectPanel/SelectPanel'
import { postsPerPage } from '@/config'

function App() {
  const { loading, data, error } = useFetch('https://rickandmortyapi.com/api/character')

  const [currentPage, setCurrentPage] = useState(1)
  const [dataToRender, setDataToRender] = useState<ICharacter[]>([])
  const [totalCountPage, setTotalCountPage] = useState(0)
  // Pagination

  // console.log(totalCountPage)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const itemsToRender = dataToRender.slice(firstPostIndex, lastPostIndex)

  return (
    <>
      {loading && <Loader text='Loading...' />}

      {error && <Error text={error} />}

      {!loading && !error && (
        <Box justify='center' align='center' isFullWidth isFullHeight bgColor='primary_blue'>
          <PageContainer>
            <Header text='Characters' />
            <SelectPanel
              data={data}
              setCurrentPage={setCurrentPage}
              setDataToRender={setDataToRender}
              setTotalCountPage={setTotalCountPage}
            />
            <ContentTable data={itemsToRender} />
            <Box align='flex-end' isFullWidth mt={43}>
              <Pagination
                totalCount={totalCountPage}
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
