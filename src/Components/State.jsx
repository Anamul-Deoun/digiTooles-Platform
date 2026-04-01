import React from 'react'

const State = () => {
  return (
    <div className='from-[#4F39F6] to-[#9514FA] bg-gradient-to-r'>
      <div className='mx-auto flex max-w-[90%] flex-col items-center justify-around gap-8 py-10 md:max-w-[80%] md:flex-row md:gap-0 md:py-5'>
        
        <div className='text-center'>
          <h1 className='text-[40px] font-extrabold leading-tight text-white md:text-[60px]'>
            50K+
          </h1>
          <p className='text-[24px] font-medium text-white/70'>
            Active Users
          </p>
        </div>

        <div className='h-px w-40 bg-white/30 md:h-20 md:w-px'></div>

        <div className='text-center'>
          <h1 className='text-[40px] font-extrabold leading-tight text-white md:text-[60px]'>
            200+
          </h1>
          <p className='text-[24px] font-medium text-white/70'>
            Premium Tools
          </p>
        </div>

        <div className='h-px w-40 bg-white/30 md:h-20 md:w-px'></div>

        <div className='text-center'>
          <h1 className='text-[40px] font-extrabold leading-tight text-white md:text-[60px]'>
            4.9
          </h1>
          <p className='text-[24px] font-medium text-white/70'>
            Rating
          </p>
        </div>

      </div>
    </div>
  )
}

export default State