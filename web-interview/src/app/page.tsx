// 'use client'
import Header from "@/components/Header/header";
import Hero from "@/components/Hero/Hero";
import TabSection from "@/components/TabSection";


export default function Home() {


  return (
    <div className="min-h-screen bg-mainBg ">
      <Header />
      <main className="w-full max-w-[1120px] px-[5px] py-[10px] mx-auto">
        <Hero />
        <TabSection />
      </main>
    </div>
  );
}
