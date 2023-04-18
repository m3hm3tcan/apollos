import React from 'react';

import {navigation} from '../data';
import {Link} from 'react-scroll';

const Nav = ({bg}) => {
  return (
  <nav>
    <ul className='flex space-x-8 capitalize text-[17px]'> 
      {navigation.map((item,index)=>(
        <li key= {index} className={`${bg ? 'text-black' : 'text-white font-bold'}  hover:text-accent cursor-pointer`}>
            <Link to={item.href} activeClass='active-nav' spy={true} smooth={true} duration={500} offset={-70} className='transation-all duration-300'>{item.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
  );
};

export default Nav;
