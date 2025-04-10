// Import Swiper React components

import Modal from '../../Modal';
import RhemaSwiper from './RhemaSwiper';



const RhemaModal = ({ handleClose, showModal, rhemas, loading }) => {

    //     const sampleRhema = `
    //     Why do you call me 'LORD, LORD', and do not do what I tell you?

    //  Put into practice the words that I have spoken, like a man who built his house and laid its foundation on the rock. The flood rose, and the store broke against the house, but it could not shake it.'
    //     `
    
    return ( 
        <Modal showModal={showModal}>
            { loading ? (
                <>
                    <div className="h-[400px] gap-5 w-[300px] flex items-center justify-center rounded-lg">
                        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className='text-white'>Casting Lots...</p>
                    </div>                        
                </>
                

            ) : (
                <>
                    <div className='bg-secondary/90 rounded-lg w-full p-3 flex justify-between mx-auto'>
                        <h1 className='text-white text-xl pl-3'>My Child, here's my Rhema for you</h1>
                        <div className=' text-2xl cursor-pointer text-white font-bold right-5 top-5' onClick={handleClose} >
                            X
                        </div>
                    </div>
                    <RhemaSwiper rhemas={rhemas}/>                      
                </>

            )}
        </Modal>

     );
}
 
export default RhemaModal;