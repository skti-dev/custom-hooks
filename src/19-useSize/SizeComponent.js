import { useRef } from "react"
import useSize from "./useSize"

export default function SizeComponent() {
  const ref = useRef()
  const size = useSize(ref)

  return (
    <div>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </div>
  )
}
