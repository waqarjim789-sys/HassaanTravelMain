"use client";

type Props = {
  bgImage?: string; // optional
};

type Review = {
  name: string;
  avatarLetter: string;
  avatarBg: string;
  time: string;
  rating: number;
  text: string;
};

const reviewsData: Review[] = [
  {
    name: "Zafar Baig",
    avatarLetter: "Z",
    avatarBg: "bg-orange-600",
    time: "A month ago",
    rating: 5,
    text: "Great experience with Hassaan Travel! The staff was friendly, professional, and made the whole booking process easy and stress-free. Everything was well organized, and they were always available to answer my questions. Highly recommend their services for a smooth and enjoyable travel experience!",
  },
  {
    name: "Maryam Nawaz",
    avatarLetter: "M",
    avatarBg: "bg-purple-600",
    time: "5 months ago",
    rating: 5,
    text: "Very professional and efficient service. I just bought 5 flight tickets at a great price with 40kg baggage allowance. Their communication was quick and clear. Highly recommended!",
  },
  {
    name: "Armghan Ali",
    avatarLetter: "A",
    avatarBg: "bg-teal-600",
    time: "7 months ago",
    rating: 5,
    text: "Had a wonderful experience with this travel agency Hassan Travel. Everything was well-organized and stress-free. The staff were friendly, helpful, and professional. Great communication and smooth arrangements throughout the process. Highly recommend their service!",
  },
];

const Testimonials = ({ bgImage }: Props) => {
  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-8 md:px-16 text-center overflow-hidden bg-gray-50/50">
      {/* ✅ Background Image */}
      {bgImage && (
        <img
          src={bgImage}
          loading="lazy"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
      )}

      {/* ✅ Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* 🔹 Exact Heading Kept Intact */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F91D5] mb-2">
          What Our Customers Say
        </h2>
        
        {/* Google ACCREDITED Rating Info */}
        <div className="flex items-center gap-1 mb-8 sm:mb-12">
          <span className="text-lg font-bold text-gray-700">4.9</span>
          <div className="flex text-amber-400 text-sm">
            {"★".repeat(5)}
          </div>
          <span className="text-xs text-gray-500 font-medium">(243 reviews)</span>
        </div>

        {/* ✅ Dynamic Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch mb-12">
          {reviewsData.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col text-left transition-all duration-300 hover:shadow-[0_8px_30px_rgb(15,145,213,0.1)] hover:-translate-y-1"
            >
              {/* Profile Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.avatarBg} shadow-sm`}>
                  {review.avatarLetter}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base leading-tight">
                    {review.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">{review.time}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex text-amber-400 text-lg mb-3">
                {"★".repeat(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Matching Call To Action Button (Same UI Color As Heading) */}
        <a
          href="https://www.google.com/search?q=Hassaan+Travel+Rotterdam" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0F91D5] hover:bg-[#0d80bc] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base group"
        >
          <span>Review Us on Google</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Testimonials;