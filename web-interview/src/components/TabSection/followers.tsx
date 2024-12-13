import {  FollowersData, } from '@/utils/constant';
import Image from 'next/image';
import React from 'react'





const Followers = () => {

    return (
        <div>
            <div className='md:px-[18px] px-[10px] pb-[40px]'>

                <div className="">
                    <div className='flex justify-between   md:gap-[15px] gap-[10px] items-center py-[22px]'>
                        <h1 className='text-[21px] font-semibold'>Followers(39) <span className='text-gray-400 text-[.8rem] '>30 Days</span></h1>
                        <div className='flex flex-row md:justify-center justify-end gap-[10px]'>
                            <div className='flex justify-center py-2 rounded-md bg-[#fff] gap-[10px] px-2'>
                                <select
                                    className='border-none bg-transparent outline-none text-[.8rem] w-[86px] text-zinc-500'
                                    name="" id="">
                                    <option value="Active">Active</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FollowersData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="p-[30px] bg-white w-full rounded-lg shadow-md"
                            >
                                <div className='flex justify-center flex-col items-center'>
                                    <div className={``}>
                                        <Image 
                                            src={item.logo}
                                            alt={'image'}
                                            width={54}
                                            height={54}
                                        />
                                    </div>
                                    <div className=' py-[25px] text-center '>
                                        <h2 className='font-[700] text-[18px]'>{item.name}</h2>
                                        <p className=' text-[16px] font-[600] text-gray-300 '  >{item.position}</p>
                                    </div>
                                    <div>
                                        <div className='flex justify-start items-center gap-[10px]'>
                                                <div className='border-[1px] border-dashed py-[6px] px-[8px] rounded-[8px] border-gray-300 '>
                                                    <p className="font-[700] text-[#5E6278] text-sm">{item.avgDeal}</p>
                                                    <p className="text-gray-500 text-[12px]">Avg Deal</p>
                                                </div>
                                                <div className='border-[1px] border-dashed py-[6px] px-[8px] rounded-[8px] border-gray-300 '>
                                                    <p className="font-[700] text-[#5E6278] text-sm">{item.deals}</p>
                                                    <p className="text-gray-500 text-[12px]">Deals</p>
                                                </div>
                                        </div>
                                    </div>
                                    <div className=' '>
                                        {
                                            item.following ? (
                                                <button className='bg-primary mt-[30px] px-[10px] text-[12px] flex justify-center items-center py-[4px] rounded-[6px] text-white gap-[10px] '>
                                                    <Image
                                                    src={'/tabs/follower/tick.png'}
                                                    alt='follower'
                                                    width={12}
                                                    height={10}
                                                    />
                                                    Following
                                                </button>
                                            ): (
                                                <button className='bg-[#F5F8FA] mt-[30px] px-[10px] text-[12px] text-gray-400 flex justify-center items-center py-[4px] rounded-[6px] hover:bg-primary hover:text-white  gap-[10px] '>
                                                    <Image
                                                    src={'/tabs/follower/group.png'}
                                                    alt='follower'
                                                    width={12}
                                                    height={10}
                                                    />
                                                    Follow
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                               
                            </div>
                        );
                    })}
                </div>
                <div className='py-[30px] flex justify-center'>
                    <button
                    className='bg-primary text-white px-[10px] py-[5px] rounded-[6px]'
                    >
                       Show more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Followers
