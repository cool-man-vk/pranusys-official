import React from 'react';

const TopSection = () => {
  return (
    <div className='h-[100vh] w-full overflow-auto' 
        style={{
          'backgroundImage': 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          'backgroundRepeat':'no-repeat',
          'backgroundSize':'cover',
        }}>
        <div>
          <div
              className='mt-[50vh] mx-[25%] ssm:mx-[5%] bg-white rounded-[5px] p-[8px] text-center justify-center items-center'>
              {/* <h1 className='text-black text-[35px] ssm:text-[28px] font-bold'>PranuSys</h1> */}
              <p className='text-black text-[22px] ssm:text-[14px]'>
                  We transform your challenges into opportunities with our cutting-edge 
                  tech solutions and expert guidance!
              </p>
              <a href='/contact'>
                  <button className='bg-[#ffaa00] text-white p-[10px] tracking-[1px] text-[18px] ssm:text-[16px] rounded-lg mt-[10px]'>
                    Get Started
                  </button>
              </a>
          </div>
        </div>
        
    </div>
  )
}

export default TopSection