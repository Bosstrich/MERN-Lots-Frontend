import LotsLogo from '../../assets/lots_logo.png';
import ButtonRange from './ButtonRange';
import RhemaModal from './RhemaModal/RhemaModal';
import useLocalStorage from '../../hooks/useLocalStorage';
import useBodyScrolLock from '../../hooks/useBodyScrollLock'
import { useModalContext } from '../../hooks/useModalContext';
import { useState, useEffect } from 'react';

const Hero = () => {


    const [loading, setLoading] = useState(false);
    const [rhemas, setRhemas] = useLocalStorage('rhemas', []);
    const { modalVisibility } = useModalContext();
    useBodyScrolLock(modalVisibility);


    return (  
        <>
            <section className='bg-gray-100'>
                <div className='md:flex md:flex-row-reverse md:justify-center gap-16 mt-8 padding-x pb-20'>
                    <div className='md:w-[30%] flex justify-center pt-24'>
                        <img className='max-w-[250px] object-contain pointer-events-none' src={LotsLogo} alt="" />
                    </div>  
                    <div className= 'md:w-[60%] text-center md:text-left'>
                        <div className="w-full pt-10 md:pt-36">
                            <h1 className="text-4xl font-libre">Welcome to LOTS!</h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl my-1 md:my-5">Receive oracles from GOD, the Holy Trinity!</h2>
                            <ButtonRange setRhemas={setRhemas} setLoading={setLoading}/>
                        </div>
                    </div>
                </div>
                <RhemaModal rhemas={rhemas} loading={loading} />
            </section>
        </>
     );
}
 
export default Hero;