  import React, { useEffect } from 'react'

  const useBodyScrollLock = (modalVisibility) => {

      useEffect(() => {

          if(modalVisibility){
              const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
              document.body.style.overflow = 'hidden';
              document.body.style.paddingRight = `${scrollbarWidth}px`;
          } else {

              document.body.style.overflow = 'auto';
          }

          return () => {
              document.body.style.paddingRight = '';
              document.body.style.overflow = 'auto';
          }

      }, [modalVisibility])
      
  
  }

  export default useBodyScrollLock
