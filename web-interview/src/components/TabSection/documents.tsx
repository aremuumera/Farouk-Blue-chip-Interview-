import {  DocumentData2, DocumentsData } from '@/utils/constant';
import Image from 'next/image';
import React from 'react'
import { SearchIcon } from 'lucide-react';





const Document = () => {


    return (
        <div>
            <div className='md:px-[18px] px-[12px] pb-[40px]'>

                <div className="">
                    <div className='flex justify-between md:flex-row flex-col  md:gap-[15px] gap-[15px] items-center py-[22px]'>
                        <h1 className='text-[21px] text-start font-semibold'>Documents</h1>
                        <div className='flex flex-row md:justify-center  doctab justify-end gap-[10px]'>
                            <div className='flex justify-center py-2 rounded-md bg-[#fff] gap-[10px] px-2'>
                                <SearchIcon size={16} className='mt-[5px]' />
                                <input type="text" className='border-none outline-none text-gray-500 ' />
                            </div>
                            <button
                                className='bg-primary text-white text-[12px] font-[700] px-4 py-2 rounded-md'
                            >
                                File Manager
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {DocumentData2.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="py-[30px] px-[18px] bg-white w-full rounded-lg shadow-md"
                            >
                                <div className='flex justify-center flex-col items-center'>
                                    <div className={``}>
                                        <Image 
                                            src={item.img}
                                            alt={'image'}
                                            width={82}
                                            height={62}
                                        />
                                    </div>
                                    <div className='  text-center pt-[19px] '>
                                        <h2 className='font-[700] text-[16px]'>{item.docName}</h2>
                                        <p className=' text-[16px] font-[600] text-gray-300 '  >{item.docdate}</p>
                                    </div>
                                </div>
                               
                            </div>
                        );
                    })}
                </div>

                <div className="grid pt-[30px] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {DocumentsData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="py-[30px] px-[18px] bg-white w-full rounded-lg shadow-md"
                            >
                                <div className='flex justify-center flex-col items-center'>
                                    <div className={``}>
                                        <Image 
                                            src={item.img}
                                            alt={'image'}
                                            width={62}
                                            height={62}
                                        />
                                    </div>
                                    <div className='  text-center pt-[16px] '>
                                        <h2 className='font-[700] text-[16px]'>{item.docName}</h2>
                                        <p className=' text-[16px] font-[600] text-gray-300 '  >{item.docdate}</p>
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

export default Document;
