import useAsync from "../9-useAsync/useAsync"

const DEFAULT_OPTIONS = {
  headers: { "Content-type": "application/json" }
}

export default function useFetch(url, options = {}, dependencies = []) {
  return useAsync(async () => {
    return await fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
      if(res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
  }, dependencies)
}