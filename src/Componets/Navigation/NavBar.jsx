import React from 'react';  
import { Link } from 'react-router-dom';  
import {   
  HomeIcon,   
  PlusCircleIcon,   
  HeartIcon,   
  UserIcon,   
  SearchIcon   
} from '@heroicons/react/outline';  

const NavBar = () => {  
  return (  
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-3">  
      <div className="flex justify-around items-center max-w-md mx-auto">  
        <Link to="/" className="nav-icon">  
          <HomeIcon className="h-6 w-6" />  
        </Link>  
        <Link to="/search" className="nav-icon">  
          <SearchIcon className="h-6 w-6" />  
        </Link>  
        <Link to="/create" className="nav-icon">  
          <PlusCircleIcon className="h-6 w-6" />  
        </Link>  
        <Link to="/notifications" className="nav-icon">  
          <HeartIcon className="h-6 w-6" />  
        </Link>  
        <Link to="/profile" className="nav-icon">  
          <UserIcon className="h-6 w-6" />  
        </Link>  
      </div>  
    </nav>  
  );  
};  

export default NavBar;