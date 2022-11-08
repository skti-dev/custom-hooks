import { useState } from 'react'
import useEffectOnce from './useEffectOnce'

export default function EffectOnceComponent() {
  const [count, setCount] = useState(0)

  useEffectOnce(() => alert('Hi'))

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
