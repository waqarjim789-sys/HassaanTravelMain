"use client";

import React from "react";

interface Section {
  id: number;
  title: string;
  subtitle?: string;
  listItems?: string[];
  note?: string;
  email?: string;
  hasSubtitles?: boolean;
  subtitles?: string[];
}

const PrivacyPolicy = () => {
  // Saara data direct object array ke andar embed kar diya hai
  const sectionsData: Section[] = [
    {
      id: 1,
      title: "1. AVG",
      subtitle: "All data provided to HT is subject to the AVG",
    },
    {
      id: 2,
      title: "2. Personal data",
      subtitle: "HT asks for personal data when making a booking. The personal data received by HT it uses solely to provide the service or supply the relevant travel product. HT requests personal data that is adequate, relevant and do not contain excessive information. Under personal data means:",
      listItems: [
        "Name, address and residential data",
        "Gender",
        "Date of birth",
        "Phone number",
        "Email Address",
        "Payment details",
        "Copy of passport",
      ],
    },
    {
      id: 3,
      title: "3. Provision of data to third parties",
      subtitle: "In order to provide the good service HT strives for, it is necessary to share personal data with third parties providing the booked services and products. For these services and products, HT engages third parties. HT has taken contractual and organisational measures to ensure that personal data is only used for the purposes previously mentioned.",
      note: "HT will never provide customer personal data to individuals or companies for commercial exploitation.",
    },
    {
      id: 4,
      title: "4. Inspection",
      subtitle: "Customers always have the right to access their personal data.",
    },
    {
      id: 5,
      title: "5. Correction",
      subtitle: "At the customer's request, HT may change personal data.",
    },
    {
      id: 6,
      title: "6. Removal",
      subtitle: "At the customer's request, HT may delete personal data.",
    },
    {
      id: 7,
      title: "7. Retention period",
      subtitle: "HT stores personal data for a period of three calendar years from the time of booking. After this, the data is automatically deleted.",
    },
    {
      id: 8,
      title: "8. Changes",
      subtitle: "HT is entitled to amend or renew the terms of use of its privacy statement at any time without any obligation to notify users. The customer shall at all times be bound by the terms of use in force at that time.",
    },
    {
      id: 9,
      title: "9. Website",
      subtitle: "If you use our website, the following data will be processed:",
      listItems: [
        "Your IP address, the type and language of your browser, the time of your visit and the web address from which you reached our website, the pages you view on it, the links (links) you click on and the other actions you take. We use cookies for this purpose."
      ],
    },
    {
      id: 10,
      title: "10. Cookies",
      hasSubtitles: true,
      subtitles: [
        "HT uses cookies on its website. When accepting cookies, you can choose from two settings: ‘Functional and analytical cookies’ and ‘Personal within and outside the website.",
        "You can choose ‘No, set yourself’ or ‘Yes, that's fine’. ‘No, set yourself’ means you choose ‘Functional and analytical cookies’. In this case, only functional and statistical cookies will be set. These cookies ensure that our website functions properly, that we can measure the use of our website and can quickly remedy problems. We also use these cookies to prevent fraud and to secure our website. You cannot disable the functional and analytical cookies.",
        "If you choose ‘Yes, that's fine’, it means you are opting for ‘Personal cookies for both inside and outside the website.’ In this case, we set social media cookies and advertising cookies in addition to functional and statistical cookies. Social media cookies are intended for sharing the content of our websites via social media. Advertising cookies are intended to measure how often an advertisement on our website has been viewed. We combine the information we collect with these social media and advertising cookies with the contact and usage data we have from you because you are a customer of ours. This allows us to improve our website and our services and show ads and offers that better suit you."
      ],
    },
    {
      id: 11,
      title: "11. Provision of data to competent authorities",
      subtitle: "HT is legally obliged to share your data with third parties in some cases. You can think of the provision of data to competent authorities for detection and a criminal investigation.",
    },
    {
      id: 12,
      title: "12. Contact",
      subtitle: "Do you have any questions and/or comments about our privacy statement? If so, please email us at ",
      email: "info@hassaantravel.nl",
    },
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden min-h-125 flex items-center justify-center w-full">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
        style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
      />

      {/* CARD CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">
        
        {/* HERO HEADING */}
        <h2 className="text-4xl font-bold mb-3">
          Privacy <span className="text-[#0F91D5]">Policy</span>
        </h2>

        {/* INTRO DESCRIPTION */}
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          The protection of your personal data is of great importance to Hassaan Travel (hereinafter ‘HT’). On this page we explain to you, how we handle your data. HT's privacy statement has been prepared in accordance with the General Data Protection Regulation (hereinafter ‘AVG’) and is for all persons who purchase a service or product from HT.
        </p>

        {/* FIRST TWO COLUMN SECTION (Article 1 & 2 side by side with Image) */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            {sectionsData.slice(0, 2).map((section) => (
              <div key={section.id} className="mb-6">
                <h3 className="text-[#0F91D5] font-bold">
                  {section.title}
                </h3>
                
                {section.subtitle && (
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">
                    {/* Yahan text-black kar diya gaya hai */}
                    <span className="text-black font-semibold">{section.id}.1 </span>
                    {section.subtitle}
                  </p>
                )}

                {section.listItems && (
                  <ul className="list-disc ml-5 text-sm text-gray-700 mt-2 space-y-1">
                    {section.listItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* SIDE IMAGE GRAPHIC */}
          <div className="flex justify-center items-start pt-4">
            <img
              src="/assets/terms.webp"
              alt="Privacy Policy Graphic"
              className="w-full max-w-md max-h-90 object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* REST OF THE SECTIONS (Article 3 onwards dynamically) */}
        <div className="mt-10 space-y-8">
          {sectionsData.slice(2).map((section) => (
            <section key={section.id}>
              <h3 className="text-[#0F91D5] font-bold text-lg">
                {section.title}
              </h3>

              {/* Normal layout with single subtitle */}
              {!section.hasSubtitles && section.subtitle && (
                <p className="text-sm text-gray-700 leading-relaxed mt-2">
                  {/* Yahan bhi text-black kar diya gaya hai */}
                  <span className="text-black font-semibold">{section.id}.1 </span>
                  {section.subtitle}
                  
                  {/* Inline Email handler for Section 12 logic balance */}
                  {section.email && (
                    <a
                      href={`mailto:${section.email}`}
                      className="inline-block font-semibold text-[#0F91D5] underline cursor-pointer text-sm ml-1"
                    >
                      {section.email}
                    </a>
                  )}
                </p>
              )}

              {/* Special layout for Article 10 (Multi-line subtitles) */}
              {section.hasSubtitles && section.subtitles?.map((subText, subIdx) => (
                <p key={subIdx} className="text-sm text-gray-700 leading-relaxed mt-2">
                  {/* Yahan bhi text-black kar diya gaya hai */}
                  <span className="text-black font-semibold">
                    {section.id}.{subIdx + 1}{" "}
                  </span>
                  {subText}
                </p>
              ))}

              {/* Note / Italic text if available (Section 3) */}
              {section.note && (
                <p className="text-sm text-gray-700 italic mt-2 font-medium">
                  {section.note}
                </p>
              )}

              {/* List items for section 9 or any other */}
              {section.listItems && (
                <ul className="list-disc ml-5 text-sm text-gray-700 mt-1">
                  {section.listItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;