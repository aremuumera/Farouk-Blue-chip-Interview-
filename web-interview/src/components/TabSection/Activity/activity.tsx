'use client'

import { events } from '@/utils/constant';
import Image from 'next/image';
import React, { useState } from 'react'

const Activity = () => {
  const tabs = ['Today', 'Week', 'Month', '2020'];
  const [activeTab, setActiveTab] = useState<string | null>(tabs[0]);

const SwitchIcon = (eventType: string) => {
  switch (eventType) {
    case 'created':
      return {
        src: '/tabs/activity/Library.png',
      };
    case 'newEntries':
      return {
        src: '/tabs/activity/User.png',
      };
    case 'uploadedFiles':
      return {
        src: '/tabs/activity/Attachment.png',
      };
    case 'uploadedConcept':
      return {
        src: '/tabs/activity/Picture.png',
      };
    case 'MonthlyFee':
    return {
      src: '/tabs/activity/Credit-card.png',
      };
    default:
      return {
        src: '/tabs/activity/Library.png',
      };
  }
}

  return (
    <div>
       <div className='lg:px-[30px] mt-[30px] py-[30px] bg-white rounded-[10px]'>
             <div className='flex px-[20px] flex-col sm:flex-row  justify-between items-center'>
                <div className='flex pb-[25px]  justify-center gap-[10px]'>
                  <div className=''>
                    <Image src={"/tabs/activity/Calendar.png"} alt="overview" width={24} height={24} />
                  </div>
                  <h1 className='font-[700]'>Jan 23, 2021</h1>
                </div>
                <div className='flex justify-center  gap-4 items-center'>
                  {
                    tabs.map((tab, i) => (
                      <button
                      onClick={() => {setActiveTab(tab);}}
                      key={i}

                      >
                         <h1 className={`sm:pb-[25px] pb-[10px] ${activeTab === tab ? "font-[500] text-[16px] border-b-primary border-b-[1px]  " : "text-gray-400"}`} >{tab}</h1>
                         <span className={`${activeTab === tab ? '' : ''}`}></span>
                      </button>
                    ))

                  }
                </div>
             </div>
             <div className="w-full mx-[20px] hidden md:block bg-[#EBEDF3]  h-[1px] -mt-[2px] rounded-[30px]"></div>

             {/*  timeline section */}
              <div className="flex  flex-col pt-[30px] relative overflow-hidden items-center">
                  <div className="relative w-full ">
                     <div className="absolute left-8 top-0 h-full border-l-2 border-dashed border-gray-300" />

                    {events.map((event, index) => (
                      <div key={index} className="flex items-start mb-8">
                        {/* Icon */}
                        <div className='pl-4'>
                            <div className="relative flex-shrink-0 w-8 h-8 bg-gray-200  text-white flex  gap-[16px] items-center justify-center rounded-full z-10">
                              <span className="text-sm font-bold">
                                <Image
                                src={SwitchIcon(event.activityType).src}
                                alt='dfz'
                                width={16}
                                height={16}
                                />
                              </span>
                            </div>
                        </div>

                        {/* Line to main timeline */}
                        <div className="flex flex-col items-center">
                          {/* <div className="h-8 border-l-2 border-dashed border-gray-300"></div> */}
                        </div>

                        {/* Event Content */}
                        <div className="ml-2 lg:ml-4 pt-1 w-full rounded-lg">
                          <h3 className="sm:text-[16px] text-[12px] font-[500] text-gray-900">{event.title}</h3>
                          <p className='text-gray-400 text-[12px] mb-[10px] font-[500]' >{event.time} by <span className='text-primary'>{event.user}</span></p>

                          <div className="">
                            {event.tasks && (
                            <ul className="mt-2 w-full space-y-2">
                              {event.tasks.map((task, i) => (
                                <li
                                  key={i}
                                  className="flex md:flex-row flex-col gap-[16px] scrollHide  justify-between border-[1px] border-gray-200 rounded-md w-full p-[10px]"
                                >
                                  <span className="text-[600] text-[18px]">{task.title}</span>
                                  <div className="flex justify-between overflow-x-auto whitespace-nowrap eventtask scrollbar-hide  scroll-smooth relative items-center gap-[20px] sm:gap-[40px] lg:gap-[80px]">
                                    <span className="bg-[#F5F8FA] whitespace-nowrap text-[12px] text-gray-400 font-[700] px-[10px] py-[6px] rounded-[8px]">
                                      {task.type}
                                    </span>
                                    <div className="flex gap-[10px]">
                                      {task.img.map((imgSrc, imgIndex) => (
                                        <div
                                          key={imgIndex}
                                          className="w-[30px] h-[30px] rounded-full -mr-[17px] overflow-hidden"
                                        >
                                          <Image src={imgSrc} alt="User" width={30} height={30} />
                                        </div>
                                      ))}
                                    </div>
                                    <span
                                      className={`text-sm whitespace-nowrap px-[10px] py-[6px] rounded-md ${
                                        task.status === "Completed"
                                          ? "text-green-500 bg-[#E8FFF3]"
                                          : "text-primary bg-[#F1FAFF]"
                                      }`}
                                    >
                                      {task.status}
                                    </span>
                                    <span className="bg-[#F5F8FA] text-[12px] text-gray-400 font-[700] px-[22px] py-[6px] rounded-[8px]">
                                      {"View"}
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}

                        </div>
                            <div className="scrollHide eventtask">
                              {event?.uploadedFiles  && (
                                <ul className="mt-2 space-y-1 flex justify-start   overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide relative gap-[20px] sm:gap-[50px] px-[15px] sm:px-[30px] border-[1px] border-gray-200 rounded-md  p-[10px]">
                                  {event.files.map((file, i) => (
                                    <li key={i} className=" flex-shrink-0">
                                      <div className='flex justify-between  items-center gap-[30px]'>
                                          <div className='w-[30px] h-[30px] rounded-full -mr-[17px] overflow-hidden'>
                                            <Image
                                              src={file.fileSrc}
                                              alt="User"
                                              width={30}
                                              height={30}
                                            />
                                          </div>
                                          <div>
                                              <h2 className='text-[12px] font-[500]'>{file.fileName}</h2>
                                              <p className='text-[12px] text-gray-400 '>{file.fileSize}</p>
                                          </div>
                                    </div>
                                  </li>
                                  ))}
                                </ul>
                              )}
                          </div>

                            <div className="scrollHide  eventtask">
                                {event?.uploadedConcept && (
                                  <ul className="mt-4 flex gap-5 sm:gap-[50px]  overflow-x-auto scroll-smooth px-[15px] sm:px-[30px] border-[1px] border-gray-200 rounded-md py-[30px] relative">
                                    {event.concept?.map((file, i) => (
                                      <li key={i} className="flex-shrink-0">
                                        <div className="flex justify-between items-center gap-[30px]">
                                          <div className="w-[200px] h-[200px]">
                                            <Image
                                              src={file}
                                              alt="User"
                                              width={200}
                                              height={200}
                                            />
                                          </div>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </div>

                          {event?.MonthlyFee && (
                              <ul className="mt-4 flex flex-col sm:flex-row justify-between sm:gap-[50px] gap-[20px] bg-[] px-[8px]  lg:px-[20px] border-dashed bg-[#F1FAFF] border-[1px] border-primary items-center rounded-md  py-[10px]">
                              {event.FeesInfo?.map((file, i) => (
                                <li key={i} className=" ">
                                  <div className='flex justify-between items-center gap-[10px]'>
                                      <div className='w-[32px] h-[32px] '>
                                        <Image
                                          src={'/tabs/activity/Duotone.png'}
                                          alt="User"
                                          width={32}
                                          height={32}
                                        />
                                      </div>
                                      <div className="">
                                        <h2 className='sm:text-[16px] font-[700] text-[12px] '>Withdraw Your Funds to Bank</h2>
                                        <p className='text-[#7E8299] sm:text-[14px] text-[12px] font-[500] '>Withdraw money to your bank account. Commision is $25 per transaction under $50,000</p>
                                      </div>
                                </div>
                              </li>
                              ))}
                              <div className=''>
                                <button className='px-[10px] w-full py-[6px] bg-primary text-white text-[.8rem] rounded-md font-[500]'>
                                   Withdraw Money
                                </button>
                              </div>
                            </ul>
                          )}
                           
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
       </div>
       
    </div>
  )
}

export default Activity;

