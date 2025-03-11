"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation";

function Apkhome() {

  const router = useRouter();

  return (
    <div className='p-5 bg-black text-white'>
       
       
        <div>
        <Image
        src="/logo.svg"
        alt="Logo of the company"
        width={500}
        height={500}
          />
        </div>

        <div>
        <p>
            Predict the market with AI! Join us, let AI analyze, and get instant trading predictions. But be careful—without our POCKET OPTION link, results won’t be accurate!
        </p>
        </div>
<br />
        <div className='flex justify-center'>
        <button className='button' onClick={() => router.push("Intro/quotexauth")}>START</button>
        </div>
  
    </div>
  )
}

export default Apkhome