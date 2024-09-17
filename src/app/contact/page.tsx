"use client"
import React from "react";
import { Meteors } from "@/app/components/ui/meteors";
import Swal from 'sweetalert2'
import Footer from "../components/footer";

export default function Contact() {
  async function handleSend(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem('name') as HTMLInputElement;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    const phoneNumber = form.elements.namedItem('Phone_number') as HTMLInputElement;
    const message = form.elements.namedItem('message') as HTMLTextAreaElement;


    let isValid = true;
const nameRegex = /\d/
    if (nameRegex.test(name.value)) {
        name.style.border = "1px solid red";
        isValid = false;
    } else {
        name.style.border = ""; 
    }
    if (message.value.trim()=="") {
        message.style.border = "1px solid red";
        isValid = false;
    } else {
        message.style.border = ""; 
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) { 
        email.style.border = "1px solid red";
        isValid = false;
    } else {
        email.style.border = "";
    }

    if (isNaN(Number(phoneNumber.value)) || phoneNumber.value.length < 10 ) {
        phoneNumber.style.border = "1px solid red";
        isValid = false;
    } else {
        phoneNumber.style.border = "";
    }
    if (!isValid) {
      Swal.fire({
          title: "Error",
          text: "Please fill in all fields correctly.",
          icon: "error"
      });
      return;
  }
else{
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            "access_key": "95cefb2c-b7f4-407f-bcff-ad7c91f1669f",
            "name":name.value,
            "email":email.value,
            "phone number":phoneNumber.value,
            "message":message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successully!",
        icon: "success"
      });
    }
    (e.target as HTMLFormElement).reset();
}
}
  return (
    <div>
      
      <div className=" h-screen  relative w-full">
        <div className="relative shadow-xl bg-black border border-gray-800 px-4 py-8 h-full  flex flex-col  items-center justify-center  "> 

   <form onSubmit={handleSend} method="post" className="md:w-96 w-80 max-w-96 h-auto bg-gray-950 border border-gray-500 shadow-md shadow-gray-800 rounded-lg p-6 mt-20 ">

    <div className="grid grid-cols-1">
            <input type="text" name="name" id="name" required placeholder="Full name" className="bg-transparent border border-gray-500 rounded-lg text-white py-[2px] px-1 text-lg w-auto placeholder:font-sans placeholder:font-light font-sans font-light my-3 " />

            <input type="email" required name="email" id="email" placeholder="Email" className="bg-transparent border border-gray-500 rounded-lg text-white p-[2px] px-1 text-lg w-auto placeholder:font-sans placeholder:font-light font-sans font-light my-3 " />

            <input type="text" required name="Phone_number" id="Phone_number" placeholder="Phone number" className="bg-transparent border border-gray-500 rounded-lg text-white p-[2px] px-1 text-lg w-auto placeholder:font-sans placeholder:font-light font-sans font-light my-3 " />

        <textarea name="message" required id="message" aria-required  placeholder=" Type your message here" className="bg-transparent border border-gray-500 rounded-lg text-white p-[2px] px-1 text-lg w-auto h-32 placeholder:font-sans placeholder:font-light font-sans font-light mb-3 mt-10 "></textarea>
            </div>
            <button  className="bg-gray-950  rounded-full border border-gray-500 pb-1 text-white font-sans text-2xl shadow-gray-500 shadow hover:text-gray-400 px-3 mt-3 ">send</button>
   </form>
 
       

        
          
          
          {/* Meaty part - Meteor effect */}
          <Meteors number={25} className="md:block hidden" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
