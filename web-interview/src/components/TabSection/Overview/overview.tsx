'use client'

import React, { useState } from "react";
import Card from "./PostCard";
import { cardsData } from "@/utils/constant";
import OverviewInfo from "./OverviewInfo";
import ProInfo from "./ProInfo";
import Image from "next/image";
import { X } from "lucide-react";
import Chart from "./charts";

const Overview = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row lg:gap-[40px]">
      {/* Posts Section */}
      <div className="flex-1">
        {cardsData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
        <div className="w-full lg:max-w-[545px]">
          <button className="bg-primary w-full mt-[30px] py-[10px] text-white rounded-[10px]">
            More Feeds
          </button>
        </div>
      </div>

      {/* Pro Container */}
      <div className="hidden pt-6 lg:block w-full max-w-[550px]">
        <div>
          <Chart />
          {/* <Image src={"/tabs/overview/Deals.png"} alt="overview" width={545} height={332} /> */}
        </div>
        <OverviewInfo />
        <ProInfo />
      </div>

      <div className="lg:hidden fixed bottom-4 right-4">
        <button
          onClick={handleModalToggle}
          className="bg-primary py-2 px-4 text-white rounded-full shadow-lg"
        >
          View Pro
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-200 w-11/12 max-w-[550px] p-2 rounded-lg overflow-auto max-h-[90vh]">
            <button
              onClick={handleModalToggle}
              className="absolute top-10 right-4 text-gray-600 text-lg font-bold"
            >
              <X className="text-black" />
            </button>
            <div>
              <Chart />
              {/* <Image src={"/tabs/overview/Deals.png"} alt="overview" width={545} height={332} /> */}
            </div>
            <OverviewInfo />
            <ProInfo />
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
