import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SplitLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<SplitLayoutProps> = ({ children }) => {
  return (
    <div className="grid  min-h-screen grid-cols-1 lg:grid-cols-[1fr_900px]">
      {/* Left Side */}
      <div className="hidden text-white lg:flex flex-col items-center justify-start bg-primary pt-[120px] px-6 flex-grow">
        <div className="space-y-6 relative flex flex-col justify-between max-w-3xl">
          <div className="space-y-2">
            <div className="flex justify-center items-center">
            <Link href="/">
              <Image
                src={'/Logo.png'}
                alt=''
                width={78}
                height={56}
              />
            </Link>
            </div>
            <h1 className="text-[30px] font-[700] text-center">Welcome to <br />
              Bluechip Technologies LTD</h1>
            <p className="text-center text-[22px] font-[500]">
              Plan your blog post by choosing a topic, creating
              an outline, and checking facts.
            </p>
          </div>
          <div className="flex gap-[200px] justify-center items-end mt-auto">
              <Image
                src={'/authImage.png'}
                alt=''
                width={470}
                height={470}
              />
           
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="shadow-md flex flex-col">
        <div className="flex flex-1 flex-col items-center justify-center p-6">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
