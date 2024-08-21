import { useState, useEffect } from "react";

export const useScreenSize = () => {
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= 667 && window.innerHeight <= 375) {
            setScreenWidth(400);
         } else if (window.innerWidth <= 932 && window.innerHeight <= 430) {
            setScreenWidth(600);  
         }else {
            setScreenWidth(window.innerWidth);
         }
      }
      
      window.addEventListener('resize', handleResize);
      
      return () => {
         window.removeEventListener('resize', handleResize);
      }
   }, []);


   return screenWidth;
} 