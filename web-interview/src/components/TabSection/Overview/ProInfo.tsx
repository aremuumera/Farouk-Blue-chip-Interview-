
import Image from 'next/image'
import React from 'react'

const ProInfo = () => {
  return (
    <div>
        <div>
            <div className='w-full h-[600px] rounded-[10px] bg-white mt-[30px] lg:px-[60px] px-[10px] pt-[60px] max-w-[545px]'>
                <div className='text-center text-[22px] font-[700]'>
                    <h2>Upgrade to Pro</h2>
                    <h2 className=''>Create Limitless Deals</h2>
                </div>
                <div className='text-center mt-[16px] font-[500]'>
                    <p className='text-[15px] text-gray-500 font-[600] '>
                        Craft a headline that is both informative and will capture
                    creating an outline, and checking facts
                    </p>
                </div>
                <div className='flex mt-[20px] justify-center'>
                    <button className='bg-primary text-white text-[15px] font-[500] rounded-[8px] py-[6px] px-[10px]  '>
                        Upgrade Now
                    </button>
                </div>
                <div className='mt-[80px]'>
                <Image src={"/tabs/overview/pro1.png"} alt="overview" width={406} height={270} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProInfo
