import React from 'react';
import Link from '../Link/Link';

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Services', path: '/services' },
        { id: 5, path: '*', name: 'Not Found' }
    ];
    return (
        <nav>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route =>
                    <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;