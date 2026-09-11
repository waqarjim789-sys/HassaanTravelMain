"use client";

import { useLanguage } from "@/components/LanguageProvider";
import {
  homepageTranslations,
  type LanguageCode,
  type ReviewKey,
} from "@/translations/homepage";

type Props = {
  bgImage?: string; // optional
};

type Review = {
  key: ReviewKey;
  name: string;
  avatarLetter: string;
  avatarBg: string;
  /** How many months ago the review was left */
  monthsAgo: number;
  rating: number;
};

// Total number of Google reviews shown next to the score
const TOTAL_REVIEWS = 243;

const reviewsData: Review[] = [
  {
    key: "zafarBaig",
    name: "Zafar Baig",
    avatarLetter: "Z",
    avatarBg: "bg-orange-600",
    monthsAgo: 1,
    rating: 5,
  },
  {
    key: "maryamNawaz",
    name: "Maryam Nawaz",
    avatarLetter: "M",
    avatarBg: "bg-purple-600",
    monthsAgo: 5,
    rating: 5,
  },
  {
    key: "armghanAli",
    name: "Armghan Ali",
    avatarLetter: "A",
    avatarBg: "bg-teal-600",
    monthsAgo: 7,
    rating: 5,
  },
];

const Testimonials = ({ bgImage }: Props) => {
  const { language } = useLanguage();

  const t =
    homepageTranslations[language as LanguageCode] || homepageTranslations.en;

  const tt = t.testimonials;
  const en = homepageTranslations.en.testimonials;

  const formatTime = (monthsAgo: number) =>
    monthsAgo === 1
      ? tt.monthAgo
      : tt.monthsAgo.replace("{count}", String(monthsAgo));

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
          {tt.heading}
        </h2>
        
        {/* Google ACCREDITED Rating Info */}
        <div className="flex items-center gap-1 mb-8 sm:mb-12">
          <span className="text-lg font-bold text-gray-700">
            {tt.ratingValue}
          </span>
          <div className="flex text-amber-400 text-sm">
            {"★".repeat(5)}
          </div>
          <span className="text-xs text-gray-500 font-medium">
            {tt.reviewsCount.replace("{count}", String(TOTAL_REVIEWS))}
          </span>
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
                  <p className="text-xs text-gray-400 mt-0.5">
                    {formatTime(review.monthsAgo)}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex text-amber-400 text-lg mb-3">
                {"★".repeat(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
                &quot;{tt.reviews[review.key] || en.reviews[review.key]}&quot;
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
          <span>{tt.cta}</span>
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
