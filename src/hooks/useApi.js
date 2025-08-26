import { useState, useCallback } from 'react'

const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const callApi = useCallback(async (apiCall, ...args) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await apiCall(...args)
      setData(response)
      return response
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setLoading(false)
    setError(null)
    setData(null)
  }, [])

  return {
    loading,
    error,
    data,
    callApi,
    reset
  }
}

export default useApi