import React from 'react'

const WorkFlow = () => {
  return (
    <section className='from-[#4F39F6] to-[#9514FA] bg-gradient-to-r py-30'>
      <div className='mx-auto max-w-[80%] text-center px-4'>
        
        {/* Main Heading & Subtext */}
        <header className='mb-10 space-y-4'>
          <h2 className='text-[40px] font-extrabold leading-tight text-white'>
            Ready to Transform Your Workflow?
          </h2>
          <p className='text-white/70 text-[16px] leading-relaxed'>
            Join thousands of professionals who are already using Digitools to work smarter.
            <span className='block sm:inline'> Start your free trial today.</span>
          </p>
        </header>

        {/* Action Buttons */}
        <div className='mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          
          <button className='w-full scale-100 rounded-full border border-white bg-white px-8 py-4 font-bold transition-all hover:scale-105 active:scale-95 sm:w-auto shadow-lg'>
            <span className='from-[#4F39F6] to-[#9514FA] bg-gradient-to-r bg-clip-text text-[16px] text-transparent font-bold'>
              Explore Products
            </span>
          </button>

          <button className='w-full rounded-full border border-white bg-transparent px-8 py-4 font-bold text-white transition-colors hover:bg-white/10 sm:w-auto'>
            <span>View Pricing</span>
          </button>

        </div>

        {/* Bottom Note */}
        <footer className='text-white/60 text-[16px] font-medium'>
          14-day free trial • No credit card required • Cancel anytime
        </footer>

      </div>
    </section>
  )
}

export default WorkFlow