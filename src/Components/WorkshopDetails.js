import React from "react";
import pbi1 from "./Image/pbi1.webp";
import pbi2 from "./Image/pbi2.webp";
import pbi3 from "./Image/pbi3.webp";
import PromotionCard from "./PromotionCard";
import "./WorkshopDetails.css";

const WorkshopDetails = () => {
  return (
    <div className="bg-[#f1f3f7]">
      {/* Discount Section */}
      <div className="bg-[rgb(34,34,88)] text-center py-4">
        <div className="font-bold text-2xl">
          <h3 className="text-orange-500">
            Last date to get additional fee discount of Rs 1,900/- is 28 March
            i.e today
          </h3>
          <h3 className="text-white">
            Workshop is on 6th & 7th April (Sat & Sun) from 7PM-10PM.
          </h3>
          <h3 className="text-yellow-400">
            ***Be Quick! Last few seats are remaining for this batch***
          </h3>
        </div>
      </div>

      {/* Main Content */}
      <h1 className="text-5xl font-bold text-center font-sans py-4 sm:text-[20px] md:text-[25px] lg:text-[40px]">
        Please Check All Boxes Where Your Answer Is YES!!
      </h1>

      <div className="box">
        <div className="boxes">
          {/* Checkbox Section */}
          {[
            "I want to analyse my data to get key insights and answers within a second.",
            "I want to analyse my data to get key Insights and answers within a second.",
            "I want to get promotion by learning a skill that makes me stand out from the crowd.",
            "I want to build powerful artificially intelligent dashboards to track all my KPIs.",
            "I want to master business intelligence as it is the most in-demand skill of 2023.",
            "I want to become more efficient in my job and work smarter not harder.",
          ].map((text, index) => (
            <div key={index} className="normal-box">
              {/* Checkbox and Text in One Line */}
              <input
                type="checkbox"
                className="h-6 w-6 accent-green-500 mr-4"
              />
              <span className="flex-1 text-xl">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[25px] font-semibold text-center my-4 font-sans sm:text-[15px] md:text-[20px] lg:text-[25px]">
        If you checked ANY of the boxes above, then you're invited to join the{" "}
        <span className="text-red-600 font-bold underline">
          2 Days Power BI Domination Workshop
        </span>
      </p>

      <div className="flex justify-center">
        <PromotionCard />
      </div>

      <p className="text-3xl text-center font-bold my-4">
        Register before <span className="text-orange-500">March 30, 2024</span>{" "}
        to unlock bonuses worth{" "}
        <span className="text-orange-500">₹ 16,000</span>
      </p>

      {/* Blue Box */}
      <div className="bg-[#18023a] text-white text-3xl text-center py-5 font-bold">
        Perform Business Intelligence Using Power BI
      </div>

      {/* Power BI Images Section */}
      <div className="flex justify-center py-5 gap-5 flex-wrap">
        {[
          { img: pbi1, label: "Business & Sales Dashboards" },
          { img: pbi2, label: "Financial Dashboards" },
          { img: pbi3, label: "Operational Dashboards" },
        ].map((item, index) => (
          <div key={index} className="relative w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={item.img}
              className="w-full h-64 object-cover"
              alt={item.label}
            />
            <div className="mb-5 bg-white text-center text-lg font-bold w-full py-2 rounded-b-md">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-4xl font-bold py-4">And Many more</div>

      <div className="flex justify-center">
        <PromotionCard />
      </div>

      <p className="text-3xl text-center font-bold my-4">
        Register before <span className="text-orange-500">March 30, 2024</span>{" "}
        to unlock bonuses worth{" "}
        <span className="text-orange-500">₹ 16,000</span>
      </p>
    </div>
  );
};

export default WorkshopDetails;
