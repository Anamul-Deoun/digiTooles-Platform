import React from 'react'
import heroImage from '/assets/banner.png'
import infoIcon from '/assets/Group 5.png'
import playButtonIcon from '/assets/Play.png'

const Banner = () => {
  return (
    <section className='py-12 md:py-16'>
      <div className='mx-auto flex max-w-[90%] flex-col-reverse items-center justify-between gap-12 md:max-w-[80%] md:flex-row'>
        
        {/* Main Content Area */}
        <div className='py-10 text-center md:py-28 md:text-left'>
          
          <div className='mx-auto flex max-w-fit items-center justify-center gap-2 rounded-full bg-[#E1E7FF] px-5 py-2.5 md:mx-0 md:justify-start'>
            <img className='h-4 w-4' src={infoIcon} alt="Info" />
            <span className='from-[#4F39F6] to-[#9514FA] bg-gradient-to-r bg-clip-text text-sm font-medium text-transparent md:text-base'>
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className='mt-5 mb-10 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:mb-14 md:text-[70px]'>
            Supercharge Your <br className='hidden md:block' /> Digital Workflow
          </h1>
          
          <div className='flex flex-col justify-center gap-5 sm:flex-row md:justify-start'>
            
            <button className='from-[#4F39F6] to-[#9514FA] h-auto w-full rounded-full bg-gradient-to-r px-8 py-3.5 font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:w-auto shadow-md'>
              Explore Products
            </button>

            <button className="flex h-auto w-full items-center justify-center gap-3 rounded-full border-2 border-[#9514FA] bg-white px-8 py-3.5 font-bold transition-colors hover:bg-gray-50 sm:w-auto">
              <img className='h-5 w-5' src={playButtonIcon} alt="Play" />
              <span className='from-[#4F39F6] to-[#9514FA] bg-gradient-to-r bg-clip-text text-transparent'>
                Watch Demo
              </span>
            </button>

          </div>
        </div>

        {/* Hero Visual */}
        <div className='w-full lg:w-1/2'>
          <img 
            className='mx-auto h-auto w-full max-w-lg md:max-w-full object-contain' 
            src={heroImage} 
            alt="Hero Visual" 
          />
        </div>

      </div>
    </section>
  )
}

export default Banner