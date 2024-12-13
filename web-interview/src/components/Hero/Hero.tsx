'use client';

import { TabContext } from '@/contexts/TaBContext';
import Breadcrumb from '@/utils/breadCrumbs';
import Image from 'next/image';
import React, { useContext } from 'react';

type UserInfoCardTypes = {
    name: string;
    jobTitle: string;
    location: string;
    email: string;
    earnings: string;
    referrals: number;
    deals: number;
    activeTab?: number;
    setActiveTab?: React.Dispatch<React.SetStateAction<number>>;

};

// Tabs for dynamic navigation
const tabNames = ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers', 'Activity'];

const StatCard = ({ value, label }: { value: string | number; label: string }) => (
    <div className="border-dashed text-left border-[1px] px-[16px] py-[8px] border-[#e4e6ef] rounded-md flex flex-col ">
        <h1 className="font-bold text-[24px] text-[#181C32]">{value}</h1>
        <h2 className="text-[14px] font-medium text-[#B5B5C3]">{label}</h2>
    </div>
);

const UserInfoCard = ({ name, jobTitle, location, email, earnings, referrals, activeTab, deals, setActiveTab }: UserInfoCardTypes) => {

  return ( <div className="w-full bg-white px-[20px] pt-[20px] md:px-[30px] md:pt-[30px] rounded-[20px] mt-[20px] md:mt-[30px] shadow-sm">
        <div className="flex flex-col relative lg:flex-row gap-[20px] lg:gap-[40px]">
            {/* User Profile Image */}
            <div className="relative mx-auto lg:mx-0">
                <Image
                    src={'/hero/man.png'}
                    alt="User"
                    width={160}
                    height={160}
                    className="rounded-[10px]"
                />
                <span className="absolute w-[18px] h-[18px] -right-2 bottom-12 bg-[#1DC894] rounded-full"></span>
            </div>

            {/* User Details */}
            <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[20px]">
                    <div>
                        <div className="flex gap-[10px] items-center">
                            <h1 className="text-[20px] font-bold text-[#181C32]">{name}</h1>
                            <Image src={'/hero/verified.png'} alt="Verified" width={18} height={18} />
                        </div>
                        <div className="flex pt-[10px] gap-[15px] items-center flex-wrap">
                            <span className="flex gap-[5px] items-center">
                                <Image src={'/hero/user.png'} alt="Job" width={16} height={10} />
                                <h2 className="text-[14px] font-medium text-[#B5B5C3]">{jobTitle}</h2>
                            </span>
                            <span className="flex gap-[5px] items-center">
                                <Image src={'/hero/Duotone.png'} alt="Location" width={16} height={14} />
                                <h2 className="text-[14px] font-medium text-[#B5B5C3]">{location}</h2>
                            </span>
                            <span className="flex gap-[5px] items-center">
                                <Image src={'/hero/at.png'} alt="Email" width={16} height={14} />
                                <h2 className="text-[14px] font-medium text-[#B5B5C3]">{email}</h2>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[10px] md:gap-[20px]">
                        <button className="bg-[#F5F8FA] text-[#7E8299] px-3 py-1 md:px-4 md:py-2 rounded-md">
                            Follow
                        </button>
                        <button className="bg-primary text-white px-3 py-1 md:px-4 md:py-2 rounded-md">
                            Offer a Deal
                        </button>
                    </div>
                </div>

                {/* User Stats */}
                <div className="flex  flex-col md:flex-row justify-between items-start md:items-center gap-[20px] mt-[20px]">
                    <div className="flex gap-[10px] md:gap-[20px]  md:w-auto">
                        <StatCard value={earnings} label="Total Earnings" />
                        <StatCard value={referrals} label="New Referrals" />
                        <StatCard value={deals} label="New Deals" />
                    </div>
                    <div className="flex flex-col w-full md:max-w-[300px] gap-[10px]">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[14px] font-medium text-[#B5B5C3]">Profile Status</h2>
                            <h2 className="text-[14px] font-semibold text-[#000]">68%</h2>
                        </div>
                        <div className="w-full bg-[#EBEDF3] h-[5px] rounded-[30px]">
                            <div className="bg-primary w-2/3 h-full rounded-[30px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full bg-[#EBEDF3] my-[20px] h-[1px] rounded-[30px]"></div>

        {/* <div className="bg-white  w-full mx-auto h-full py-[10px] text-[#80808F]"></div> */}

        <div className="  px-[8px] sm:px-6 lg:px-8 flex lg:gap-[10px] overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabNames.map((item, index) => (
                <button
                    key={item}
                    className={`pb-6 px-4 text-sm  font-[600] ${activeTab === index
                            ? "text-primary border-b-[2px] border-b-primary "
                            : "hover:text-blue-400 text-[#A1A5B7] "
                        }`}
                  onClick={() => setActiveTab && setActiveTab(index)}
                >
                    {item}
                </button>
            ))}
        </div>



    </div>)
};


const Hero = () => {
    const { activeTab, setActiveTab } = useContext(TabContext)!;


    const user = {
        name: 'Brad Dennis',
        jobTitle: 'UX Designer',
        location: 'Westwood, NJ',
        email: 'sales@kthemes.io',
        earnings: '$6,840',
        referrals: 179,
        deals: 39,
    };

    return (
        <div className="p-[5px]">
            <main>
                {/* Breadcrumb Section */}
                <div className="flex flex-col px-2  md:flex-row justify-between items-start md:items-center gap-[10px] md:gap-[20px] mb-[10px]">
                    <div>
                        <h1 className="text-[20px] font-bold text-[#181C32]">{tabNames[activeTab]}</h1>
                        <Breadcrumb activeTab={activeTab} activeTabName={tabNames[activeTab]} items={tabNames} />
                    </div>
                    <button className="bg-[#1DC894] text-white px-4 py-2 rounded-md">Start Project</button>
                </div>

                {/* User Info Section */}
                <UserInfoCard {...user} activeTab={activeTab} setActiveTab={setActiveTab} />

            </main>
        </div>
    );
};

export default Hero;
