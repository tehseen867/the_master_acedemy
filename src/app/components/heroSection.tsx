"use client"
import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {

  return (
    <>
      <div className='text-white h-auto  w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10'>

        <Spotlight
          className="top-40 left-0 md:left-60 md:-top-20"
          fill="blue"
        />
        
        <div className='p-4 relative z-10 w-full text-center'>

          <h1 className='sm:mt-32 mt-10 sm:text-7xl text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-700 to-purple-900'>Master the art of tech</h1>

          <p className='mt-5 text-lg text-neutral-300 max-w-xl mx-auto font-sans font-light'>Unlock your potential with our expert-led technical courses in graphic design, web development, and more. Join us today and take the first step towards mastering the future of technology!</p>

          <div className='mt-14 relative z-10 w-full text-center'>
             <Link href={"/joinUs"}><Button 
              borderRadius="1.75rem"
              className="bg-black text-white  border-slate-800 font-sans font-light ">
              Join Us
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )}


export default HeroSection