'use client'


import React from "react";
import Image from "next/image";

interface CardProps {
  userImage: string;
  username: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  postImage?: string;
  replies?: { userImage: string; username: string; time: string; replyText: string }[];
}

const Card: React.FC<CardProps> = ({
  userImage,
  username,
  time,
  content,
  likes,
  comments,
  postImage,
  replies,
}) => {
  return (
   <div>
        <div className="bg-white w-full  lg:max-w-[545px]  min-h-[242px] rounded-[12px] p-[30px] mt-[20px]">
        <div className="justify-between  flex items-center">
            <div className="flex gap-3 items-center">
            <Image src={userImage} alt={username} width={46} height={46} />
            <div>
                <h2 className="text-[14px] font-[600]">{username}</h2>
                <p className="text-[13px] text-gray-400">{time}</p>
            </div>
            </div>
            <Image src="/tabs/campaigns/Dropdown.png" alt="dropdown" width={11} height={11} />
        </div>
        {postImage && (
            <div className="py-[15px] rounded-md">
            <Image src={postImage} alt="post" width={485} height={260} className="rounded-md" />
            </div>
        )}
        <div className="py-[10px]">
            <p className="text-[14px] text-gray-600 font-[400]">{content}</p>
        </div>
        <div className="flex justify-start pt-[10px] gap-[25px]">
            <div className="flex gap-[8px]">
            <Image src="/tabs/overview/o2.png" alt="likes" width={11} height={11} />
            <p className="text-[13px] text-gray-500">{likes}</p>
            </div>
            <div className="flex gap-[8px]">
            <Image src="/tabs/overview/Heart.png" alt="comments" width={21} height={21} />
            <p className="text-[13px] text-gray-500">{comments}</p>
            </div>
        </div>
        {replies && (
            <div className="pt-[20px]">
            {replies.map((reply, index) => (
                <div key={index} className="flex gap-3 items-start pt-[20px]">
                <Image
                    src={reply.userImage}
                    alt={reply.username}
                    width={42}
                    height={42}
                    className="rounded-[10px]"
                />
                <div className="w-full">
                    <div className="flex justify-between items-center">
                    <div className="flex gap-[10px] items-center">
                        <h2 className="text-[14px] font-[600]">{reply.username}</h2>
                        <p className="text-[13px] text-gray-400">{reply.time}</p>
                    </div>
                    <p className="text-[13px] text-gray-400">Reply</p>
                    </div>
                    <p className="text-[13px] text-gray-500">{reply.replyText}</p>
                </div>
                </div>
            ))}
            </div>
        )}
        <div className="w-full bg-[#EBEDF3] my-[10px] h-[1px] rounded-[30px]"></div>
        <div className="flex justify-between items-center">
            <h1 className="text-[12px] text-gray-500">Reply...</h1>
            <div className="flex gap-[20px] items-center">
            <Image src="/tabs/overview/clip.png" alt="clip" width={19} height={19} />
            <Image src="/tabs/overview/marker.png" alt="marker" width={19} height={19} />
            </div>
        </div>
        </div>
   </div>
  );
};

export default Card;
