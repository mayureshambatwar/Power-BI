import React from 'react'

const Headline = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 w-full py-8 px-4">
    {/* Main text content */}
    <p className="text-white text-center text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-snug mb-8">
      "Power BI has been the #1 BI Tool for 4 years now & just by learning it,
      my students have received high paying jobs (12LPA+), gotten promotions
      in their company & leveraged the true power of data."
    </p>

    {/* Highlighted green text */}
    <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
      <span className="text-lime-400">
        Don't just take my word for it, here's some proof for you to see...
      </span>
    </p>
  </div>
  )
}

export default Headline