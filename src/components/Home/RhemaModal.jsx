// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './swiper.css'



const RhemaModal = ({ handleClose, showModal, rhemas }) => {

    //     const sampleRhema = `
    //     Why do you call me 'LORD, LORD', and do not do what I tell you?

    //  Put into practice the words that I have spoken, like a man who built his house and laid its foundation on the rock. The flood rose, and the store broke against the house, but it could not shake it.'
    //     `
    
    return ( 
        <div className={`${!showModal?  'opacity-0' : 'opacity-100 fixed inset-0 bg-black bg-opacity-60 z-40 transition-all duration-500'} `} >
            <div className={`fixed inset-0 flex justify-center items-center z-50 ${showModal? `pointer-events-auto`: `pointer-events-none` }`}>
                <div className=' mx-auto flex flex-col gap-7'>
                    <div className='bg-secondary/80 rounded-lg w-full p-3 flex  justify-between mx-auto'>
                        <h1 className='text-white text-xl z-10 pl-3'>My Child, here's my Rhema for you</h1>
                        <div className=' text-2xl cursor-pointer text-white font-bold right-5 top-5' onClick={handleClose} >
                            X
                        </div>
                    </div>
             
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        {rhemas.map((rhema, index) => (

                            <SwiperSlide key={index} className='relative z-3 p-7 text-lg text-justify leading-6'>
                                {rhema.qoute.split('\n\n').map((paragraph, paragraphIndex) => (
                                    <p key={paragraphIndex} className="relative z-10 mb-5">{paragraph}</p>
                                ))}  
                                {rhema.author && (
                                    <p className="relative z-10 mt-3 font-semibold text-right">-{rhema.author}</p>
                                )}           
                                <div className='bg-gradient-to-b from-primary/15 via-black/30 to-secondary/30  absolute z-0 w-full h-full '></div> 
              
                            </SwiperSlide>
                            

                        ))}

                        {/* <SwiperSlide className='relative z-3 p-7 text-lg text-justify leading-6'>    
                            <p className="relative z-10 mb-5">{sampleRhema}</p>
                            <div className='bg-gradient-to-b from-primary/15 via-black/30 to-secondary/30  absolute z-0 w-full h-full '></div> 
                        </SwiperSlide> */}

                    </Swiper>
                </div>
            </div>
        </div>
     );
}
 
export default RhemaModal;