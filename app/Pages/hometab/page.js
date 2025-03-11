"use client";
import Image from 'next/image';
import DialogDemo from '../lefttab/page';
import BottomTabNav from '../righttab/page';
import BinaryBetPage from '../magic/page';

function hometab() {
  return (
    <div className='bg-[#010000]'>
      

      <div className='p-4 opacity-50'>
      <DialogDemo />
      </div>

      <div className='text-white text-center p-2 text-3xl font-black'>
        <h1>
        Click to Get Instant AI Market Predictions
        </h1>
        
      </div>
     
      <p className='text-1xl flex justify-center align-middle'>👇</p>

    <div>
    <BinaryBetPage />
    </div>

    <div>

       <BottomTabNav />
       <br />

    </div>

    </div>
  );
}

export default hometab;