import React from "react";
const HeadingAndDesc = ({head,desc}:{head:string | React.ReactNode,desc:string | React.ReactNode}) => {
  return (
    <section>
      <div className=" mb-10">
        <h2 className="text-3xl md:text-4xl font-bold ">
          {head}
        </h2>
        <div className=" mt-2 text-sm max-w-xl mx-auto lg:text-lg  whitespace-pre-line">
          {desc}
        </div>
      </div>
    </section>
  );
};

export default HeadingAndDesc;
