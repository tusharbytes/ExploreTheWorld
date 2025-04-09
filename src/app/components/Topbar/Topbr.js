"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { IoSearchOutline, IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Topbar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const pathName = usePathname()

    return (
        <div className="relative">
            <div className="flex md:flex-row items-center rounded-t-3xl   justify-between bg-[#3c95fe] text-white px-6 py-4 shadow-md">
                <h1 className="text-2xl font-bold mb-2 md:mb-0">{pathName}</h1>

                <nav className="hidden md:flex text-2xl items-center font space-x-6">
                    <Link href="/" className="">Home</Link>
                    <Link href="/about" className="">About</Link>
                    <Link href="/destination" className="">Destinations</Link>
                    <Link href="/contact" className="">Contact</Link>
                    <IoSearchOutline className='w-5 h-5   cursor-pointer' /></nav>


                <div className='flex items-center gap-4 md:hidden'>
                    {!mobileMenu ?
                        <IoMenu className='w-6 h-6 cursor-pointer' onClick={() => setMobileMenu(!mobileMenu)} />
                        : <RxCross2 onClick={() => setMobileMenu(!mobileMenu)} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="md:hidden bg-[#3c95fe] text-white px-6 py-4 rounded-b-2xl shadow-md transition-all duration-300 ease-in-out">
                    <nav className="flex flex-col space-y-3">
                        <Link href="/" className="">Home</Link>
                        <Link href="/about" className="">About</Link>
                        <Link href="/destination" className="">Destinations</Link>
                        <Link href="/contact" className="">Contact</Link>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Topbar
