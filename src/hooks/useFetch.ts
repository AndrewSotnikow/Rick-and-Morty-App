/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { isAxiosError } from 'axios'
import { useState, useEffect, useRef } from 'react'
import { ICharacter } from '@/types/types'

interface IUseFetchReturn {
  loading: boolean
  data: ICharacter[]
  error: string
}

export const useFetch = (url: string): IUseFetchReturn => {
  const [data, setData] = useState<ICharacter[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const shouldFetch = useRef(true)

  const fetchData = async (url: string) => {
    try {
      setLoading(true)

      const response = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
      })

      const { info, results } = response.data
      if (response.status === 200) {
        setData((prev) => [...prev, ...results])
      }
      if (info.next) {
        setLoading(true)
        fetchData(info.next)
      } else {
        setLoading(false)
      }
      return
    } catch (error) {
      setLoading(false)

      if (isAxiosError(error)) {
        console.log('response status is: ', error.message)

        setError(error.message)

        return
      } else {
        console.log('unexpected error: ', error)

        return 'An unexpected error occurred'
      }
    }
  }

  useEffect(() => {
    if (!url) return
    if (shouldFetch.current) {
      shouldFetch.current = false
      fetchData(url)
    }
  }, [url])

  return { data, loading, error }
}
