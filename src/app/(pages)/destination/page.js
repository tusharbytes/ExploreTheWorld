"use client"

import Container from '@/app/common/Container';
import React from 'react'

function page() {
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
    },
    {
      name: "Goa",
      image: "https://s3.india.com/wp-content/uploads/2024/08/Discover-The-Top-10-Fun-Activities-In-Goa-For-Ultimate-Holiday-Bliss.jpg?impolicy=Medium_Widthonly&w=350&h=263"
    },
    {
      name: "Manali",
      image: "https://clubmahindra.gumlet.io/blog/images/Solang-Valley-in-winter-resized.jpg?w=376&dpr=2.6"
    },
    {
      name: "Varanasi",
      image: "https://www.ramadajhvvns.com/blog/wp-content/uploads/2018/01/1-1.jpg"
    },
    {
      name: "Andaman Islands",
      image: "https://www.gtholidays.in/wp-content/uploads/2019/07/gt-honeymoon-package-870x555.jpeg"
    },
    {
      name: "Udaipur",
      image: "https://www.themaharajaexpress.org/blog/wp-content/uploads/2018/02/Taj-Lake-Palace-Udaipur.jpg"
    }
  ];
  const handlClick = (option) => {
    console.log(option)

  }

  return (
    <Container>

      <div className="p-6  rounded-b-xl  ">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold  bg-clip-text mb-2 animate-fade-in">
            Discover Our
          </h2>
          <h2 className="text-5xl font-extrabold  bg-clip-text  animate-fade-in delay-100">
            Destinations
          </h2>

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
    </Container>

  )
}

export default page