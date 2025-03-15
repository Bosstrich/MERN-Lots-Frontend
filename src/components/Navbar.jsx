import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <header>
            <nav className='navbar padding-x flex justify-between items-center bg-light text-white'>
                <div className='flex items-center gap-2'>
                    <img src="lots_icon.png" className='w-12'/>
                    <a href="/">
                        <h1 className='select-none font-source text-2xl'>LOTS</h1>
                    </a>
                </div>
                <div className='hidden md:flex items-center justify-center gap-5'>
                    <Link className='link' to="/"><h2>Home</h2></Link>
                    <Link className='link' to="/instructions"><h2>Instructions</h2></Link>
                    <Link className='link' to="/scripture"><h2>Scripture</h2></Link>
                    <Link className='link' to="/about"><h2>About</h2></Link>
                </div>
                <div>
                    <Button variant='primary' text='Login'/>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;