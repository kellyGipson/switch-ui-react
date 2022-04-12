import { useState, useEffect } from 'react'

const getWidth = () => Math.floor(window.innerWidth)

// This hook is used to determine if the device is mobile/vertical layout
export default function useHeight() {
  const [width, setWidth] = useState(getWidth)
  
  useEffect(() => {
    const onResize = () => setWidth(getWidth())

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return width
}