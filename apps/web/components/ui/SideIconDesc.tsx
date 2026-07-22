import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface SideIconDescProps {
  data: { head?: string | React.ReactNode; details?: string; data: Props[] };
}

const SideIconDesc = ({ data }: SideIconDescProps) => {
  return (
    // Background image aur style tag hata diya hai, ab yeh clean background hai
    <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 relative container mx-auto">
      <div className="text-center">
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold">{data.head}</h2>

        <p className="text-gray-600 mt-2 mb-12 px-2">{data.details}</p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-6 sm:gap-8 px-0 sm:px-4 md:px-8">
        {data.data.map((item, ind) => (
          <div
            key={ind}
            // Cards ka background transparent se badal kar solid white (bg-white) ya shadow smooth kar diya hai
            className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition flex-1 "
          >
            {/* ICON */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center rounded-xl bg-[#0F91D5] text-white text-lg sm:text-xl shadow">
              {item.icon}
            </div>

            <h3 className="font-semibold text-base sm:text-lg text-black">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* PARTNERS */}
    </section>
  );
};

export default SideIconDesc;
