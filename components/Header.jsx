'use client';

import { useState, useEffect } from "react";

//components
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {

  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const scrollPos = window.addEventListener("scroll", () =>{
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  
    //remove event
    return () => window.removeEventListener("scroll", scrollPos);
  })
  return (
    <header className={`${
      header ? 'py-4 bg-white shadow-lg dark:bg-zinc-900' : 'py-6 dark:bg-transparent'
    } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-white'} `}>
      <div className="container mx-auto">
        <div className="flex  justify-between items-center">
          <Logo/>
          
          <div className="flex items-center gap-x-6">
            <Nav containerStyles='hidden xl:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all'
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />
            <ThemeToggler/>
            <div className="xl:hidden">
              <MobileNav/> 
            </div>
          </div>
        </div>
      </div>
    
  </header> 
  ) ;
}

export default Header;
