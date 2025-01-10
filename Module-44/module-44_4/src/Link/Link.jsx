import React from 'react';

const Link = ({route}) => {
    return (
        <li className='hover:bg-green-300 py-2 px-3 rounded-sm text-xl'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;