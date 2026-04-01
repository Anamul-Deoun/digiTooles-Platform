import React from 'react'

const Plan = () => {
  const CheckIcon = () => (
    <svg className="mr-3 h-6 w-6 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section className='px-4 pb-16 md:px-0 md:pb-30'>
      <div className='mx-auto max-w-[80%]'>
        
        <header className='mb-10 space-y-4 text-center'>
          <h2 className='text-[#101727] text-5xl font-extrabold tracking-tight'>
            Simple, Transparent Pricing
          </h2>
          <p className='text-[#627382] text-[16px] leading-5'>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </header>

        <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3'>

          <div className='cursor-pointer rounded-3xl border border-gray-100 bg-[#F8F9FB] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/70 hover:shadow-xl hover:backdrop-blur-md'>
            <h3 className='text-[#1A202C] text-2xl font-bold'>Starter</h3>
            <p className='text-[#627382] mt-2 text-[16px] leading-5'>Perfect for getting started</p>

            <div className='my-8'>
              <span className='text-[#101727] text-[40px] font-bold'>$0</span>
              <span className='text-[#627382] text-[20px]'> /Month</span>
            </div>

            <ul className='space-y-3'>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> Access to 10 free tools</li>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> Basic templates</li>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> Community support</li>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> 1 project per month</li>
            </ul>

            <button className='from-[#4F39F6] to-[#9514FA] mt-20 w-full rounded-full bg-gradient-to-r py-4 text-[16px] font-bold text-white transition-opacity hover:opacity-90'>
              Get Started Free
            </button>
          </div>

          <div className='from-[#4F39F6] to-[#9514FA] relative z-10 my-6 w-full cursor-pointer rounded-3xl border border-white/20 bg-gradient-to-r p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:brightness-110 md:my-0 md:scale-105'>
            <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-[#FEF3C6] bg-[#FEF3C6] px-4 py-1 shadow-md'>
              <span className='text-[#BB4D00] whitespace-nowrap text-[14px] font-medium'>Most Popular</span>
            </div>
            
            <h3 className='text-2xl font-bold text-white'>Pro</h3>
            <p className='mt-2 text-[16px] leading-5 text-white/70'>For teams and businesses</p>

            <div className='my-8'>
              <span className='text-[40px] font-bold text-white'>$99</span>
              <span className='text-[20px] text-white/90'> /Month</span>
            </div>

            <ul className='space-y-3'>
              <li className='flex items-center text-[16px] text-white'><CheckIcon /> Access to all premium tools</li>
              <li className='flex items-center text-[16px] text-white'><CheckIcon /> Unlimited templates</li>
              <li className='flex items-center text-[16px] text-white'><CheckIcon /> Priority support</li>
              <li className='flex items-center text-[16px] text-white'><CheckIcon /> Unlimited projects</li>
              <li className='flex items-center text-[16px] text-white'><CheckIcon /> Cloud sync</li>
              <li className='flex items-center text-[16px] text-white'><CheckIcon /> Advanced analytics</li>
            </ul>

            <button className='mt-6 w-full rounded-full bg-white py-4 text-[16px] font-bold transition-transform active:scale-95'>
              <span className='from-[#4F39F6] to-[#9514FA] bg-gradient-to-r bg-clip-text text-transparent'>Start Pro Trial</span>
            </button>
          </div>

          <div className='cursor-pointer rounded-3xl border border-gray-100 bg-[#F8F9FB] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/70 hover:shadow-xl hover:backdrop-blur-md'>
            <h3 className='text-[#1A202C] text-2xl font-bold'>Enterprise</h3>
            <p className='text-[#627382] mt-2 text-[16px] leading-5'>For large scale operations</p>

            <div className='my-8'>
              <span className='text-[#101727] text-[40px] font-bold'>$199</span>
              <span className='text-[#627382] text-[20px]'> /Month</span>
            </div>

            <ul className='space-y-3'>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> Everything in Pro</li>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> Team collaboration</li>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> Custom integrations</li>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> Dedicated support</li>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> SLA guarantee</li>
              <li className='flex items-center text-[#627382] text-[16px]'><CheckIcon /> Custom branding</li>
            </ul>

            <button className='from-[#4F39F6] to-[#9514FA] mt-6 w-full rounded-full bg-gradient-to-r py-4 text-[16px] font-bold text-white'>
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Plan