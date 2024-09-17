"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import course from "@/app/data/courses.json"
import Footer from "../components/footer";
export default function ThreeDCardDemo() {
    type courseType = {
        id: number,
        tital: string,
        description: string,
        price: string | number,
        instructor: string,
        isFeatured: boolean,
        isAvailible: boolean,
        image:string
        moreInfo:string
    }

    const upcomingCourses = course.courses.filter((course: courseType) => course.isAvailible==false)
    const availibleCourses = course.courses.filter((course: courseType) => course.isAvailible)
  return (
    <div>
   <div className="min-h-screen bg-black py-12">
    <h2 className="text-white text-4xl md:text-7xl text-center font-sans font-semibold mb-8 mt-14">Availible courses</h2>
    <div className="flex flex-wrap justify-center"> {availibleCourses.map((course:courseType)=>(
      <CardContainer className="inter-var" key={course.id}>
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-white/[0.1] bg-black border-white/[0.2] max-w-[400px] sm:w-[30rem] w-[20rem] h-auto rounded-xl p-6 border mx-2 ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
       {course.tital}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 font-sans text-neutral-300"
        >
         {course.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={course.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Enroll now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
          >
            {course.price}/month
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    ))}</div>
    <h2 className="text-white text-4xl md:text-7xl text-center font-sans font-semibold mb-8 mt-14">upcoming courses</h2>
     <div className="flex flex-wrap justify-center"> {upcomingCourses.map((course:courseType)=>(
      <CardContainer className="inter-var" key={course.id}>
      <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-white/[0.1] border-white/[0.2] max-w-[400px] sm:w-[30rem] w-[20rem] h-auto rounded-xl p-6 border mx-2 ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
       {course.tital}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 font-sans text-neutral-300"
        >
         {course.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={course.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Enroll now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
          >
            {course.price}/month
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    ))}</div>

   </div>
   <Footer/>
   </div>
  );
}
