// Product.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faFilePowerpoint,
  faScrewdriverWrench,
  faFileExcel,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import "./Product.css"; // Import the CSS file
import PromotionCard from "./PromotionCard";

const Product = () => {
  const products = [
    {
      icon: faFileLines,
      text: "Complete guide on installing Power BI for FREE for your system",
      bonus: "Bonus 1",
      worth: "Worth Rs 2,000",
      iconColor: "#46c878",
    },
    {
      icon: faFilePowerpoint,
      text: "1400+ PPT Customisable Templates to make beautiful presentations",
      bonus: "Bonus 2",
      worth: "Worth Rs 6,500",
      iconColor: "#6bdb87",
    },
    {
      icon: faScrewdriverWrench,
      text: "Index Creation VBM tool to automatically create indexes",
      bonus: "Bonus 3",
      worth: "Worth Rs 1,500",
      iconColor: "#5ee88f",
    },
    {
      icon: faFilePowerpoint,
      text: "10,000 Infographics & Icon Sets To Showcase Data",
      bonus: "Bonus 4",
      worth: "Worth Rs 3,000",
      iconColor: "#6bdb87",
    },
    {
      icon: faFileExcel,
      text: "Essential Excel Shortcut Handbook to save hours of your time",
      bonus: "Bonus 5",
      worth: "Worth Rs 1,000",
      iconColor: "#53d07f",
    },
    {
      icon: faNoteSticky,
      text: "Detailed Notes For everything Learned in the Workshop For reference",
      bonus: "Bonus 6",
      worth: "Worth Rs 2,000",
      iconColor: "#53c165",
    },
  ];

  return (
    <div className="bonusboxes">
      {products.map((product, index) => (
        <div className="grayboxes" key={index}>
          <FontAwesomeIcon
            icon={product.icon}
            style={{ color: product.iconColor }}
            className="icon"
          />
          <p>{product.text}</p>
          <div className="bonusbox1">{product.bonus}</div>
          <div className="worthbox1">{product.worth}</div>
        </div>
      ))}

      <div className="col-span-full flex justify-center">
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

export default Product;
