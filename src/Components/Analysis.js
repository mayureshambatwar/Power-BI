import React from "react";
import PromotionCard from "./PromotionCard";

const Analysis = () => {
  const data = [
    {
      img: "https://astonishing-gnome-c98cc7.netlify.app/images/images%20(1).png",
      title:
        "Step By Step Framework to perform Business Intelligence using Power BI",
      description:
        "Learn the proven industry secrets of performing business intelligence on any & all sets of data.",
    },
    {
      img: "https://astonishing-gnome-c98cc7.netlify.app/images/images%20(2)%20--3.png",
      title:
        "Using Artificial Intelligence to perform cluster analysis & forecast data",
      description:
        "Master Power BI's AI Visual to create your own search assistant, predict data, perform cluster analysis, & forecast future trends.",
    },
    {
      img: "https://astonishing-gnome-c98cc7.netlify.app/images/images%20(2)%20--2.png",
      title:
        "Building Interactive Dashboards using 9+ Powerful Visuals in Power BI",
      description:
        "Leverage the platform of Power BI to build amazing dashboards & get key insights & observations out of it.",
    },
    {
      img: "https://astonishing-gnome-c98cc7.netlify.app/images/images%20(2)--4.png",
      title:
        "Conduct Business Analysis on multiple businesses to scale revenue & improve profitability",
      description:
        "Find out hidden metrics that will help build & grow any business by 7.2x.",
    },
    {
      img: "https://astonishing-gnome-c98cc7.netlify.app/images/images%20(2)%20--5.png",
      title:
        "Combine data from over 30 sources (incl. Excel, SQL, etc) using the power of automation",
      description:
        "Get data from different files together & automate the process to reduce your workload by up to 1.5 hours daily.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 shrink">
      <div className="grid sm:grid-cols-1  lg:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`bg-gray-100 border border-gray-300 rounded-lg flex items-start mx-auto ${
              index === data.length - 1 ? "col-span-full lg:col-span-2" : ""
            }`}
            style={{ maxWidth: "570px", height: "180px" }} // Set a max-width instead of a fixed width
          >
            {/* Image */}
            <div className="flex-shrink-0 items-center">
              <img
                src={item.img}
                alt="logo"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            {/* Text content */}
            <div className="ml-8">
              <h3 className="lg:text-[22px] sm:text-[15px] text-[16px] font-bold">
                {item.title}
              </h3>
              <p className="lg:text-[16px] sm:text-[12px] text-[14px] mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        <div className="col-span-full flex justify-center">
          <PromotionCard />
        </div>
      </div>
      <p className="text-3xl text-center font-bold my-4">
        Register before <span className="text-orange-500">March 30, 2024</span>{" "}
        to unlock bonuses worth{" "}
        <span className="text-orange-500">₹ 16,000 </span>
      </p>
    </div>
  );
};

export default Analysis;
