import { useState } from 'react'

export const usePanel = () => {

  const [userPanel, setUserPanel ] = useState(false);
  
  const openPanel = () => setUserPanel(true);
  const closePanel = () => setUserPanel(false);

  return {userPanel, openPanel, closePanel};
  
}