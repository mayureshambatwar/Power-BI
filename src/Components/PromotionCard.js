import React from 'react';

const PromotionCard = () => {
  return (
    <div
      className="rounded-lg text-white w-[90vw] sm:w-[720px] text-center flex justify-center items-center py-2 transition-colors duration-2000 hover:bg-[#6dacfa] my-4"
      style={{ backgroundColor: "#FF0000" }}
    >
      <div>
        <h2 className="text-[31px] font-bold">
          Become A Certified Power BI At Just Rs 99/- Now!
        </h2>
        <p className="text-[22px]">( offer valid only for today )</p>
      </div>
    </div>
  );
};

export default PromotionCard;
