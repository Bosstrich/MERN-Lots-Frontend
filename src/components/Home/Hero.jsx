import LotsLogo from '../../assets/lots_logo.png';
import ButtonRange from './ButtonRange';
import RhemaModal from './RhemaModal';

import { useState, useEffect } from 'react';

const Hero = () => {
  
    const [modalVisibility, setModalVisibility] = useState(() => {

        return JSON.parse(localStorage.getItem('modalVisibility')) || false;
    });
    const [rhemas, setRhemas] = useState(() => {

        return JSON.parse(localStorage.getItem('rhemas')) || [];
    });

    useEffect(() => {

        localStorage.setItem('modalVisibility', JSON.stringify(modalVisibility));

    }, [modalVisibility])


    useEffect(() => {

        localStorage.setItem('rhemas', JSON.stringify(rhemas));

    }, [rhemas])
    
    const handleModal = () => {

        setModalVisibility(!modalVisibility)
    }

    return (  
        <>
            <section className='bg-gray-100'>
                <div className='md:flex md:flex-row-reverse md:justify-center gap-16 mt-8 padding-x pb-20'>
                    <div className='md:w-[30%] flex justify-center pt-24'>
                        <img className='max-w-[250px] object-contain' src={LotsLogo} alt="" />
                    </div>  
                    <div className= 'md:w-[60%] text-center md:text-left'>
                        <div className="w-full pt-10 md:pt-36">
                            <h1 className="text-primary text-4xl font-libre font-semibold">Welcome to LOTS!</h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl my-1 md:my-5">Receive oracles from GOD, the Holy Trinity!</h2>
                            <ButtonRange handleModalOpen={handleModal} setRhemas={setRhemas}/>
                        </div>
                    </div>
                </div>
                <RhemaModal handleClose={handleModal} showModal={modalVisibility} rhemas={rhemas}/>
            </section>
        </>
     );
}
 
export default Hero;