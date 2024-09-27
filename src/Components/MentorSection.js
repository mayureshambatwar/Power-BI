import React from "react";
import mentorImage from "./Image/mentor-1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PromotionCard from "./PromotionCard";

const MentorSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Meet Your Mentor</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <div className="mb-8 md:mb-0 md:mr-8">
          <img
            src={mentorImage}
            alt="Mentor Jatan Shah"
            className="h-[500px] w-[470px] rounded-xl mx-auto"
          />
        </div>
        <div className="text-left">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 items-center justify-center">
            <div className="flex flex-col items-center w-64">
              {" "}
              {/* Set the width same for all blocks */}
              <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg mb-4 w-full justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-400 mr-2"
                />
                Microsoft Certified Trainer
              </div>
              <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg w-full justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-400 mr-2"
                />
                116,294+ Students Mentored
              </div>
            </div>

            <div className="flex flex-col items-center w-64">
              {" "}
              {/* Same width here */}
              <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg mb-4 w-full justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-400 mr-2"
                />
                Co-founder, Skill Nation
              </div>
              <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg w-full justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-400 mr-2"
                />
                1,12,493+ Followers across platforms
              </div>
            </div>
          </div>
          <p className="text-lg leading-relaxed mt-6 max-w-lg mx-auto md:mx-0">
            Hi, I am Jatan Shah, a{" "}
            <span className="text-green-400 font-bold">
              Microsoft Certified Trainer
            </span>{" "}
            & a{" "}
            <span className="text-green-400 font-bold">
              Microsoft Certified Excel Expert
            </span>
            . I help working professionals master analytical skills with ease &
            consult for top corporate brands to make them more Data Analysis &
            Presentation Efficient.
            <br />
            At age 21, I founded my own training & consulting academy which has{" "}
            <span className="text-green-400 font-bold">
              trained over 95,000+ students just in the last 2 years.
            </span>
            <br />
            After working as a company valuation analyst helping multiple
            companies get funding with my valuation models, I found my passion
            in teaching & now I aim to provide top quality skill training at
            affordable rates to all working professionals.
          </p>
        </div>
      </div>
        <div className="flex justify-center">
        <PromotionCard/>
      </div>

      <p className="text-3xl text-center font-bold my-4">
        Register before <span className="text-orange-500">March 30, 2024</span>{" "}
        to unlock bonuses worth{" "}
        <span className="text-orange-500">₹ 16,000</span>
      </p>
    </div>
  );
};

export default MentorSection;
