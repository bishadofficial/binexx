'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Webcam from 'react-webcam';

const outcomes = [
  'Buy (1 min, strong upward push expected)', 'Sell (2 min, market shows weakness)',
  'Buy (3 min, momentum building for breakout)', 'Sell (5 min, trend shift detected)',
  'Buy (1 min, possible bullish surge)', 'Sell (2 min, price struggling to hold up)',
  'Buy (3 min, short-term buying pressure)', 'Sell (4 min, reversal signs spotted)',
  'Buy (5 min, buyers gaining control)', 'Sell (6 min, sellers stepping in)',
  'Buy (1 min, volatility increasing in favor)', 'Sell (2 min, potential rejection at highs)',
  'Buy (3 min, market reacting positively)', 'Sell (5 min, downside momentum building)',
  'Buy (7 min, uptrend confirmation)', 'Sell (8 min, lower highs forming)',
  'Buy (10 min, strong price movement ahead)', 'Sell (12 min, downward pressure increasing)',
  'Buy (1 min, support holding well)', 'Sell (2 min, resistance proving strong)',
  'Buy (3 min, aggressive buyers entering)', 'Sell (4 min, possible fakeout scenario)',
  'Buy (5 min, steady upward movement)', 'Sell (6 min, sudden weakness in price)',
  'Buy (7 min, bullish activity spotted)', 'Sell (9 min, risk of deeper pullback)',
  'Buy (10 min, potential breakout setting up)', 'Sell (12 min, exhaustion signals visible)',
  'Buy (15 min, continuation of trend likely)', 'Sell (20 min, probable sell-off ahead)'
];

export default function BinaryBetPage() {
  const [isPicking, setIsPicking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [facingMode, setFacingMode] = useState('environment');
  const webcamRef = useRef(null);

  const handleTakePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log('Captured Image:', imageSrc);
    }
    setIsCameraOpen(false);
    handleCapture();
  };

  const openGallery = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => handleCapture();
    input.click();
  };

  const handleCapture = () => {
    setIsPicking(false);
    setLoading(true);
    setTimeout(() => {
      setResult(outcomes[Math.floor(Math.random() * outcomes.length)]);
      setLoading(false);
    }, 10000);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <Image
        src="/gifgif.gif"
        alt="Picture of the author"
        width={500}
        height={500}
        className="cursor-pointer"
        onClick={() => setIsPicking(true)}
      />

      {isPicking && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setIsPicking(false)}>
          <div className="bg-white text-black p-6 rounded-xl shadow-xl text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-lg mb-4">Choose an option</p>
            <button onClick={() => setIsCameraOpen(true)} className="bg-black text-white px-4 py-2 rounded-lg mr-2">Camera</button>
            <button onClick={openGallery} className="bg-black text-white px-4 py-2 rounded-lg">Gallery</button>
          </div>
        </div>
      )}

      {isCameraOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setIsCameraOpen(false)}>
          <div className="bg-white p-4 rounded-xl shadow-xl relative" onClick={(e) => e.stopPropagation()}>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode }}
              className="w-full"
            />
            <button onClick={handleTakePhoto} className="mt-4 bg-black text-white px-4 py-2 rounded-lg">Capture</button>
            <button onClick={() => setFacingMode(facingMode === 'environment' ? 'user' : 'environment')} className="absolute top-2 right-2 bg-gray-800 text-white px-4 py-2 rounded-lg">Switch Camera</button>
          </div>
        </div>
      )}

      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2 }}>
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        </motion.div>
      )}

      {result && (
        <Dialog open={true} onClose={() => setResult(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl text-center relative">
            <button onClick={() => setResult(null)} className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg">X</button>
            <p className={`text-5xl font-extrabold ${result.startsWith('Buy') ? 'text-green-500' : 'text-red-500'}`}>{result.split(' ')[0]}</p>
            <p className="text-lg font-medium text-gray-700">{result.substring(result.indexOf('('))}</p>
            <button onClick={() => setResult(null)} className="mt-4 bg-black text-white px-6 py-3 rounded-lg text-lg font-bold">Close</button>
          </div>
        </Dialog>
      )}
    </div>
  );
}
