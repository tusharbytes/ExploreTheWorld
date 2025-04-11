"use client";
import React, { useEffect, useRef, useState } from 'react';
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CiViewBoard } from "react-icons/ci";
import { location } from '../api/Api';
import Container from '../common/Container';
import Link from 'next/link';
function Page() {
  const [allCountry, setAllCountry] = useState([])
  const debounceRef = useRef(null);

  const [selectCity, setSelectCity] = useState(null)
  const [searchCountry, setSearchCountry] = useState("")

  // console.log(searchCountry)

  useEffect(() => {
    const response = async () => {
      const weathers = await location()
      setAllCountry(weathers)

    }
    response()
  }, [])

  const option = [
    { name: "Destinations", icon: <BiCurrentLocation />, location: "lkdfa", path: "/destination" },
    { name: "Bookings", icon: <MdOutlineLibraryBooks />, location: "oklsd", path: "/bookings" },
    { name: "Suport", icon: <CiViewBoard />, location: "odpksamf,x ", path: "/suport" }

  ]
  const destination = [
    {
      name: "Kedarnath",
      image: "https://www.team-bhp.com/forum/attachments/travelogues/2550734d1703776514-hyderabad-kedarnath-solo-drive-vento-tsi-some-my-observations-kedarnath1.jpg"
    },
    {
      name: "Kerala",
      image: "https://www.authenticindiatours.com/app/uploads/2022/05/10-reasons-to-visit-Kerala-Kumarakom-Back-Waters-Boat-House-1400x550-c-default.jpg"
    },
    {
      name: "Jaipur",
      image: "https://w0.peakpx.com/wallpaper/422/518/HD-wallpaper-jaipur-the-nonpareil-jewel-of-india-amer-fort.jpg"
    },]
  const selectedArea = (area) => {
    setSelectCity(area)
  }

  const handleSearch = (value) => {
    setSearchCountry(value);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(() => {
      const search = allCountry.filter((item) =>
        item?.country.toLowerCase().includes(value?.toLowerCase())
      );

      console.log(search, "debounce")
      setAllCountry(search)
    }, 2000);

  };

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

            <select
              onChange={(e) => selectedArea(e.target.value)}
              className="bg-white text-black px-3 py-2 rounded"
            >
              <option>Select country</option>
              {allCountry?.map((con, index) => (
                <option key={index} value={con?.city} className="bg-white text-black">
                  {con?.country}
                </option>
              ))}
            </select>



            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input value={selectCity} type="text" className="px-3 py-2 border border-white   rounded  " />
              <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder='Search...' className="px-3 py-2 border border-white  placeholder:text-white  rounded  " />
            </div>

            <button className="bg-[#e03030]  hover:bg-[#e01616] rounded-lg cursor-pointer text-white px-4 py-2">
              Search
            </button>
          </div>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4">
          {option.map((des, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-3xl text-center p-6    "
            >
              <div className="text-4xl flex justify-center mb-4 text-indigo-600">
                {des.icon}
              </div>
              <Link href={des.path} className="text-xl font-bold text-indigo-700">{des.name}</Link>
              <p className="text-sm text-gray-500 mt-2">{des.location}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center md:grid-cols-2 gap-6 mt-10 px-4">
          {destination.map((des, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-3xl overflow-hidden  border border-gray-100 "
            >
              <img
                src={des.image}
                alt={des.name}
                className="h-56    md:w-full   object-cover sm:object-center rounded-t-3xl"
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
      </Container>

    </div>
  );
}

export default Page;
