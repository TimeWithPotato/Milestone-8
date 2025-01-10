import React from 'react';

const Link = ({ route }) => {
  return (
      <li className='text-xl relative group'>
          
          <a href={route.path} className='block px-5 py-2 group-hover:text-white transition-all group-hover:scale-110 group-hover:translate-z-10 duration-500  '>{route.name}</a>

          <span className='absolute inset-0 md:bg-cyan-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10 rounded-xl' />
    </li>
  );
};

export default Link;
