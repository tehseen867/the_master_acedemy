
"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Spark } from "./sparkSection";
import { LongSpark } from "./longSpark";
import { SparkMob1 } from "./sparkMob1";
import { SparkMob2 } from "./sparkMob2";
const testimonials = [
  {
    nameOfStudent: "Ahmed Khan",
    studentWords:
      "“The Web Development course at this institute completely transformed my career. The instructors were always available to guide me, and the real-world projects gave me the confidence to work on freelance gigs even before finishing the course!”",
      currentJob:'Freelancer'
  },
  {
    nameOfStudent: "Sara Malik",
    studentWords:
      "“I had no prior experience in graphic design, but the step-by-step approach of this course helped me grasp everything easily. Now, I have launched my own design business and have several clients! Couldn't have done it without this program.”",
  },
  {
    nameOfStudent: "Zainab Ali",
    studentWords:
      "“The Full-Stack Development course was challenging, but it was worth every minute. I landed a job as a full-stack developer right after graduation. The support from the instructors and career services made all the difference.”"
  },
  {
    nameOfStudent: "Omar Farooq",
    studentWords:
      "“What I loved about this program was the hands-on experience. I built projects that I can actually showcase in my portfolio, and that's what helped me land my first job as a front-end developer.”"
  },
  {
    nameOfStudent: "Hiba Qureshi",
    studentWords:
      "“The Python programming course was fantastic! The instructors were knowledgeable and patient, and the curriculum was designed to ensure we understood everything before moving forward. I’m now working as a junior developer thanks to this course.”"
  },
  {
    nameOfStudent: "Usman Shah",
    studentWords:
      "“I enrolled in the Cloud Computing course and couldn't be happier with my decision. The course was comprehensive, and the instructors were true experts in the field. I now have a deep understanding of cloud technologies and landed a great position in the IT industry.”"
  },

];
function ScrollingCards() {
  return (
    <div>
      <SparkMob1/>
     <LongSpark/>
<h2 className='sm:text-5xl text-4xl font-semibold my-3 bg-gradient-to-b from-neutral-100 to-neutral-900 bg-clip-text text-transparent flex justify-center text-center'>Our Students’ Journey</h2>
<Spark/>
<SparkMob2/>


    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>


        </div>
  )
}

export default ScrollingCards