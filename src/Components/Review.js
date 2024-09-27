import React from "react";
import bioimg1 from "./Image/bioimg 1.webp";
import bioimg2 from "./Image/bioimg 2.webp";
import bioimg3 from "./Image/bioimg 3.webp";
import bioimg4 from "./Image/bioimg 4.webp";
import PromotionCard from "./PromotionCard";

const Review = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="flex flex-wrap justify-center gap-8">
        <div className="space-y-4">
          <img
            src={bioimg1}
            alt="Review 1"
            className="w-[550px] h-[280px] border border-white shadow-lg mx-auto"
          />
          <img
            src={bioimg2}
            alt="Review 2"
            className="w-[550px] h-[280px] border border-white shadow-lg mx-auto"
          />
        </div>
        <div className="space-y-4">
          <img
            src={bioimg3}
            alt="Review 3"
            className="w-[550px] h-[280px] border border-white shadow-lg mx-auto"
          />
          <img
            src={bioimg4}
            alt="Review 4"
            className="w-[550px] h-[280px] border border-white shadow-lg mx-auto"
          />
        </div>
      </div>
      <div className="text-center my-8 space-y-4">
        <h2 className="text-3xl font-bold text-black">4.8 Out of 5</h2>
        <p className="text-lg text-gray-800">(3,200+ Verified Reviews)</p>
        <p className="text-2xl font-semibold text-gray-700 px-4 lg:px-16 leading-[47px]">
          What We’ll Teach You In This{" "}
          <span className="bg-yellow-300 font-bold">
            2-Day Power BI Workshop
          </span>{" "}
          will not only{" "}
          <span className="bg-yellow-300 font-bold">help you master</span>, but
          also help you <br /> scale any business by leveraging the power of
          data. It's all possible by creating your own <br />
          <span className="bg-yellow-300 font-bold">
            Artificially Intelligent Dashboards!!
          </span>
        </p>
      </div>

      <div className="col-span-full flex justify-center">
        <PromotionCard />
      </div>

      <p className="text-3xl text-center font-bold my-4">
        Register before <span className="text-orange-500">March 30, 2024</span>{" "}
        to unlock bonuses worth{" "}
        <span className="text-orange-500">₹ 16,000</span>
      </p>
      <div className="bg-black text-white text-center py-2 my-4 h-40">
      <h1 className="text-3xl md:text-5xl mt-4 leading-10">Register before midnight of 30 Jan 2024</h1>
      <p className="text-lg md:text-xl font-bold text-green-400 mt-4">
        To Unlock All Bonuses Worth Rs 16,000
      </p>
    </div>
    </div>
  );
};

export default Review;
