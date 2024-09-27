import React from "react";
import Proof1 from "./Image/proof 1.webp";
import Proof2 from "./Image/proof 2.webp";
import PromotionCard from "./PromotionCard";
const DataSets = () => {
  return (
    <div className="">
      <div className="bg-[#0f0135] text-white py-2">
        <h1 className="text-center  text-4xl font-bold mb-6">
          DO YOU KNOW WHAT THE BEST PART IS?
        </h1>

        <div className="text-center text-lg md:text-2xl font-semibold mb-4 mx-auto max-w-3xl">
          <p>
            You will learn A to Z of Power BI, with{" "}
            <span className="bg-green-500 px-2 py-1 rounded-md">
              <b>Hands-On Practice on Real Life Datasets</b>
            </span>{" "}
            so you can build your own Dashboard & Leverage Data to become a
            Valuable Asset to your Company. All of this, certified by a
            Microsoft Certified Trainer.{" "}
            <span className="text-orange-500">
              No Boring Theory! 100% Practical Learning!
            </span>
          </p>
        </div>

        <div className="flex justify-center">
          <PromotionCard />
        </div>

        <p className="text-3xl text-center font-bold">
          Register before{" "}
          <span className="text-orange-500">March 30, 2024</span> to unlock
          bonuses worth <span className="text-orange-500">₹ 16,000</span>
        </p>
      </div>

      <div className="proof text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Want more proof?</h1>
        <p className="text-xl md:text-2xl mx-auto mb-8 font-semibold max-w-7xl">
          Go to LinkedIn & search for the name "Jatan Shah". You will find
          1000's of happy participants thanking me. Go to my{" "}
          <a href="#" className="text-blue-400 underline">
            LinkedIn profile
          </a>{" "}
          & check my endorsements & recommendations. Go to Trustpilot & read my
          reviews. I am sure you will be convinced in no time. 😀
        </p>

        <div className="flex flex-col md:flex-col lg:flex-row justify-center gap-8 mb-8">
          <img
            src={Proof1}
            alt="Proof 1"
            className="w-full lg:w-full md:w-[470px] h-auto max-h-[335px] shadow-lg object-cover"
          />
          <img
            src={Proof2}
            alt="Proof 2"
            className="w-full lg:w-full md:w-[470px] h-auto max-h-[335px] shadow-lg object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-8">
          1 Lakh+ Followers and Recommendations
        </h1>

        <div className="flex justify-center">
          <PromotionCard />
        </div>

        <p className="text-3xl text-center font-bold">
          Register before{" "}
          <span className="text-orange-500">March 30, 2024</span> to unlock
          bonuses worth <span className="text-orange-500">₹ 16,000</span>
        </p>
      </div>
    </div>
  );
};

export default DataSets;
