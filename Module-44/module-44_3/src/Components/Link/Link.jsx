import React from 'react';

const Link = ({route}) => {
    return (
        <li className='md:mr-4'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;