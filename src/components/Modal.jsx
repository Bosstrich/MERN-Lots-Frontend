import React from 'react'

const Modal = ({showModal, children}) => {
  return (
    <>
        <div className={`${!showModal ? 'opacity-0' : 'opacity-100 fixed inset-0 bg-black bg-opacity-60 z-40 transition-all duration-500'}`}>
            <div className={`fixed inset-0 flex justify-center items-center z-50 ${showModal ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className='mx-auto flex flex-col gap-7'>
                    {children}
                </div>
            </div>
        </div>  
    </>
  )
}

export default Modal
