import { CampaignsData, } from '@/utils/constant';
import Image from 'next/image';
import React from 'react'





const Campaigns = () => {


    return (
        <div>
            <div className='md:px-[18px] px-[10px] pb-[40px]'>

                <div className="w-full sm:block flex">
                    <div className='flex justify-between md:flex-row flex-col  md:gap-[15px] gap-[10px] items-center py-[22px]'>
                        <h1 className='text-[21px] font-semibold'>Campaigns <span className='text-gray-400 text-[.8rem] '>30 Days</span></h1>
                        <div className='flex flex-row md:justify-center justify-end gap-[10px]'>
                            <div className='flex justify-center py-2 rounded-md bg-[#fff] gap-[10px] px-2'>
                                <select
                                    className='border-none outline-none text-[.8rem] w-[86px] text-zinc-500'
                                    name="" id="">
                                    <option value="Active">30 days</option>
                                </select>
                            </div>
                            <button
                                className='bg-primary text-white text-[12px] font-[700] px-4 py-2 rounded-md'
                            >Plan Campaigns</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CampaignsData.map((item) => {
                        // const styles = getProjectStyles(item.pr);
                        return (
                            <div
                                key={item.id}
                                className="p-[30px] bg-white w-full rounded-lg shadow-md"
                            // style={{borderBottomColor: styles.color, borderBottomWidth: '5px', borderInlineWidth: styles.width}}
                            >

                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-[10px] items-center font-[500] '>
                                        <div
                                            className={`w-[46px] h-[46px] bg-[#F5F8FA] px-2 rounded-[5px] flex justify-between items-center`}
                                        >
                                            <Image
                                                src={item.logo}
                                                alt={`${item.MediaName} logo`}
                                                width={23}
                                                height={23}
                                            />
                                        </div>
                                        <p className="text-gray-400 pt-[5px] text-[15px]">{item.MediaName}</p>
                                    </div>
                                    <div>
                                        <Image
                                            src={'/tabs/campaigns/Dropdown.png'}
                                            alt={`logo`}
                                            width={11}
                                            height={11}
                                        />
                                    </div>
                                </div>
                                <div className='py-[25px]'>
                                    <p className="font-[700] pt-[5px] text-[34px]">{item.projectBudget}</p>
                                    <div className='flex justify-start  items-center'> 
                                         {
                                            item.status ?  (
                                                <Image
                                                  src={'/tabs/campaigns/Up-right.png'}
                                                  alt='true'
                                                  width= {19}
                                                  height= {19}
                                                />
                                            ) : (
                                                <Image
                                                src={'/tabs/campaigns/Down-left.png'}
                                                alt='true'
                                                width= {19}
                                                height= {19}
                                                />
                                            )
                                         }
                                         <span> 
                                            <span className={`${item.status ?  'text-[#50CD89]' : 'text-[#F1416C]'} pr-[5px]`}>
                                                {item.projectPercentage}
                                            </span> 
                                            <span className='text-[14px] text-gray-400'>
                                                {item.mediaInfo}
                                            </span>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Campaigns
