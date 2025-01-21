import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import NavigationMenuDemo from '@/components/NavMenu';

const CustomLink = ({ href, title, className = "" }) => {
    return (
        <Link href={href}>
            <a className={`${className} relative group`}>
                {title}
                <span className={`h-[1px] inline-block bg-accent text-accent absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0`}>
                    &nbsp;
                </span>
            </a>
        </Link>
    );
};

const NavigationBar = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex  h-20 justify-between items-center px-10 shadow-blue-800 shadow-2xl  border-accent'> 
        <div className='w-1/2 flex items-center'>
          <div className='text-xl font-semibold'>
            <span>Edu</span>
            <span className='text-primary'>Connect.</span>
          </div>

          <div className='relative'>
            <input type="text" className='w-96 h-10 p-2 ml-10  text-sm border-2 border-accent bg-transparent rounded-full outline-none transition focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-transparent duration-300' placeholder='What would you like to learn?'/>
            <i className="fa fa-search absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
        <div className='w-1/2 flex justify-end items-center'>
          {/* Add links or content here */}

          <div>
            <ThemeSwitcher/>
          </div>
          <div className='mx-4 h-10 hover:border-2 flex items-center justify-center w-44 hover:border-accent p-2 rounded-full transition duration-300  ease-in-out'>
            <p>Become a Teacher</p> 
          </div>

          <div className='mx-4'>
            <button className='border-2 h-10 flex items-center justify-center border-accent rounded-full p-2 w-32 text-accent hover:bg-accent hover:text-white hover:border-transparent hover:border-0 transition-all duration-300'>
              <Link href='login'>Log In</Link>
            </button>
          </div>

          <div className='mx-4'>
            <button className='h-10 bg-primary hover:bg-transparent hover:border-2 hover:border-primary transition-all duration-300 rounded-full p-2 w-32 flex items-center justify-center text-white hover:text-primary'>
              Join for Free
            </button>
          </div>
        </div>
      </div>

      <div className='bg-accent text-white  px-10 w-full'>
        <NavigationMenuDemo></NavigationMenuDemo>
      </div>
    </div>
  );
};

export default NavigationBar;
