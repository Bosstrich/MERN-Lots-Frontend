import { useEffect, useReducer, createContext } from "react";

export const UserContext = createContext();

export const userReducer = (state, action) => {

  switch(action.type){

    case 'LOGIN': 
      return {

        user: action.payload
      }
    case 'LOGOUT':
      return {
        user: null
      }
    default:
      return state;
  }

}

export const UserContextProvider =  ({children}) => {

  const [state, dispatch] = useReducer(userReducer, {
    user: null
  }) 

  useEffect(() => {

    const user = JSON.parse(sessionStorage.getItem('user'))

    if(user) {

      dispatch({type: 'LOGIN', payload: user});
    }
    console.log('user modified: ', user)

  }, [])

  return (

    <UserContext.Provider value={{...state, dispatch}}>
      {children}
    </UserContext.Provider>
  )

}