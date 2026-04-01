import React from 'react'
import User from '/assets/user.png'
import Package from '/assets/package.png'
import Rocket from '/assets/rocket.png'

const StartCard = () => {
  return (
    <div className='bg-[#F9FAFC] py-30 my-30'>
      
      
      <div className='mb-10 space-y-4 text-center'>
        <h2 className='text-[#101727] text-3xl font-extrabold leading-tight md:text-5xl'>
          Get Started in 3 Steps
        </h2>
        <p className='text-[#627382] text-[16px] leading-5'>
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className='mx-auto grid max-w-[90%] grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-20 lg:max-w-[80%] lg:gap-30'>
        
        <div className='relative w-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm md:p-10'>
          <div className='from-[#4F39F6] to-[#9514FA] absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r text-sm font-bold text-white'>
            <span>01</span>
          </div>

          <div className='mx-auto mb-6 mt-10 flex h-25 w-25 items-center justify-center rounded-full bg-[#f3e8fe]'>
            <img src={User} alt="User Icon" />
          </div>

          <h4 className='text-[#001931] text-2xl font-bold'>
            Create Account
          </h4>
          <p className="text-[#627382] mb-22 mt-4 text-[16px] leading-5">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className='relative w-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm md:p-10'>
          <div className='from-[#4F39F6] to-[#9514FA] absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r text-sm font-bold text-white'>
            <span>02</span>
          </div>

          <div className='mx-auto mb-6 mt-10 flex h-25 w-25 items-center justify-center rounded-full bg-[#f3e8fe]'>
            <img src={Package} alt="Package Icon" />
          </div>

          <h4 className='text-[#001931] text-2xl font-bold'>
            Choose Products
          </h4>
          <p className="text-[#627382] mb-22 mt-4 text-[16px] leading-5">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className='relative w-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm md:p-10'>
          <div className='from-[#4F39F6] to-[#9514FA] absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r text-sm font-bold text-white'>
            <span>03</span>
          </div>

          <div className='mx-auto mb-6 mt-10 flex h-25 w-25 items-center justify-center rounded-full bg-[#f3e8fe]'>
            <img src={Rocket} alt="Rocket Icon" />
          </div>

          <h4 className='text-[#001931] text-2xl font-bold'>
            Start Creating
          </h4>
          <p className="text-[#627382] mb-22 mt-4 text-[16px] leading-5">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  )
}

export default StartCard