'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from "./ui/animated-tooltip";
function Instructors() {
const people = [
  {
    id: 1,
    name: "Hamzah Sayed",
    designation: "Project manager",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQExPLCpwZM5sA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1661721928166?e=1731542400&v=beta&t=ctw6fJwE23Vovx7Nw7t_HnHNTXXubYv1eRpvB3PT5zU",
  },
  {
    id: 2,
    name: "Tehseen Ali",
    designation: "Full stack developer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFNUNl6awF_ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712153953115?e=1731542400&v=beta&t=Q6lkbWZ_qbekNT9pP7qOt3MEhtDU9RdP0ZK9VdeQNE8",
  },
  {
    id: 3,
    name: "Kinza Khan",
    designation: "UX/UI designer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGWSkio_UqAWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720287741279?e=1731542400&v=beta&t=QfzIr7uTQ2mlbxIftPxFNxV8PIjVRh3PJZ7nxzyx1Nc",
  },
  {
    id: 4,
    name: "Muhammad Ubaid",
    designation: " front-end developer",
    image:
    "https://media.licdn.com/dms/image/v2/D4D03AQG8NCIBlYZPgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721313235500?e=1731542400&v=beta&t=yM8uocpQzQoNsoSHzQf9IkYeNATuMUTbiFwQeiV7omM",
  },
  {
    id: 5,
    name: "Arfin Nasir",
    designation: "The Explorer",
    image:
    "https://media.licdn.com/dms/image/v2/D4E03AQFG2LS_NiJrSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713327185859?e=1731542400&v=beta&t=b59R0mZqA_7siIhtc28D9tTWMgvOoJlzHKtSP1UgP4M",
  },
  {
    id: 6,
    name: "Muhammad ibad",
    designation: "Back-end developer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFQbFYjkeCLPw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719028466152?e=1731542400&v=beta&t=1jCqg3kNd-dg8R27BOaVGsr8zTuYxdyCwOUlhRLEzo4",
  },
];
return (
  <div className='relative h-[30rem] overflow-hidden flex items-center justify-center'>

<WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>

<h2 className=' text-2xl md:text-4xl lg:text-7xl text-white font-semibold text-center mb-8'>Meet Our Instructors</h2>
<p className=' text-base md:text-xl text-white text-center mb-4 font-sans font-light'>Discover the talented professionals who will guide your tech journey</p>
<div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
</WavyBackground>

    </div>
  )
}

export default Instructors