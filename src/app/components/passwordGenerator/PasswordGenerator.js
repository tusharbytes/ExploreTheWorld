"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function PasswordGenerator() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passWordGene = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklomnpqrstuvwxyzABCDEFGHIJKLOMNPQRSTUVWXYZ"

    if (numberAllow) str += "0123456789"
    if (charAllow) str += "~!@#$%^&*()_+={}"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length)
      
      pass += str.charAt(char)
    }
    console.log(pass)
    setPassword(pass)
  }, [length, numberAllow, charAllow])

  useEffect(() => {
    passWordGene()
  }, [length, numberAllow, charAllow])

  return (
    <div className='max-w-xl mx-auto p-6 bg-white  rounded-2xl mt-10'>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>🔐 Password Generator</h1>

      <div className='flex mb-4'>
        <input
          className='flex-grow px-4 py-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={password}
          readOnly
          type='text'
          placeholder='Generated password'
        />
        <button
          className='bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-5 py-3 rounded-r-xl font-semibold'
          onClick={() => {
            navigator.clipboard.writeText(password)
            // alert("copied")
            toast.success("Password copied!")

          }}
        >
          Copy
        </button>
      </div>

      <div className='space-y-4'>
        <div className='flex items-center gap-4'>
          <label className='font-medium text-gray-700'>Length: {length}</label>
          <input
            type='range'
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength (e.target.value)}
            className='w-full cursor-pointer'
          />
        </div>

        <div className='flex items-center gap-6'>
          <label className='flex items-center gap-2 cursor-pointer text-gray-700 font-medium'>
            <input
              type='checkbox'
              checked={numberAllow}
              onChange={() => setNumberAllow(prev => !prev)}
              className='accent-blue-600 cursor-pointer'
            />
            Include Numbers
          </label>

          <label className='flex cursor-pointer items-center gap-2 text-gray-700 font-medium'>
            <input
              type='checkbox'
              checked={charAllow}
              onChange={() => setCharAllow(prev => !prev)}
              className='accent-blue-600 cursor-pointer'
            />
            Include Symbols
          </label>
        </div>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default PasswordGenerator
