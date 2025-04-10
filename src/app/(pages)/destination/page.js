"use client"

import Container from '@/app/common/Container';
import React from 'react'

function page() {
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
    },
    {
      name: "Goa",
      image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/09/nightlife-in-north-goa-Cover-Photo-840x425.jpg"
    },
    {
      name: "Manali",
      image: "https://www.adventurush.com/wp-content/uploads/2022/07/shutterstock_1176563608.jpg"
    },
    {
      name: "Varanasi",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/manikarnika-ghat-city-hero?qlt=82&ts=1727959374496"
    },
    {
      name: "Andaman Islands",
      image: "https://www.gtholidays.in/wp-content/uploads/2019/07/gt-honeymoon-package-870x555.jpeg"
    },
    {
      name: "Udaipur",
      image: "https://map.sahapedia.org/admin/assets/images/2021033013400727799_Banner.jpg?__imr__=bannerMuseum"
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

        <div className="grid grid-cols-1 sm:grid-cols-1 justify-center md:grid-cols-2 gap-6 mt-10 p-4  m-auto px-4">
          {destination.map((des, index) => (
            <div

              key={index}
              className="bg-white cursor-pointer rounded-3xl overflow-hidden  border border-gray-100 "
            >
              <img
                src={des.image}
                alt={des.name}
                className="h-56     w-full   rounded-t-3xl"
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