import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
const backendURL =  import.meta.env.VITE_BACKEND_URL;
console.log('Backend uri: '+ backendURL);

import Button from '../Button';


const ButtonRange = ({handleModalOpen, setRhemas }) => {

    const [rhemaCount, setRhemaCount] = useState(() => {

        return Number(localStorage.getItem('rhemaCount')) || 1;
    });

    useEffect(() => {
        localStorage.setItem('rhemaCount', rhemaCount);
      }, [rhemaCount]);

    
    const grabRhema = () => {
        axios.get(`http://localhost:4000/api/rhemas/random`, {

            params: {

                size: rhemaCount
            }
        })
        .then((response) => {

            if (response.data.length) {
                console.log('Random Rhemas:', response.data);
                setRhemas(response.data);
                handleModalOpen();

            } else {
                console.log(response.data.message);
            }
        })
        .catch((err) => {

            console.log('Error:', err);
        })


    }

    return ( 
        <>
             <div className='flex max-sm:flex-col-reverse  max-sm:justify-center items-center mt-8 gap-3'>
                <Button className='' variant='primary' text='Grab Rhema' onClick={grabRhema}/>
                <div className='flex items-center gap-3 max-sm:pb-5'>
                    <label htmlFor="quoteCount" className="text-md"># of Rhemas:</label>
                    <input
                        id="quoteCount"
                        type="range"
                        min="1"
                        max="5"
                        value={rhemaCount}
                        onChange={(e) => {setRhemaCount(e.target.value)}}
                        className=" accent-blue-500 cursor-pointer"
                    />
                    <span>{rhemaCount}</span>
                </div>
            </div>
        </>
     );
}
 
export default ButtonRange;