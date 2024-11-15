'use client'

import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 flex flex-col lg:flex-row">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="flex justify-center">
            <Image
              src="/authlogo.png"
              alt="logo"
              width={250}
              height={82}
              className="h-auto white"
            />
          </div>

          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">This is a place where you can store all your documents</p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={300}
            height={300}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col bg-white">
        <div className="flex h-20 justify-center items-center lg:hidden">
          <Image
            src="/newlogo.png"
            alt="logo"
            width={260}
            height={100}
            className="h-auto mt-20 w-[200px] lg:w-[250px]"
          />
        </div>

        <div className="flex-1  flex items-center justify-center px-8 lg:px-16 xl:px-20">
          <div className="w-full max-w-[400px] space-y-6  p-6 sm:p-8">
            <div className="flex justify-center">
              <Image
                src="/authlogo.png"
                alt="logo"
                width={150}
                height={49}
                className="h-auto  white"
              />
            </div>
            {children}
          </div>
        </div>
      </section>

      <style jsx global>{`
        body {
          overflow: hidden;
        }
        
        @media (max-width: 767px) {
          .h1 {
            font-size: 1.75rem;
          }
          .body-1 {
            font-size: 0.875rem;
          }
          .shadow-md {
            box-shadow: none;
          }
          ::-webkit-scrollbar {
            display: none;
          }
          * {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;