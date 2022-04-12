import { useState, useEffect } from 'react'

const getHeight = () => Math.floor(window.innerHeight)

// This hook is used to determine if the device is mobile/vertical layout
export default function useHeight() {
  const [height, setHeight] = useState(getHeight)
  
  useEffect(() => {
    const onResize = () => setHeight(getHeight())

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return height
}