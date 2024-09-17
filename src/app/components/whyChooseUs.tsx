"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { Spark } from "./sparkSection";
import { LongSpark } from "./longSpark";
import { SparkMob1 } from "./sparkMob1";
import { SparkMob2 } from "./sparkMob2";

function WhyChooseUs() {
  
    const content = [
        {
          title: "Expert-Led Training",
          description:
            " Our courses are taught by industry professionals with real-world experience, ensuring that you learn the latest skills and best practices directly from experts.",
            content: (
                <div className="h-full w-full  flex items-center justify-center rounded-full">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1705267935916-294dfd89c4bb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                   className="h-full w-full object-cover "
                    alt="linear board demo"
                   
                  />
                </div>
              ),
        },
        {
          title: "Hands-On Projects",
          description:
            "We focus on practical learning by incorporating real-world projects and case studies, allowing you to build a portfolio that showcases your skills to potential employers or clients.",
          content: (
            <div className="h-full w-full  flex items-center justify-center rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={300}
                height={300}
             className="h-full w-full object-cover "
                    alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Comprehensive Support",
          description:
            "We offer personalized guidance, one-on-one mentoring, and dedicated support throughout the course to ensure you succeed at every step of your learning journey.",
            content: (
                <div className="h-full w-full  flex items-center justify-center rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
               className="h-full w-full object-cover "
                    alt="linear board demo"
                  />
                </div>
              ),
        },
        {
          title: "Career-Focused Outcomes",
          description:
            "Our curriculum is designed to prepare you for high-demand tech jobs. We provide career counseling, resume-building workshops, and interview prep to help you land your dream role.",
            content: (
                <div className="h-full w-full  flex items-center justify-center rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                   className="h-full w-full object-cover "
                    alt="linear board demo"
                  />
                </div>
              ),
        },
      ];
  return (
    <div>   
      <LongSpark/>
      <SparkMob1/>
<h2 className='sm:text-5xl text-4xl  font-semibold  bg-gradient-to-b from-neutral-100 to-neutral-900 bg-clip-text text-transparent flex justify-center my-3 text-center'>Why choose us?</h2>
<Spark/>
<SparkMob2/>
    <div className="p-3 sm:p-5 md:p-7 my-6">
      <StickyScroll content={content} />
    </div>
    </div> 
  );
}
export default WhyChooseUs