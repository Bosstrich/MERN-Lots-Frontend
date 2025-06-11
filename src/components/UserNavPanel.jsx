import React from 'react'
import {AnimatePresence, motion} from 'motion/react'
import { Link } from 'react-router-dom'

//hooks
import { useUserContext } from '../hooks/useUserContext'
import { useLogout } from '../hooks/useLogout'

//components
import {faCircleUser, faBookmark, faSignOut} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserNavPanel = ({handleClose}) => {

  const {user: {username}} = useUserContext();
  const {logout} = useLogout();

  console.log('user: ', username)

  return (
    <AnimatePresence>
      <motion.div 
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -20}}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className='absolute right-0 z-50 mt-2 '>
        <div className='w-[12rem] bg-white  text-black rounded-md overflow-hidden'>
          <ul>
            <li className='py-3 px-2 text-md hover:bg-gray-100 cursor-pointer'>
              <Link to={`/user/${username}`} className='flex items-center ml-3' >
                <FontAwesomeIcon icon={faCircleUser}  className='text-primary text-lg'/>
                <span className='ml-3 text-gray-800'>Profile</span>
              </Link>
            </li>
            <li className='py-3 px-2 text-md hover:bg-gray-100 cursor-pointer'>
              <Link to={`/${username}/savedRhemas`} className='flex items-center ml-3' >
                <FontAwesomeIcon icon={faBookmark} className='text-primary text-lg'/>
                <span className='ml-3 text-gray-800'>Saved Rhemas</span>
              </Link>
            </li>
            <span className="absolute border-t border-grey w-[100%]"/>  
            <button 
              className='w-full flex items-center gap-2  px-5 py-3 hover:bg-gray-100 cursor-pointer' 
              onClick={logout}
            >
              <FontAwesomeIcon icon={faSignOut} className='text-primary text-lg'/>
              <h1 className='font-semibold text-gray-800'>Sign Out</h1>
            </button>

          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default UserNavPanel
