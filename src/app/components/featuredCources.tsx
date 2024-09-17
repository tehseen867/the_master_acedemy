"use client"
import React from 'react'
import course from "@/app/data/courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import { Spark } from './sparkSection'
import { LongSpark } from './longSpark'
import { SparkMob1 } from './sparkMob1'
import { SparkMob2 } from './sparkMob2'

function FeaturedCources() {
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

    const featuredCourses = course.courses.filter((course: courseType) => course.isFeatured)
    return (
        <div className='bg-black py-12'>
            <div>
                <div className='text-center'>
                <LongSpark/>
                <SparkMob1/>
                
                    <p className='sm:text-5xl text-4xl font-semibold my-3  bg-gradient-to-b from-neutral-100 to-neutral-900 bg-clip-text text-transparent'>Featured cources</p>
                    <Spark/>
                    <SparkMob2/>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 mx-2 justify-center'>
                    {featuredCourses.map((course: courseType) => (<div key={course.id} className='flex justify-center'>
                        <BackgroundGradient className='flex flex-col rounded-[22px] bg-black overflow-hidden h-full max-w-sm'><div>
                            <div className='p-4 flex flex-col items-center text-center flex-grow'>
                                <p className='text-2xl font-bold font-sans  bg-gradient-to-b from-blue-400 to-blue-900 bg-clip-text text-transparent mb-2'>{course.tital}</p>
                                <p className='text-white/[0.9] font-sans font-light'>{course.description}</p>
                                <Link href={course.moreInfo} className='cursor-pointer text-blue-800 text-lg decoration-solid mt-1 font-extralight font-sans'>learn more</Link>
                            </div></div>
                        </BackgroundGradient>

                    </div>


                    ))}
                </div>
            </div>
            <div className='text-xl text-white flex justify-center my-10'>

                <Link href={"/ourCourses"} className="bg-black text-white text-[17px] border-slate-600 border-[1px] rounded-full px-3 py-2 font-sans font-light shadow-gray-500 shadow hover:text-gray-400">

                    View all courses

                </Link>
            </div>
        </div>
    )
}

export default FeaturedCources