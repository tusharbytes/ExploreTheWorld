"use client"
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { useState } from "react";
import Container from "@/app/common/Container";

export default function page() {
const [contactUser ,setContactUser] =useState({
    name:"",
    email:"",
    message :""
})
const handleSendMessage = ()=>{

console.log(contactUser)
}

  return (
<Container>
    <div className="p-8   rounded-xl  max-w-5xl mx-auto mt-10">
 
      <div className="mb-6 text-center">
        <p className="text-3xl   font-bold  ">Contact Us</p>
      </div>

 
      <div className="flex flex-col md:flex-row justify-between gap-10">
  
        <div className="md:w-1/2 space-y-6">    
          <p className="text-2xl font-semibold text-center text-gray-700">Get in Touch</p>

          <div className="flex items-center gap-3 justify-center text-gray-600">
            <MdOutlineMarkEmailRead className="text-xl text-indigo-500" />
            <span>kapoort403@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 justify-center text-gray-600">
            <IoCall className="text-xl text-indigo-500" />
            <span>7559794871</span>
          </div>

          <div className="flex items-center gap-3 justify-center text-gray-600 text-center">
            <ImLocation className="text-xl text-indigo-500" />
            <span>20 Cooper Square, New York, NY 10003, USA</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          <input
            type="text"
            value={contactUser.name}
            onChange={(e)=>setContactUser({...contactUser , name:e.target.value})}
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            value={contactUser.email}
            onChange={(e)=>setContactUser({...contactUser , email:e.target.value})}
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            value={contactUser.message}
            onChange={(e)=>setContactUser({...contactUser , message:e.target.value})}
            placeholder="Message"
            className="p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
          disabled ={!contactUser.name && !contactUser.email && !contactUser.message}
          onClick={()=>handleSendMessage()}
          className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700  disabled:bg-gray-400 disabled:cursor-not-allowed transition">
            Send
          </button>
        </div>
      </div>    
    </div>
    </Container>
  );
}
