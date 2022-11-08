import useAsync from './useAsync'

export default function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true
      setTimeout(() => {
        success ? resolve('Hi') : reject('Error')
      }, 1000)
    })
  }, []) // here we can pass any dependencies to update when our value change its value

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  )
}
