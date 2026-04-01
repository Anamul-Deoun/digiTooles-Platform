import React, { useState, useEffect } from 'react';
import cartIcon from '/assets/products/shopping-cart.png';

const Navbar = () => {
  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(() => {
    // Custom event listener for synchronizing cart state
    const syncCartDisplay = (e) => {
      setBasketTotal(e.detail);
    };

    window.addEventListener('cartUpdate', syncCartDisplay);
    
    // Cleanup to prevent memory leaks
    return () => {
      window.removeEventListener('cartUpdate', syncCartDisplay);
    };
  }, []);

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md shadow-black/10'>
      <div className='mx-auto flex max-w-[95%] items-center justify-between py-4 md:max-w-[90%] lg:max-w-[80%] lg:py-6'>
        
        {/* Branding Section */}
        <section>
          <h1 className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-2xl font-black text-transparent md:text-3xl lg:text-4xl'>
            DigiTools
          </h1>
        </section>

        {/* Desktop Navigation Links */}
        <nav className='hidden lg:block'>
          <ul className='flex items-center gap-8 font-semibold text-[#101727]'>
            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className='hover:text-[#4F39F6] transition-colors'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Actions & Cart */}
        <div className='flex items-center gap-5 lg:gap-7'>
          
          <div className='relative inline-block cursor-pointer group'>
            <img src={cartIcon} alt="Shopping Cart" className='w-6 md:w-7 transition-transform group-hover:scale-110' />
            
            <span className='absolute -right-2 -top-2 flex min-w-[20px] items-center justify-center rounded-full border-2 border-white bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] px-1.5 py-0.5 text-[10px] font-bold text-white'>
              {basketTotal}
            </span>
          </div>

          {/* Desktop Auth Buttons */}
          <div className='hidden items-center gap-5 lg:flex'>
            <a href="/login" className="font-medium text-[#101727] hover:text-[#4F39F6]">
              Login
            </a>
            <button className='rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-7 py-2.5 font-semibold text-white shadow-lg transition-opacity hover:opacity-90'>
              Get Started
            </button>
          </div>

          {/* Mobile Toggle Menu */}
          <button className='flex flex-col gap-1.5 p-1 lg:hidden' aria-label="Menu">
            <div className='h-0.5 w-6 rounded-full bg-[#9514FA]'></div>
            <div className='h-0.5 w-6 rounded-full bg-[#9514FA]'></div>
            <div className='h-0.5 w-6 rounded-full bg-[#9514FA]'></div>
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;