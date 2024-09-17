'use client'
import React from 'react'
import { Spark } from './sparkSection'
import { HoverEffect } from './ui/card-hover-effect';
import { LongSpark } from './longSpark';
import course from "@/app/data/courses.json"
import { SparkMob1 } from './sparkMob1';
import { SparkMob2 } from './sparkMob2';
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
function UpcomingCourses() {
  const upcommingCourses = course.courses.filter((course: courseType) => (course.isAvailible==false))
  return (
    <div className='bg-black py-12'>
            <div>
                <div className='text-center'>
                <LongSpark/>
                <SparkMob1/>
                    <h2 className='sm:text-5xl text-4xl flex justify-center text-center font-semibold my-3  bg-gradient-to-b from-neutral-100 to-neutral-900 bg-clip-text text-transparent'>Upcoming courses</h2>
                    <Spark/>
                    <SparkMob2/>
                </div>
            </div>
          <div className='my-10'>
              <HoverEffect items={upcommingCourses} />   
                  
            </div>
            <LongSpark/>

        </div>
  )
}

export default UpcomingCourses