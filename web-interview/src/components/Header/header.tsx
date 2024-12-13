"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustifyIcon, X } from "lucide-react";

const topNavItems = [
  { name: "Account", href: "/" },
  { name: "Reports", href: "/" },
  { name: "Forms", href: "/" },
  { name: "Roles", href: "/" },
  { name: "Help Center", href: "/" },
];

const topNavItems2 = [
  { imageUrl: "/header/chart.png", href: "/" },
  { imageUrl: "/header/blocks.png", href: "/" },
  { imageUrl: "/header/Equalizer.png", href: "/" },
  { imageUrl: "/header/chat.png", href: "/" },
];

const bottomNavItems = [
  "Settings",
  "Billing",
  "Orders",
  "Security",
  "Referrals",
  "API Keys",
  "Statement",
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [activeTopIndex, setActiveTopIndex] = useState(0);
  const [activeBottomIndex, setActiveBottomIndex] = useState(0);

  return (
    <header >
      
      <div className="fixed top-0 left-0 w-full z-50  bg-primary">
        <div className="w-full max-w-[1120px]  mx-auto">
            {/* Top Navigation */}
            <div className="flex justify-between pt-[15px] items-center px-4 sm:px-6 lg:px-8 h-[72px]">
                <div className="flex justify-center items-center gap-[20px]">
                    {/* Logo */}
                    <div className="">
                    <Link href={"/"}>
                        <Image
                        src={"/header/Logowhite.png"}
                        alt="blue chip white logo"
                        width={64}
                        height={56}
                        />
                    </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-[26px]">
                    {topNavItems.map((item, index) => (
                        <Link
                        key={`${item.name}}-${index}`}
                        href={item.href}
                        className={`pt-[8px] relative  transition-all duration-300 ${
                            activeTopIndex === index
                            ? "text-black bg-white h-[58px] px-[15px] transform scale-105 inverted-border-radius w-[140px] flex justify-center  rounded-t-[15px] rounded-b-[3px] "
                            : "text-[#C8E3FF]  hover:text-blue-300  "
                        }`}
                        >
                        <h2
                            className={` py-2 text-[16px]  font-[600] `}
                            onClick={() => setActiveTopIndex(index)}
                        >
                            {item.name}
                            {activeTopIndex === index && (
                            <div>
                                {/* <span
                            className="absolute -bottom-[10px] px-[30px] z-[111000] -ml-[5px] w-[150px] mx-auto left-0 rotate-180   h-[20px] bg-[white] rounded-[45px]"
                            > </span>   */}
                            </div>
                            )}
                        </h2>
                        </Link>
                    ))}
                    </nav>
                </div>

                <div>
                    <div className="lg:flex hidden justify-center items-center gap-[20px]">
                    <div className="flex justify-center items-center gap-[20px]">
                        {topNavItems2.map((item, i) => (
                        <Link key={i} href={item.href}>
                            <Image
                            src={item.imageUrl}
                            alt="blue chip white logo"
                            width={24}
                            height={25}
                            />
                        </Link>
                        ))}
                    </div>
                    <div>
                        <button
                        className="text-white flex justify-center items-center gap-[12px]"
                        // onClick={() => setMenuOpen(!isMenuOpen)}
                        >
                        <div className="text-right">
                            <h2 className="text-accent1 text-[12px] font-[600]">
                            Sean
                            </h2>
                            <h2 className="text-white text-[12px] font-[600]">
                            UX Designer
                            </h2>
                        </div>
                        <h2 className="w-[40px] bg-accent1 text-center pt-[6px] h-[40px] rounded-[6px] font-[600] text-[18px]">
                            S
                        </h2>
                        </button>
                    </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex items-center text-white"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    <AlignJustifyIcon size={24} />
                    {/* <span className="material-icons">menu</span> */}
                </button>
            </div>
        </div>
      </div>



      {/* Bottom Subnavigation */}
      <div className="bg-white mt-[80px]  w-full mx-auto h-full py-[20px] scrollHide  text-[#80808F]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex lg:gap-[10px] overflow-x-auto whitespace-nowrap scrollbar-hide">
          {bottomNavItems.map((item, index) => (
            <button
              key={item}
              className={`py-2 px-4 text-sm  font-[600] ${
                activeBottomIndex === index
                  ? "text-primary rounded-[5px] bg-[#F5F8FA] "
                  : "hover:text-blue-400"
              }`}
              onClick={() => setActiveBottomIndex(index)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>



      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-primary text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="font-bold text-lg">
          <div className="">
             <Link href={"/"}>
              <Image
              src={"/header/Logowhite.png"}
              alt="blue chip white logo"
              width={64}
              height={56}
              />
             </Link>
          </div>
            </span>
          <button className="text-white" onClick={() => setMenuOpen(false)}>
            <span className="material-icons">
              <X />{" "}
            </span>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {topNavItems.map((item, index) => (
            <Link key={item.name} href={item.href}>
              <div
                className={`block  p-[10px] hover:bg-[#f1faff77] hover:text-white rounded-md text-lg font-medium ${
                  activeTopIndex === index
                    ? "text-white bg-[#f1faff77]"
                    : "hover:text-blue-300"
                }`}
                onClick={() => {
                  setActiveTopIndex(index);
                  setMenuOpen(false); // Close menu on click
                }}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
