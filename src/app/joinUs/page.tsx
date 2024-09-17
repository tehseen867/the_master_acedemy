"use client"
import React, { useState } from 'react'
import course from "@/app/data/courses.json"
import Swal from 'sweetalert2'
function Page() {
    type courseType = {
        id: number,
        tital: string,
        description: string,
        price: string | number,
        instructor: string,
        isFeatured: boolean,
        isAvailible: boolean,
        image: string
        moreInfo: string
    }
    const availibleCourses = course.courses.filter((course: courseType) => course.isAvailible)
    const [paymentMethod, setpaymentMethod] = useState('')
    const [accountNumber, setaccountNumber] = useState('')
    function giveNumber(e: React.ChangeEvent<HTMLSelectElement>) {
        const payment = e.target.value
        setpaymentMethod(payment)

        if (payment == 'easypaisa' || payment == 'jazzcash') {
            setaccountNumber('923282621386')
        }
        else {
            setaccountNumber('HBL-012039448772666')
        }
    }


    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.namedItem('fullname') as HTMLInputElement;
        const gender= form.elements.namedItem('gender')as HTMLInputElement
        const dateOfbirth=form.elements.namedItem('dateOfBirth') as HTMLInputElement
        const email = form.elements.namedItem('email') as HTMLInputElement;
        const address= form.elements.namedItem('address')as HTMLInputElement;
        const phoneNumber = form.elements.namedItem('phoneNumber') as HTMLInputElement;
        const institute_school_name = form.elements.namedItem('instituteName') as HTMLInputElement;
        const id_card = form.elements.namedItem('idCard') as HTMLInputElement
        const course= form.elements.namedItem('course') as HTMLInputElement
        const related_to_this_field= form.elements.namedItem('relatedToThisField') as HTMLInputElement;
        const education = form.elements.namedItem('education') as HTMLInputElement;
        const pic= form.elements.namedItem('pic') as HTMLInputElement;
        let isValid = true;

        const nameRegex = /\d/
        if (nameRegex.test(name.value)) {
            name.style.border = "1px solid red";
            isValid = false;
        } else {
            name.style.border = "";
        }


        if (!/\S+@\S+\.\S+/.test(email.value)) {
            email.style.border = "1px solid red";
            isValid = false;
        } else {
            email.style.border = "";
        }


        if (isNaN(Number(phoneNumber.value)) || phoneNumber.value.length < 10) {
            phoneNumber.style.border = "1px solid red";
            isValid = false;
        } else {
            phoneNumber.style.border = "";
        }

        const instituteNameRegex = /\d/
        if (instituteNameRegex.test(institute_school_name.value)) {
            name.style.border = "1px solid red";
            isValid = false;
        } else {
            name.style.border = "";
        }


        const idregex = /^[0-9-]+$/;
        if (!idregex.test(id_card.value)) {
            id_card.style.border = "1px solid red";
            isValid = false;
        } else {
            id_card.style.border = "";
        }

        if (!isValid) {
            Swal.fire({
                title: "Error",
                text: "Please fill in all fields correctly.",
                icon: "error"
            });
            return;
        }
        else {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: '95cefb2c-b7f4-407f-bcff-ad7c91f1669f',
                    name: name.value,
                    date_of_birth:dateOfbirth.value,
                    gender:gender.value,
                    email: email.value,
                    phone_number: phoneNumber.value,
                    address:address.value,
                    education:education.value,
                    institute_or_school_name: institute_school_name.value,
                    course:course.value,
                    related_to_this_field: related_to_this_field.value,
                    id_card: id_card.value,
                    pic:pic.value,
                    payment_method: paymentMethod,
                }),
            });
            const result = await response.json();
            if (result.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Information sent successfully! We will confirm the payment and provide you with an update shortly",
                    icon: "success"
                });
            }
            (e.target as HTMLFormElement).reset();
        }
    }

    return (
        <div className='bg-black flex justify-center'>
        <div className='text-white flex justify-center' id='signup_page'>
          <form onSubmit={handleSubmit} method="post" className='h-auto py-6 mb-12 bg-gray-950 pb-7 mt-28 mx-4 rounded-3xl border border-gray-500 shadow-gray-600 shadow-md'>
            <h2 className='md:text-5xl text-3xl font-sans font-bold flex text-center justify-center mb-10 mt-4'>Personal information</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor="fullname" className='font-sans mt-3 font-semibold'>Full name</label>
                <input type="text" name="fullname" id="fullname" required className='max-w-[200px] bg-transparent border border-gray-600 px-1 text-lg rounded-md' />
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor='dateOfBirth' className='font-sans mt-3 font-semibold'>Date of birth</label>
                <input type="date" required name="dateOfBirth" id="dateOfBirth" className='max-w-[200px] bg-transparent border border-gray-600 px-1 text-lg rounded-md text-white' />
              </div>
              <div>
                <div className='grid grid-cols-1 mx-4'>
                  <label htmlFor="gender" className='font-sans mt-3 font-semibold'>Gender</label>
                  <div>
                    <input type="radio" id="male" name="gender" value="male" required />
                    <label htmlFor="male" className='text-sm pl-1'>Male</label>
                  </div>
                  <div>
                    <input type="radio" id="female" name="gender" value="female" required />
                    <label htmlFor="female" className='text-sm pl-1'>Female</label>
                  </div>
                  <div>
                    <input type="radio" id="non-binary" name="gender" value="non-binary" required />
                    <label htmlFor="non-binary" className='text-sm pl-1'>Non-binary</label>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 mx-4 md:mt-3'>
                <label htmlFor='address' className='font-sans mt-3 md:mt-6 font-semibold'>Address</label>
                <input required type="text" name="address" id="address" className='max-w-[200px] bg-transparent border border-gray-600 px-1 md:mb-3 text-lg rounded-md' />
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor='phoneNumber' className='font-sans mt-3 font-semibold'>Phone number</label>
                <input required type="text" name="phoneNumber" id="phoneNumber" className='max-w-[200px] bg-transparent border border-gray-600 px-1 text-lg rounded-md' />
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor='email' className='font-sans font-semibold mt-3'>Email address</label>
                <input type="email" name="email" id="email" required className='max-w-[200px] bg-transparent border border-gray-600 px-1 text-lg rounded-md' />
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor='education' className='font-sans mt-3 font-semibold'>Previous education</label>
                <select id='education' name='education' required className='bg-transparent border border-gray-600 px-1 sm:text-lg text-sm py-1 rounded-md md:max-w-[200px] max-w-[290px]'>
                  <option value="" className='bg-black font-sans font-light'>--</option>
                  <option value="Uneducated" className='bg-black font-sans font-light'>Uneducated</option>
                  <option value="Primary (Class 1-5)" className='bg-black font-sans font-light'>Primary (Class 1-5)</option>
                  <option value="Middle (Class 6-8)" className='bg-black font-sans font-light'>Middle (Class 6-8)</option>
                  <option value="Matriculation (Class 9-10)" className='bg-black font-sans font-light'>Matriculation (Class 9-10)</option>
                  <option value="Intermediate (Class 11-12)" className='bg-black font-sans font-light'>Intermediate (Class 11-12)</option>
                  <option value="BA (Bachelor of Arts)" className='bg-black font-sans font-light'>BA (Bachelor of Arts)</option>
                  <option value="BSc (Bachelor of Science)" className='bg-black font-sans font-light'>BSc (Bachelor of Science)</option>
                  <option value="BCom (Bachelor of Commerce)" className='bg-black font-sans font-light'>BCom (Bachelor of Commerce)</option>
                  <option value="BS (Bachelor of Science)" className='bg-black font-sans font-light'>BS (Bachelor of Science)</option>
                  <option value="LLB (Bachelor of Laws)" className='bg-black font-sans font-light'>LLB (Bachelor of Laws)</option>
                  <option value="BEd (Bachelor of Education)" className='bg-black font-sans font-light'>BEd (Bachelor of Education)</option>
                  <option value="BDS (Bachelor of Dental Surgery)" className='bg-black font-sans font-light'>BDS (Bachelor of Dental Surgery)</option>
                  <option value="Pharm-D (Doctor of Pharmacy)" className='bg-black font-sans font-light'>Pharm-D (Doctor of Pharmacy)</option>
                  <option value="Others" className='bg-black font-sans font-light'>Others</option>
                </select>
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor='instituteName' className='font-sans mt-3 font-semibold'>School/Institution Name</label>
                <input type="text" name="instituteName" id="instituteName" className='max-w-[290px] md:max-w-[200px] bg-transparent border border-gray-600 px-1 text-lg rounded-md' required />
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor="course" className='font-sans mt-3 font-semibold'>Select course</label>
                <select id='course' name='course' required className='max-w-[200px] bg-transparent border border-gray-600 px-1 rounded-md sm:text-lg text-sm py-1'>
                  <option value="" className='bg-black font-sans font-light'>--</option>
                  {availibleCourses.map((course: courseType) => (
                    <option key={course.id} className='bg-black font-sans font-light' value={`${course.tital} ${course.price} per month`}>{`${course.tital} ${course.price}/month`}</option>
                  ))}
                </select>
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor="relatedToThisField" className='font-sans mt-3 font-semibold'>Are you related to this field?</label>
                <select name="relatedToThisField" id="relatedToThisField" className='max-w-[200px] bg-transparent border border-gray-600 px-1 sm:text-lg text-sm py-1 rounded-md' required>
                  <option value="" className='bg-black font-sans font-light'>--</option>
                  <option value="Yes" className='bg-black font-sans font-light'>Yes</option>
                  <option value="No" className='bg-black font-sans font-light'>No</option>
                </select>
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor='idCard' className='font-sans mt-3 font-semibold'>ID card number</label>
                <input type="text" id='idCard' name='idCard' className='max-w-[200px] bg-transparent border border-gray-600 px-1 text-lg rounded-md' required />
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor='pic' className='font-sans mt-2 font-semibold'>Add your pic (passport size)</label>
                <input type="file" name="pic" id="pic" required className='text-yellow-300 font-sans' />
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor='paymentMethod' className='font-sans mt-3 md:mt-2 font-semibold'>Pay via</label>
                <select name="paymentMethod" value={paymentMethod} onChange={giveNumber} id="paymentMethod" className='max-w-[200px] bg-transparent border border-gray-600 px-1 text-lg rounded-md' required>
                  <option value="--" className='bg-black font-sans font-light'>--</option>
                  <option value="jazzcash" className='bg-black font-sans font-light'>Jazzcash</option>
                  <option value="easypaisa" className='bg-black font-sans font-light'>Easypaisa</option>
                  <option value="bank transfer" className='bg-black font-sans font-light'>Bank transfer</option>
                </select>
              </div>
              <div className='grid grid-cols-1 mx-4'>
                <label htmlFor="accountNumber" className='font-sans mt-3 md:mt-4 font-semibold'>Account number</label>
                <input className='max-w-[200px] bg-transparent border border-gray-600 px-1 text-lg rounded-md' type="text" name="accountNumber" id="accountNumber" value={accountNumber} readOnly />
              </div>
            </div>
            <div className='text-center pt-4'>
              <p className='text-red-600 mx-4'>Please send the course fees to the account number provided above</p>
            </div>
            <div className='flex justify-center items-center mt-3'>
              <button className="bg-gray-950 rounded-full border border-gray-500 pb-1 text-white font-sans text-2xl shadow-gray-500 shadow hover:text-gray-400 px-3 mt-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default Page