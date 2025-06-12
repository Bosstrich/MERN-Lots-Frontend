import axios from "axios";
import { useContext, useState } from "react";
import { useUserContext } from "./useUserContext";
const backendURL = import.meta.env.VITE_BACKEND_URL;

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);

  const {dispatch } = useUserContext();

  const login = (credentials, route, onSuccess, onError) => {

    setIsLoading(true);

    axios
      .post(backendURL + route, credentials)
      .then(({ data }) => {

        setIsLoading(false);
        dispatch({type: 'LOGIN', payload: data});
        sessionStorage.setItem('user', JSON.stringify(data));
        console.log('data to save to context: ', data);
        if(onSuccess) onSuccess();

      })
      .catch((err) => {

        setIsLoading(false);

        const message =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        'Something went wrong';

        onError(message);

      });
  };

  return { login, isLoading };
};

export default useLogin;
