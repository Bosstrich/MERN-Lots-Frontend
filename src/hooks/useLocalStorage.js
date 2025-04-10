import React, {useEffect, useState} from 'react'

const getSavedValue = (key, initialValue) => {

    const savedValue = JSON.parse(localStorage.getItem(key));

    if(savedValue) return savedValue;

    if(initialValue instanceof Function) return initialValue();

    return initialValue;
}

const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {

        return getSavedValue(key, initialValue);

    }) 

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(state));

    }, [key, state]);

    return [state, setState]
}

export default useLocalStorage
