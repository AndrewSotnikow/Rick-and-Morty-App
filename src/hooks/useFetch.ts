/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { isAxiosError } from 'axios'
import { useState, useEffect, useRef } from 'react'

interface IUseFetchReturn {
  loading: boolean
  data: any
  error: string
}

export const useFetch = (url: string): IUseFetchReturn => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const shouldFetch = useRef(true)

  const fetchData = async (url: string) => {
    setLoading(true)
    try {
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
        fetchData(info.next)
        setLoading(true)
      } else {
        setLoading(false)
      }
      return
    } catch (error) {
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
