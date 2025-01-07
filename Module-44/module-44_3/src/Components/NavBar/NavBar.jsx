import React, {useState} from 'react';
import Link from '../Link/Link';
import { FaAlignJustify } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/services', name: 'Services' },
        { id: 5, path: '*', name: '404' }
    ];
    return (
        <nav>
            <div className='md:hidden sm:mb-5 cursor-pointer' onClick={() => setToggle(!toggle)}>
                {
                    toggle ?
                        <AiOutlineClose className='text-3xl' />
                        :
                        <FaAlignJustify className='text-3xl' />
                }
            </div>
            <ul className='md:flex md:justify-center md:flex-row flex flex-col items-start'>
                {
                    routes.map(route => {
                        return (
                        <Link key={route.id} route={route} />
                    )})
                }
            </ul>
        </nav>
    );
};

export default NavBar;