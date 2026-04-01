import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#101727]'>
      <div className='mx-auto grid max-w-[90%] grid-cols-2 gap-10 pb-12 pt-16 md:max-w-[80%] md:grid-cols-3 md:pb-20 md:pt-30 lg:flex lg:justify-between'>
        
        {/* Branding Section */}
        <div className='col-span-2 space-y-4 md:col-span-3 lg:col-span-1'>
          <h2 className='text-4xl font-extrabold text-white'>
            DigiTools
          </h2>
          <p className='text-[16px] leading-6 text-white/80'>
            Premium digital tools for creators, professionals, and businesses. <br className="hidden lg:block" /> 
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Links: Product */}
        <nav className='flex flex-col space-y-4 text-white/80'>
          <h3 className='text-white text-[20px] font-medium leading-[28px]'>Product</h3>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Features</a>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Pricing</a>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Templates</a>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Integrations</a>
        </nav>

        {/* Links: Company */}
        <nav className='flex flex-col space-y-4 text-white/80'>
          <h3 className='text-white text-[20px] font-medium leading-[28px]'>Company</h3>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>About</a>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Blog</a>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Careers</a>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Press</a>
        </nav>

        {/* Links: Resources */}
        <nav className='flex flex-col space-y-4 text-white/80'>
          <h3 className='text-white text-[20px] font-medium leading-[28px]'>Resources</h3>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Documentation</a>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Help Center</a>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Community</a>
          <a href="#" className='text-[16px] leading-6 hover:text-white transition-colors'>Contact</a>
        </nav>

        {/* Social Icons */}
        <div className='col-span-2 space-y-4 md:col-span-3 lg:col-span-1'>
          <h3 className='text-[20px] font-medium leading-7 text-white'>Social</h3>
          <div className='flex gap-4'>
            {/* Instagram */}
            <a href="#" className='group flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-110'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-800 transition-colors group-hover:text-[#E4405F]">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className='group flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-110'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-800 transition-colors group-hover:text-[#1877F2]">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className='group flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-110'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-800 transition-colors group-hover:text-black">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className='mx-auto h-px max-w-[80%] bg-white/10'></div>

      <div className='mx-auto flex max-w-[80%] flex-col items-center justify-between gap-6 pb-8 mt-8 text-center md:flex-row md:text-left'>
        <p className='text-[16px] leading-6 text-[#FAFAFA] opacity-90'>
          © 2026 Digitools. All rights reserved.
        </p>
        <div className='flex flex-wrap justify-center gap-6 md:gap-12'>
          <a href="#" className='text-[16px] leading-6 text-[#FAFAFA] hover:underline'>Privacy Policy</a>
          <a href="#" className='text-[16px] leading-6 text-[#FAFAFA] hover:underline'>Terms of Service</a>
          <a href="#" className='text-[16px] leading-6 text-[#FAFAFA] hover:underline'>Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer