"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function QuotexAuth() {
  const [accountId, setAccountId] = useState("");
  const router = useRouter();

  const handleOpenAccount = () => {
    window.open("https://u3.shortink.io/register?utm_campaign=768999&utm_source=affiliate&utm_medium=sr&a=vrod5x0GrnPvRf&ac=binexx", "_blank");
  };

  const handleNext = () => {
    if (!accountId.trim()) {
      alert("PLEASE ENTER YOUR ACCOUNT ID");
      return;
    }
    router.push("/Intro/googleauth");
  };

  return (
    <div className=" m-2 flex items-center justify-center text-white px-4 bg-black">
      <motion.div
        className="w-full max-w-md p-10 rounded-3xl shadow-2xl bg-gray-900 border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-500 uppercase">STEP 1</h2>
            <motion.button
              onClick={handleOpenAccount}
              className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase py-3 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              OPEN ACCOUNT
            </motion.button>
            <p className="mt-2 text-sm text-gray-400">
              Click the button to create a new <span className="text-red-500 font-bold">POCKET-OPTION</span> account. Copy the ID from the account and paste it in the box below.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-500 uppercase">STEP 2</h2>
            <motion.input
              type="text"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              placeholder="ENTER ACCOUNT ID"
              className="mt-4 w-full px-5 py-3 bg-gray-800 text-white font-bold uppercase rounded-xl border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none text-lg transition-all"
              whileFocus={{ scale: 1.02 }}
            />
            <p className="mt-2 text-sm text-gray-400">
              Paste your <span className="text-red-500 font-bold">Account ID</span> in the box. This will connect your account with our AI predictions.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-red-500 uppercase">STEP 3</h2>
            <motion.button
              onClick={handleNext}
              className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              NEXT <FaArrowRight className="text-lg font-bold" />
            </motion.button>
          </div>
        </div>

        {/* Notice */}
        <p className="mt-6 text-xs text-gray-400 text-center">
          ⚠️ <span className="text-red-400 font-semibold">Important:</span> You must sign up using our link to access AI predictions. Without it, the AI will not work for you.
        </p>
      </motion.div>
     
    </div>
  );
}
