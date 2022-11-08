import useCookie from './useCookie'

export default function CookieComponent() {
  const [value, update, remove] = useCookie('name', 'Augusto')

  return (
    <>
      <div>{value}</div> 
      <button onClick={() => update('Sally')}>Change name to Sally</button>
      <button onClick={remove}>Delete name</button>
    </>
  )
}
