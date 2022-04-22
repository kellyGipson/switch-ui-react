import { useState, useEffect } from 'react'

const getIsMobile = () => window.innerWidth < 501;

  // This hook is used to determine if the device is mobile/vertical layout
export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile);
  
  useEffect(() => {
    const onResize = () => setIsMobile(getIsMobile());

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, [isMobile]);

  return isMobile
}