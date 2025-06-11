import { useUserContext } from "./useUserContext"
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';

export const useLogout = () => {

  const {dispatch} = useUserContext()
  const navigate = useNavigate()

  const logout = ( ) => {

    sessionStorage.removeItem('user');

    dispatch({type: 'LOGOUT'});
    toast.success('Logged Out');
    navigate('/');
    
  }
  
  return {logout};
}