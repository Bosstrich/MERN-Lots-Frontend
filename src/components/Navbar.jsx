import React, { useState } from 'react';
import Button from './Button';
import useModal from '../hooks/useModal';
import UserFormAuth from '../common/userFormAuth';
import { Link } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';
import { usePanel } from '../hooks/usePanel';
import UserNavPanel from './UserNavPanel';


const Navbar = () => {

    const { isVisible, openModal } = useModal();
    const {user} = useUserContext();
    const [authType, setAuthType] = useState('');
    const { userPanel, closePanel, openPanel } = usePanel();

    const handleClick = (type) => {

      setAuthType(type) 
      openModal('auth');
    } 

    const handleBlur = () => {
      setTimeout(() => {
        closePanel();
      }, 200)
      
    }

    return ( 
        <header>
          <nav className='navbar padding-x flex justify-between items-center bg-light text-white'>
            <Link to='/' className='flex items-center gap-2'>
                  <img src="lots_icon.png" className='w-12'/>
                <h1 className='select-none font-source text-2xl'>LOTS</h1>
            </Link>
            <div className='hidden md:flex items-center justify-center gap-5'>
                <Link className='link' to="/"><h2>Home</h2></Link>
                <Link className='link' to="/instructions"><h2>Instructions</h2></Link>
                <Link className='link' to="/scripture"><h2>Scripture</h2></Link>
                <Link className='link' to="/about"><h2>About</h2></Link>
            </div>
            {
              user ? 
                <div className='relative' onBlur={handleBlur}>
                  <button className='w-10 h-10 border-2 rounded-full border-primary p-0.5' onClick={openPanel}>
                    <img className='w-full h-full rounded-full object-cover bg-secondary' src='' alt="profile_image" />
                  </button>
                  {userPanel && <UserNavPanel handleClose={closePanel}/> }
                </div>
                :
                <Button onClick={() => handleClick('sign-in')} variant='primary' text='Log In'/>
            } 
            {isVisible && <UserFormAuth type={authType} setType={setAuthType}/>}
          </nav>
        </header>
     );
}
 
export default Navbar;