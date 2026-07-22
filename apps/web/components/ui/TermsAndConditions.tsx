import React from 'react'

interface Section {
  id: number;
  title: string;
  content?: string[];
  subsections?: string[]; // Added to strictly map 1.1, 1.2 format smoothly
  list?: string[];
  image?: string;
  note?: string;
  email?: string;
}

interface TermsData {
  header: {
    heading: string;
  };

  hero: {
    title: {
      line1: string;
      highlight: string;
    };
    description: string;
  };

  sections: Section[];
}

const termsData: TermsData = {
  header: {
    heading: "Terms and Conditions",
  },

  hero: {
    title: {
      line1: "General Terms and Conditions",
      highlight: "",
    },
    description:
      "The following general terms and conditions apply. For questions regarding the general terms and conditions, please feel free to ask.",
  },

  sections: [
    {
      id: 1,
      title: "Definitions",
      subsections: [
        "1.1 HT. Hassaan Travel, VOF established at Dordtselaan 67 D, 3081 BG in Rotterdam under KVK number 81525818.",
        "1.2 Reservation. Booking an airline ticket for a specific day or time, the price of which may still change if not confirmed immediately.",
        "1.3 Customer. Person who wants to purchase/has purchased an airline ticket.",
        "1.4 Third. Any person/agency/institution/society not belonging to Hassaan Travel.",
        "1.5 Compensation. Compensation: Administrative fees charged by Hassaan Travel for its services rendered.",
        "1.6 Booking. Airline ticket confirmed.",
        "1.7 Quotation. Proposal made to a potential customer. Prices quoted are always subject to change and may change if the booking is not confirmed immediately.",
        "1.8 Travel document. Document used by customer to travel.",
        "1.9 Agreement. Agreement between Hassaan Travel and a customer agreeing to buy an airline ticket.",
        "1.10 IATA. International Air Transport Association.",
        "1.11 BW. Civil Code.",
        "1.12 AVG. General Data Protection Regulation."
      ],
      image: "/assets/terms.webp",
    },
    {
      id: 2,
      title: "Our Offers",
      subsections: [
        "2.1. HT offers flight tickets without obligation and may revoke them at any time. The prices shown are subject to change and may change if not confirmed immediately. An agreement between HT and the customer arises when full payment has been made and the airline ticket is thereby confirmed.",
        "2.2. When entering into the agreement, the customer agrees to the general terms and conditions. This is also when the general terms and conditions enter into force."
      ]
    },
    {
      id: 3,
      title: "Payment",
      subsections: [
        "3.1. Payment will be made before the air ticket is confirmed. After payment is made, the air ticket will be confirmed. If full payment has not been made, no booking will take place and the price may change. Also, no booking has taken place and the proposed air ticket may no longer be available."
      ]
    },
    {
      id: 4,
      title: "Price change",
      subsections: [
        "4.1. The air ticket price is subject to change if not confirmed immediately. This may happen due to fuel costs, charges, price surcharges, taxes and exchange rates, among others."
      ]
    },
    {
      id: 5,
      title: "Personal data",
      subsections: [
        "5.1. The customer is responsible for providing a travel document that is valid for at least six months and on which the personal details are correct. If the customer travels with an invalid travel document, HT cannot be held liable for this. HT will prepare an airline ticket based on the details provided on the travel document.",
        "5.2. Therefore, HT asks the customer to check the travel document and ticket carefully for the correctness of these. The details on the air ticket should match the personal details on the travel document. Changing tickets will result in HT charging a fee for this."
      ]
    },
    {
      id: 6,
      title: "Modification of flight ticket by customer",
      subsections: [
        "6.1. Changing an airline ticket is possible up to 24 hours before departure. HT may charge a fee for changes.",
        "6.2. If a change needs to be made within 24 hours before departure, HT may charge an additional fee for this."
      ]
    },
    {
      id: 7,
      title: "Cancellation",
      subsections: [
        "7.1. Cancelling an airline ticket is possible up to 24 hours before departure. The costs for this differ per airline. The cost of cancellation is borne entirely by the customer. HT bears no responsibility or liability whatsoever in this regard. If the flight ticket is cancelled, a fee will be charged for the services provided by HT.",
        "7.2. It may be that an airline does not have a cancellation policy and with this the air ticket cannot be cancelled. If this is the case, HT will mention this to the customer before confirming the booking."
      ]
    },
    {
      id: 8,
      title: "Changes and/or cancellations by airline",
      subsections: [
        "8.1. HT cannot be held liable for changes and cancellations of flights made by third parties. Any third party does not belong to HT. In case of ticket cancellation, HT will always charge a fee for its services rendered."
      ]
    },
    {
      id: 9,
      title: "IATA",
      subsections: [
        "9.1. HT is a member of IATA. This means HT books flight tickets directly with the airline and there is no middleman."
      ]
    },
    {
      id: 10,
      title: "Travel",
      subsections: [
        "10.1. HT is neither responsible nor liable for complications/problems experienced by the customer during his or her journey. If a problem arises before the customer is checked in or during check-in at the airport, HT may work with the customer to find a suitable solution or solve the problem to the extent HT can.",
        "10.2. After the customer's check-in is completed, HT is neither responsible nor liable for the customer's booking."
      ]
    },
    {
      id: 11,
      title: "Travel document and visa",
      subsections: [
        "11.1. The customer himself/herself is responsible for providing a travel document that is valid for at least six months and on which the personal details are correct. In addition, the customer is responsible for possessing a valid visa (if necessary), unless it has been agreed with HT that they will also take care of the visa.",
        "11.2. If HT takes care of the visa, HT will charge a fee. The customer is responsible for researching the applicable visa requirements of the country the customer is traveling to."
      ]
    },
    {
      id: 12,
      title: "Non-compliance with payment obligation by customer",
      subsections: [
        "12.1. This article applies to agreements where HT has purchased the air ticket for the customer, but payment has not yet been made by the customer.",
        "12.2. If it is found by HT that the customer is in default, HT will notify the customer by registered letter. Section 6:82 of the Dutch Civil Code shall apply in this case. The period to be observed for the notice of default is seven days.",
        "12.3. If, even after a second notice of default, the customer does not fulfil its payment obligation, HT may terminate the agreement between it and the customer. Sections 6:265 to 279 of the Dutch Civil Code shall apply in this case.",
        "12.4. If the agreement is cancelled due to the customer's non-fulfilment of the payment obligation as referred to in article 12.3, the air ticket will be cancelled with the airline where it was purchased. The cancellation fee for the air ticket will be charged to the customer. HT will also charge a fee for the services provided by it."
      ]
    },
    {
      id: 13,
      title: "Dutch law",
      subsections: [
        "13.1. Agreements of HT and these general terms and conditions are governed by Dutch law."
      ]
    },
    {
      id: 14,
      title: "Applicability",
      subsections: [
        "14.1. HT's general terms and conditions apply to every offer, reservation, agreement and booking between HT and the customer. They also apply to all third parties with whom HT concludes agreements or orders flight tickets for the customer.",
        "14.2. Applicable law is that which was valid on Friday 26 August 2022."
      ]
    },
    {
      id: 15,
      title: "Personal data",
      subsections: [
        "15.1. To make a booking, HT requests personal information. HT uses the personal data it receives solely to provide the service or deliver the relevant travel product. HT will never provide personal data to individuals or companies for commercial exploitation without the customer's explicit consent."
      ]
    },
    {
      id: 16,
      title: "Disputes",
      subsections: [
        "16.1. If disputes occur between HT and the customer in which these general terms and conditions apply, both parties are obliged to resolve the dispute among themselves. If this is not possible, the court in Rotterdam shall have jurisdiction to hear the case."
      ]
    }
  ],
};

const TermsAndConditions = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden min-h-125 flex items-center justify-center w-full">
        {/* BACKGROUND IMAGE OVERLAY */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
        />
        
        {/* CARD */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">
          <h2 className="text-4xl font-bold mb-3">
            {termsData.hero.title.line1}{" "}
            <span className="text-[#0F91D5]"><br />{termsData.hero.title.highlight}</span>
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            {termsData.hero.description}
          </p>

          {/* FIRST TWO COLUMN SECTION (Article 1 and Article 2 with Image next to them) */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              {termsData.sections.slice(0, 2).map((section: Section) => (
                <div key={section.id} className="mb-6">
                  <h3 className="text-[#0F91D5] font-bold">
                    Article {section.id}. {section.title}
                  </h3>

                  {section.subsections?.map((item: string, index: number) => (
                    <p
                      key={index}
                      className="text-sm text-gray-700 leading-relaxed mt-2"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* IMAGE RIGHT ALIGNED */}
            <div className="flex justify-center items-start pt-4">
              <img
                src={termsData.sections[0]?.image}
                alt="Terms"
                className="w-full max-w-md max-h-90 object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* REST OF THE SECTIONS (Article 3 to Article 16) */}
          <div className="mt-10 space-y-8">
            {termsData.sections
              .slice(2)
              .map((section: Section) => (
                <section key={section.id}>
                  <h3 className="text-[#0F91D5] font-bold text-lg">
                    Article {section.id}. {section.title}
                  </h3>

                  {section.subsections?.map((item: string, index: number) => (
                    <p
                      key={index}
                      className="text-sm text-gray-700 leading-relaxed mt-2"
                    >
                      {item}
                    </p>
                  ))}
                </section>
              ))}
          </div>
        </div>
      </section>
  )
}

export default TermsAndConditions