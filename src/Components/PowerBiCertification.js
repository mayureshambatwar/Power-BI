// PowerBiCertification.js
import React from 'react';
import certificateImage from './Image/Power-BI-Certificate.webp'; // Adjust the path as necessary
import PromotionCard from './PromotionCard';

const PowerBiCertification = () => {
  return (
    <div className="bg-[#0d022b] p-4">
      <h1 className="text-white text-5xl font-bold text-center py-2">Become a Certified Power BI Professional</h1>

      <p className="text-white text-xl font-medium text-center mx-12 my-4 leading-8">
        Yes! You will be certified by a <span className="text-orange-500">Microsoft Certified Trainer & Skill Nation</span>, which brings a lot of credibility to your certificate & your resume.
      </p>

      <img src={certificateImage} alt="Power BI Certificate" className="mx-auto my-4 h-[450px] w-[650px] rounded-2xl" />

      <div className="my-4 text-center">
        <p className="text-3xl text-white leading-10 mx-12">
          <span className="text-2xl font-semibold">Believe Me When I Say This:</span>
          <b>
            "You <u className="text-green-300">DO NOT</u> Need Any Coding Or Prior Knowledge To <br /> Learn Power BI & Perform Business Intelligence. Over 3,200 professionals Have <br /> Mastered This Skill By Attending This Workshop."
          </b>
        </p>
      </div>

      <div className="col-span-full flex justify-center">
        <PromotionCard/>
      </div>

      <p className="text-3xl text-white text-center font-bold my-4">
        Register before <span className="text-orange-500">March 30, 2024</span>{" "}
        to unlock bonuses worth{" "}
        <span className="text-orange-500">₹ 16,000</span>
      </p>
    </div>
  );
};

export default PowerBiCertification;
