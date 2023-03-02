import { useEffect, useState } from "react"
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export function useFetch<T = unknown>(url: string){
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    api.get(url)
    .then(response => {
      setData(response.data)
    })
    .catch(err => {
      setError(err)
    })
    .finally(() => {
      setIsFetching(false)
    })
  }, []) 

  return { data, error, isFetching }
}

// export function usePost<T = unknown>(url: string, ){
//   const [data, setData] = useState<T | null>(null)
//   const [error, setError] = useState<Error | null>(null)
//   useEffect(() => {
//     api.post(url)
//     .then(response => {
//       console.log("Registros salvos", response.data)
//       setData()
//     })
//     .catch(err => {
//       setError(err)
//     })
//   })
//   return { data, error }
// }