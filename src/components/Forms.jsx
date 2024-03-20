/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Forms = () => {
  const [showMessage, setShowMessage] = useState(false);
const [messageText, setMessageText] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing
    setFormErrors({ ...formErrors, [name]: '' });
  };



  const handleClose = () => {
    setShowMessage(false);
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    // Basic validation: Check if required fields are filled
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // Form submission logic goes here
   // console.log('Form submitted:', formData);

    // Adding timestamp to the message
  const messageWithTimestamp = {
    ...formData,
    timestamp: new Date().toISOString()
  };
   const option={
    method:"POST",
    headers:{
      'content-type':'application/json'
    
    },
    body:JSON.stringify({
      message: messageWithTimestamp
    })
   }
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    const res= await fetch("https://myportfolio-contact-daf4f-default-rtdb.firebaseio.com/messages.json",option)
    if (res) {
      setMessageText("Message sent successfully!");
    } else {
      setMessageText("Failed to send message. Please try again later.");
    }
    setShowMessage(true)
    
  };

  return (
    <div className="isolate bg-chacoalBlack text-white mt-20 px-4 py-10 md:mt-20 md:py-32  md:px-40 lg:mt-4 lg:grid lg:grid-cols-2 
  xl:py-5  2xl:py-32 ">
    <div className='lg:flex  md:w-[600px] lg:w-[810px]  xl:w-[66rem]  xl2:w-[74rem] md:-ml-[70px] lg:-ml-12 2xl:ml-10  2xl:w-[136rem] 2xl:h-[50rem]'> 
         <div className="mx-auto max-w-2xl text-center md:text-start lg:mr-6  lg:w-96 lg:mt-16  xl:w-[600px] 2xl:w-[1000px] 2xl:mr-[36rem]">
        <h2 className="text-[40px] font-bold tracking-tight  2xl:text-[60px] capitalize xl:ml-0 ">Contact</h2>
        <p className="mt-2 text-[16px] leading-8 xl:ml-0 xl:w-96 2xl:text-[40px] 2xl:w-[55rem] 2xl:leading-10 ">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 uppercase  sm:mt-20 xl:ml-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:gap-x-2 ">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 2xl:text-[32px] ">Name</label>
            <div className="mt-2.5 border-b border-gray-300 ">
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="block w-full rounded-md  bg-chacoalBlack text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-[450px] 2xl:w-[750px] 2xl:leading-[80px]" />
            </div>
            {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
          </div>
          <div className="sm:col-span-2 ">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500 2xl:text-[32px]">Email</label>
            <div className="mt-2.5 border-b border-gray-300">
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="block w-full rounded-md  bg-chacoalBlack text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 2xl:leading-[80px] " />
            </div>
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 2xl:text-[32px]">Message</label>
            <div className="mt-2.5 border-b border-gray-300">
              <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className="block w-full rounded-md  bg-chacoalBlack text-gray-900 shadow-sm  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 2xl:leading-[80px]"></textarea>
            </div>
            {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="uppercase tracking-[2.29px] block w-full text-right text-[16px] font-bold  underline underline-offset-[12px]  decoration-green decoration-4 hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 2xl:text-[32px]">Send Message</button>
        </div>
        {showMessage && (
  <div className="absolute top-4  left-0 xl:-left-[47rem] bg-green border ring-2 px-4 py-3 rounded relative" role="alert" onClick={handleClose}>
    <strong className="font-bold block">Success!</strong>
    <span className="block sm:inline">{messageText}</span>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title >Close</title><path d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 6.36 5.652a.5.5 0 0 0-.707.708L9.293 10l-3.64 3.64a.5.5 0 1 0 .707.708L10 10.707l3.64 3.64a.5.5 0 0 0 .707-.708L10.707 10l3.64-3.64a.5.5 0 0 0 0-.708z"/></svg>
    </span>
  </div>
)}

      </form></div>
    
    </div>
  );
}

export default Forms;

