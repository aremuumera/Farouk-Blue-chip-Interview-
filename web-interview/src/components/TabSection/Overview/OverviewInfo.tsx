'use client'

import Image from "next/image";
import React from "react";

const OverviewInfo = () => {
  const projectData = [
    {
      image: "/tabs/projects/PL1.png",
      title: "Piper Aerostar",
      description: "piper-aircraft-class.jsp",
      statusCount: 0,
    },
    {
      image: "/tabs/projects/PL2.png",
      title: "Cirrus SR22",
      description: "cirrus-aircraft.jsp",
      statusCount: 3,
    },
    {
      image: "/tabs/projects/PL3.png",
      title: "Beachcraft Baron",
      description: "baron-class.pyt",
      statusCount: 0,
    },
    {
      image: "/tabs/projects/PL4.png",
      title: "Cessna SF150",
      description: "cessna-aircraft-class.jsp",
      statusCount: 0,
    },
  ];

  return (
    <div>
      <div>
        <Image src={"/tabs/overview/Deals.png"} alt="overview" width={11} height={332} />
      </div>
      <div>
        <div className="bg-white rounded-[10px] p-[30px]">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-[700] text-[20px]">Projects Contributions</h2>
              <p className="text-[700] text-[14px] text-gray-400">84 New Tasks & 29 Guides</p>
            </div>
            <Image src={"/tabs/campaigns/Dropdown.png"} alt="overview" width={11} height={11} />
          </div>
          {/* Render Project Items */}
          {projectData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
          {/* Call to Action Section */}
          <div className="w-full rounded-[8px] p-[19px] mt-[20px]  border-dashed border-primary border-[2px] bg-[#F1FAFF]">
            <span className="!text-primary">
              <span className="text-[16px] font-[700]">Intive New .NET Collaborators</span>
            </span>
            <span className="pl-[5px] text-gray-400">
              to creating great outstanding business-to-business .jsp modular class scripts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewInfo;








interface ProjectItemProps {
    image: string;
    title: string;
    description: string;
    statusCount: number;
  }
  
  const ProjectItem: React.FC<ProjectItemProps> = ({ image, title, description, statusCount }) => {
    const isHighlighted = statusCount > 0;
    return (
      <div className="flex pt-[20px] justify-between items-center">
        <div className="flex gap-[15px]">
          <Image src={image} alt={title} width={36} height={36} />
          <div>
            <h2 className="font-[700] text-[15px]">{title}</h2>
            <p className="text-[700] text-[13px] text-gray-400">{description}</p>
          </div>
        </div>
        <p
          className={`text-[12px] font-[700] h-[24px] w-[24px] pt-[3] text-center rounded-sm ${
            isHighlighted ? "text-gray-100 bg-primary" : "text-gray-400 bg-[#F5F8FA]"
          }`}
        >
          {statusCount}
        </p>
      </div>
    );
  };