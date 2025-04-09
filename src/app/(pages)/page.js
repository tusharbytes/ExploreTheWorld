"use client";
import React, { useEffect, useState } from 'react';
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CiViewBoard } from "react-icons/ci";
import { location } from '../api/Api';
function Page() {
  const [allCountry, setAllCountry] = useState(null)
  console.log(allCountry ,"dsds")
  useEffect(() => {
    const response = async()=>{
      const weathers = await location()
      setAllCountry(weathers)

    }
    response()
  }, [])
  const option = [
    { name: "Destinations", icon: <BiCurrentLocation />, location: "lkdfa" },
    { name: "Bookings", icon: <MdOutlineLibraryBooks />, location: "oklsd" },
    { name: "Suport", icon: <CiViewBoard />, location: "odpksamf,x " }

  ]
  const destination = [
    {
      name: "Kedarnath",
      image: "https://cwn.today/wp-content/uploads/2024/03/4cf9bdfc97a425bde075a3c154c6dc91c79a2.jpg"
    },
    {
      name: "Kerala",
      image: "https://www.authenticindiatours.com/app/uploads/2022/05/10-reasons-to-visit-Kerala-Kumarakom-Back-Waters-Boat-House-1400x550-c-default.jpg"
    },
    {
      name: "Jaipur",
      image: "https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/05/Hawa-Mahal.jpg"
    },]
    const selectedArea =(area)=>{
console.log(area)
    }

  return (
    <div>
      <div
        className="h-[70vh] rounded-t-2xl p-6 text-white flex items-center justify-center"
        style={{
          backgroundImage: 'url("/header.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center space-y-4">
          <div className='text-[52px]'>
            <h1 className=" font-bold line-clamp-1">Explore</h1>
            <span className="  font-bold line-clamp-2 ">The World</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">

            <select className="bg-white text-black px-3 py-2 rounded">
              {allCountry?.map((con, index) => (
                
                <option key={index} onChange={()=>selectedArea(con)}  className="bg-white text-black">
                  {con?.country}
                </option>
              ))}
            </select>


            <div className="flex gap-2">
              <input type="text" className="px-3 py-2 border border-white placeholder:text-white  rounded  " />
              <input type="text" className="px-3 py-2 border border-white  placeholder:text-white  rounded  " />
            </div>

            <button className="bg-red-600 rounded-2xl cursor-pointer text-white px-4 py-2">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4">
        {option.map((des, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer rounded-3xl text-center p-6    "
          >
            <div className="text-4xl flex justify-center mb-4 text-indigo-600">
              {des.icon}
            </div>
            <h3 className="text-xl font-bold text-indigo-700">{des.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{des.location}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 justify-center md:grid-cols-3 gap-6 mt-10 px-4">
        {destination.map((des, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer rounded-3xl overflow-hidden  border border-gray-100 "
          >
            <img
              src={des.image}
              alt={des.name}
              className="h-56   md:w-full  w-[250px] object-cover rounded-t-3xl"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-indigo-600">{des.name}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Discover the beauty of {des.name} — a perfect escape for your next adventure.
              </p>
              <button onClick={() => handlClick(des)} className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-medium shadow-md transition">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Page;
