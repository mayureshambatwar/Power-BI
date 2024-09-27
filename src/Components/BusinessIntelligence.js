import React from "react";
import Chack from "./Image/check-button.png"; // Importing the image
import PromotionCard from "./PromotionCard";

const BusinessIntelligence = () => {
  return (
    <div className="bg-[#18023a] flex flex-col justify-center items-center p-0 m-0">
      <div className="text-center py-4 font-bold">
        <h2
          className="font-bold underline text-[25px] font-sans leading-[37px]"
          style={{ color: "rgb(255, 69, 0)" }}
        >
          MASTER BUSINESS INTELLIGENCE
        </h2>

        <h2 className="text-white text-[25px] font-sans">
          USING{" "}
          <span
            className="font-bold underline text-[25px]"
            style={{ color: "#FFFF00" }}
          >
            MICROSOFT POWER BI
          </span>{" "}
          TO BUILD
        </h2>
        <h2 className="text-white text-[25px] font-sans">
          MIND BLOWING{" "}
          <span className="text-yellow" style={{ color: "#FFFF00" }}>
            ARTIFICIALLY INTELLIGENT DASHBOARDS
          </span>
        </h2>
        <h2 className="text-white text-[25px] font-sans">
          WITHOUT ANY{" "}
          <span className="text-yellow underline" style={{ color: "#FFFF00" }}>
            CODING OR PRIOR KNOWLEDGE
          </span>
        </h2>
        <h4 className="text-white font-sans font-bold">
          ( FASTEST WAY TO GET A HIGH PAYING JOB OR NEXT PROMOTION )
        </h4>
      </div>

      <div className="flex justify-center items-center my-4">
        <iframe
          className="w-[90vw] sm:w-[560px] sm:h-[315px]"
          src="https://www.youtube.com/embed/qmIOBSq9bhk?si=iBzFqh6snrJYR3_p"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <PromotionCard/>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <ul className="font-sans font-bold text-[20px] leading-[45px] w-[90vw] sm:w-[35vw] list-none">
          <li className="text-white">
            <img
              src={Chack}
              alt="check icon"
              className="inline-block w-[20px] h-auto mr-2"
            />
            <span className="text-greenyellow">No Prior</span> coding or
            business knowledge required
          </li>
          <li className="text-white">
            <img
              src={Chack}
              alt="check icon"
              className="inline-block w-[20px] h-auto mr-2"
            />
            Build <span className="text-greenyellow">Powerful Dashboards</span>{" "}
            using Power BI to track all your KPIs
          </li>
          <li className="text-white">
            <img
              src={Chack}
              alt="check icon"
              className="inline-block w-[20px] h-auto mr-2"
            />
            Get{" "}
            <span className="text-greenyellow">Key Insights & Observation</span>{" "}
            from your data
          </li>
        </ul>

        <ul className="font-sans font-bold text-[20px] leading-[45px] w-[90vw] sm:w-[35vw] list-none">
          <li className="text-white">
            <img
              src={Chack}
              alt="check icon"
              className="inline-block w-[20px] h-auto mr-2"
            />
            Master{" "}
            <span className="text-greenyellow">
              Data Analysis & Visualization
            </span>
          </li>
          <li className="text-white">
            <img
              src={Chack}
              alt="check icon"
              className="inline-block w-[20px] h-auto mr-2"
            />
            Perform{" "}
            <span className="text-greenyellow">Business Intelligence</span> to
            grow any company
          </li>
          <li className="text-white">
            <img
              src={Chack}
              alt="check icon"
              className="inline-block w-[20px] h-auto mr-2"
            />
            Learn to <span className="text-greenyellow">Leverage Data</span> to
            make you a star performer of your team
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default BusinessIntelligence;
