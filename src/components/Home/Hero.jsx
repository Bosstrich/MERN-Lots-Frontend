import LotsLogo from '../../assets/lots_logo.png';
import ButtonRange from './ButtonRange';
import RhemaModal from './RhemaModal/RhemaModal';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useState, useEffect } from 'react';
import useModalVisibility from '../../hooks/useModalVisibility';

const Hero = () => {

    const [loading, setLoading] = useState(false);


    const [modalVisibility, setModalVisibility] = useLocalStorage('modalVisibility', false);
    const [rhemas, setRhemas] = useLocalStorage('rhemas', []);

    useModalVisibility(modalVisibility);

    const handleModal = () => {

        setModalVisibility(!modalVisibility);

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
                            <ButtonRange handleModalOpen={handleModal} setRhemas={setRhemas} setLoading={setLoading}/>
                        </div>
                    </div>
                </div>
                <RhemaModal handleClose={handleModal} showModal={modalVisibility} rhemas={rhemas} loading={loading} />
            </section>
        </>
     );
}
 
export default Hero;