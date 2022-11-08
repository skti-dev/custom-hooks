import { useSessionStorage, useLocalStorage } from "./useStorage"

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage('name', 'Augusto')
  const [age, setAge, removeAge] = useLocalStorage('age', 22)

  return (
    <div>
      <div>{name} - {age}</div>
      <button onClick={() => setName('Seabra')}>Set name</button>
      <button onClick={() => setAge(23)}>Set age</button>
      <button onClick={removeName}>Remove name</button>
      <button onClick={removeAge}>Remove age</button>
    </div>
  )
}
