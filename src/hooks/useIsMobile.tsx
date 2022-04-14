import { useState, useEffect } from 'react'

const getIsMobile = () => window.innerWidth < 501;

// This hook is used to determine if the device is mobile/vertical layout
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile);
  
  useEffect(() => {
    const onResize = () => setIsMobile(getIsMobile());

    window.addEventListener("resize", onResize);
    console.log("Resize");

    return () => {
      window.removeEventListener("resize", onResize);
      console.log("Unmounting useIsMobile");
    }
  }, [isMobile]);

  return isMobile
}