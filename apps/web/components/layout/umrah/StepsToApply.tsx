import React from "react";

const stepsData = {
  // Heading ko JSX ke andar hi custom handle kiya hai niche text structuring ke liye
  steps: [
    {
      id: 1,
      title: "Determine the Appropriate Visa",
      image: "/assets/umrah/step-1.webp",
      alt: "Step 1",
    },
    {
      id: 2,
      title: "Gather Required Documents",
      image: "/assets/umrah/step-2.webp",
      alt: "Step 2",
    },
    {
      id: 3,
      title: "Complete the Visa Application Form",
      image: "/assets/umrah/step-3.webp",
      alt: "Step 3",
    },
  ],
};

const StepsToApply = () => {
  return (
    <div className="relative mx-auto px-4 text-center py-10 bg-linear-to-br from-[#E0F4FF] to-[#D8F2FF]">
      {/* SECOND HEADING: Forcefully broken down into two distinct centered lines */}
      <h2 className="text-3xl font-bold text-black mb-14 text-center">
        <div>How to Apply for Your Umrah Visa</div>
        <div> Online</div>
      </h2>

      {/* STEPS */}
      <div className="flex flex-wrap justify-center gap-8">
        {stepsData.steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center w-95 bg-white rounded-xl p-5"
          >
            <img
              src={step.image}
              alt={step.alt}
              className="w-20 h-20 mr-5"
            />

            <p className="text-base font-semibold text-[#2d2d2d] text-left">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsToApply;