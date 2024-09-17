import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-neutral-300 pt-10 pb-4 border-t-[1px] border-blue-950'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-x-24 lg:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-10 '>
  
        <div>
            <h2 className='mb-1 sm:mb-2 md:mb-3 text-white text-xl md:text-2xl lg:text-3xl font-sans font-semibold '> About Us</h2>
            <p className='font-sans '>we are dedicated to providing cutting-edge technical education to help you thrive in the ever-evolving world of technology. Whether you are a beginner or looking to enhance your skills, we empower you to build a strong foundation and unlock new opportunities in the tech industry.</p>
            
        </div>
        <div>
            <h2 className='mb-1 sm:mb-2 md:mb-3 text-white text-xl md:text-2xl lg:text-3xl font-sans font-semibold '> Quick Links</h2>
            <p className='font-sans hover:text-neutral-400 cursor-pointer md:text-xl text-base'>
               <Link href={"/"}>Home</Link> </p>
            <p className='font-sans hover:text-neutral-400 cursor-pointer md:text-xl text-base'>
               <Link href={"/ourCourses"}>Courses</Link> </p>
            <p className='font-sans hover:text-neutral-400 cursor-pointer md:text-xl text-base'>
               <Link href={"contact"}>Contact</Link> </p>
           
        </div>
        <div>
            <h2 className='mb-1 sm:mb-2 md:mb-3 text-white text-xl md:text-2xl lg:text-3xl font-sans font-semibold '> Follow Us</h2>
            <p className='font-sans hover:text-neutral-400 cursor-pointer md:text-xl text-base'>
               <Link href={"https://www.linkedin.com/in/tehseenali867/"}>LinkedIn</Link> </p>
            <p className='font-sans hover:text-neutral-400 cursor-pointer md:text-xl text-base'>
               <Link href={"https://www.facebook.com/profile.php?id=100090826068973"}>Facebook</Link> </p>
            <p className='font-sans hover:text-neutral-400 cursor-pointer md:text-xl text-base'>
               <Link href={"https://x.com/ali_tehsee502?t=jM9D12tJbHpim5Ap5NoWKQ&s=09"}>X (Twiter)</Link> </p>
            <p className='font-sans hover:text-neutral-400 cursor-pointer md:text-xl text-base'>
               <Link href={"https://www.instagram.com/princebaloch09/"}>Instagram</Link> </p>
        </div>
        <div>
            <h2 className='mb-1 sm:mb-2 md:mb-3 text-white text-xl md:text-2xl lg:text-3xl  font-sans font-semibold '> Contact Us</h2>
            <p className='font-sans md:text-xl text-base'><strong>Address:</strong> Gulistan-e-jauhar Block 3 near munawer chawrangi karachi  </p>
            <br />
            <p className='font-sans md:text-xl text-base'><strong>Email:</strong> princebaloch867@gmail.com</p>
            <br />
            <p className='font-sans md:text-xl text-base'><strong>phone:</strong> +923282621386</p>
        </div>
        </div>
        <p className='font-sans text-neutral-400 pt-6 text-xs sm:text-sm flex justify-center'>@2024 tech website. All rights reserved</p>
    </footer>
  )
}

export default Footer