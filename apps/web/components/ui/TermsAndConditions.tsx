import React from 'react'

interface Section {
  id: number;
  title: string;
  content?: string[];
  subsections?: string[];
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
      "The following general terms and conditions apply to agreements with Hassaan Travel. Please read these general terms and conditions carefully before using the website. By opening and using the website, you indicate that you unconditionally and irrevocably agree to these general terms and conditions. If you do not agree, we ask that you refrain from using our website and leave it immediately.",
  },

  sections: [
    {
      id: 1,
      title: "Definitions",
      subsections: [
        "In these general terms and conditions, the following definitions apply:",
        "GDPR: General Data Protection Regulation.",
        "Booking: A flight ticket that has been confirmed.",
        "BW: Dutch Civil Code.",
        "Third Party: Any person, authority, institution, or (airline) company not belonging to Hassaan Travel.",
        "HT: Hassaan Travel: general partnership (VOF) registered at Dordtselaan 67 D, 3081 BG Rotterdam, under Chamber of Commerce (KVK) number 81525818.",
        "IATA: International Air Transport Association.",
        "Customer: A person who wishes to purchase / has purchased a flight ticket.",
        "Quotation: A proposal made to a potential customer. Prices stated are always subject to change and may vary if the booking is not confirmed immediately.",
        "Agreement: An arrangement between Hassaan Travel and a customer whereby they agree to the purchase of a flight ticket.",
        "Reservation: The reservation of a flight ticket for a specific day or time, the price of which may still change if it is not confirmed immediately.",
        "Travel Document: A document used by the customer to travel. This includes a passport, identity card, business passport, diplomatic or service passport, alien's or refugee passport, emergency passport, or a laissez-passer.",
        "Fee: Administrative costs charged by Hassaan Travel for the services it provides.",
      ],
      image: "/assets/terms.webp",
    },
    {
      id: 2,
      title: "Offer and Agreement",
      subsections: [
        "2.1. HT offers flight tickets without obligation and may withdraw them at any time. The prices shown are subject to change and may vary if not confirmed immediately. An agreement between HT and the customer is established once full payment has been made and the flight ticket has thereby been confirmed.",
        "2.2. The agreement is established at the moment the customer confirms the booking. Confirmation takes place by e mail, WhatsApp, or verbally.",
        "2.3. By entering into the agreement, the customer agrees to these general terms and conditions. This is also the moment at which the general terms and conditions take effect.",
      ],
    },
    {
      id: 3,
      title: "Payment",
      subsections: [
        "3.1. Payment is made before the flight ticket is confirmed. The flight ticket is confirmed after payment.",
        "3.2. If full payment is not made, no booking will take place and the price may change. Furthermore, no booking will have taken place, and the proposed flight ticket may no longer be available.",
        "3.3. Payment is made by bank transfer, debit or credit card, or in cash.",
      ],
    },
    {
      id: 4,
      title: "Price Changes",
      subsections: [
        "4.1. The price of the flight ticket may change if it is not confirmed immediately. This may be due to factors including fuel costs, levies, surcharges, taxes, and exchange rates.",
        "4.2. Once a ticket has been definitively booked, the price is fixed and can no longer change.",
      ],
    },
    {
      id: 5,
      title: "Personal Data",
      subsections: [
        "5.1. The customer is personally responsible for providing a travel document that is valid for at least six months and on which the personal data are correct. If the customer travels with an invalid travel document, HT cannot be held liable for this. HT prepares the flight ticket based on the details stated on the travel document. Insofar as this travel document contains errors, HT cannot be held liable for this either.",
        "5.2. HT also asks the customer to check the travel document and ticket for accuracy. The details on the flight ticket must match the personal data stated on the travel document. Changing tickets will result in HT charging a fee for doing so.",
        "5.3. All personal data of the customer are collected and processed by HT in accordance with HT's privacy statement.",
      ],
    },
    {
      id: 6,
      title: "Changing the Flight Ticket by the Customer",
      subsections: [
        "6.1. Changing a flight ticket is possible up to 24 hours before departure. HT may charge a fee for the change. This fee depends on the customer's requested change.",
        "6.2. If a change needs to be made within 24 hours before departure, HT may charge an additional fee for this. This fee depends on the customer's requested change.",
      ],
    },
    {
      id: 7,
      title: "Cancellation",
      subsections: [
        "7.1. Cancelling a flight ticket is possible up to 24 hours before departure. The costs for this differ per airline. The cancellation costs are entirely for the customer's account. HT bears no responsibility or liability whatsoever in this regard.",
        "7.2. In the event of cancellation of the flight ticket, a fee is charged for the services provided by HT.",
        "7.3. If an airline does not have a cancellation policy and cancelling a flight ticket is not possible, HT will inform the customer of this before the booking is confirmed.",
        "7.4. Natural disasters, riots, and force majeure situations do not give rise to liability. In the event of a natural disaster or serious safety issues at the destination of the flight ticket that may affect the customer's trip, HT reserves the right to cancel the flight ticket.",
      ],
    },
    {
      id: 8,
      title: "Changes and/or Cancellations by the Airline",
      subsections: [
        "8.1. HT cannot be held liable for changes and cancellations of flights made by third parties. No third party belongs to HT.",
      ],
    },
    {
      id: 9,
      title: "Limited Liability",
      subsections: [
        "9.1. Under no circumstances can HT be held liable for any direct, special, indirect, incidental, or consequential damages (including, among other things, loss of income or profit), exemplary or incidental damages, damages of any kind whatsoever, or subject to equitable or imposed remedies (based on breach of contract, tort, negligence, strict liability, or otherwise) arising from:",
        "• Access to or use of this website, the inability to use this website or delays in doing so, or any information on this website; or,",
        "• The availability and usability of products and services (with the exception of air transport carried out by us).",
      ],
    },
    {
      id: 10,
      title: "IATA",
      subsections: [
        "10.1. HT is affiliated with IATA. This means that HT books flight tickets directly with the airline and that there is no intermediary.",
      ],
    },
    {
      id: 11,
      title: "Travel",
      subsections: [
        "11.1. HT is not responsible or liable for any complications/problems experienced by the customer during his or her trip. If a problem arises before the customer has checked in, or during check-in at the airport, HT can, together with the customer, look for an appropriate solution or resolve the problem to the extent HT is able to.",
        "11.2. Once the customer has completed check-in at the airport, HT is no longer responsible or liable for the customer's booking, unless the check-in is cancelled.",
        "11.3. Cancelling after check-in is not always possible. This is only possible where the airline's policy allows it. This policy depends on the fare applicable to the flight ticket at that time.",
      ],
    },
    {
      id: 12,
      title: "Travel Document and Visa",
      subsections: [
        "12.1. The customer is personally responsible for providing a travel document that is valid for at least six months and on which the personal data are correct. In addition, the customer is personally responsible for holding a valid visa (if required), unless it has been agreed with HT that HT will also take care of the visa.",
        "12.2. If HT takes care of the visa, HT will charge a fee for this. The customer is personally responsible for researching the visa requirements applicable in the country to which the customer is travelling.",
      ],
    },
    {
      id: 13,
      title: "Non-Compliance with Payment Obligation by the Customer",
      subsections: [
        "13.1. This article applies to agreements in which HT has purchased the flight ticket for the customer, but payment by the customer has not yet been made.",
        "13.2. If HT establishes that the customer is in default, HT will notify the customer of this by registered letter. Article 6:82 of the Dutch Civil Code (BW) applies here. The notice period to be observed for the notice of default is fourteen days.",
        "13.3. If, even after a second notice of default, the customer still fails to fulfil its payment obligation, HT may dissolve the agreement between HT and the customer. Articles 6:265 up to and including 279 of the Dutch Civil Code (BW) apply here.",
        "13.4. If the agreement is dissolved due to the customer's failure to fulfil the payment obligation as referred to in Article 12.3, the flight ticket will be cancelled with the airline from which it was purchased. The cancellation costs for the flight ticket will be charged to the customer. HT will also charge a fee for the services it has provided.",
        "13.5. The customer is at all times obliged to reimburse the extrajudicial costs. These costs depend on the outstanding costs owed by the customer.",
      ],
    },
    {
      id: 14,
      title: "Dutch Law",
      subsections: [
        "14.1. Dutch law applies to HT's agreements and to these general terms and conditions.",
      ],
    },
    {
      id: 15,
      title: "Applicability",
      subsections: [
        "15.1. HT's general terms and conditions apply to every quotation, reservation, agreement, and booking between HT and the customer. They also apply to all third parties with whom HT enters into agreements and/or orders flight tickets for the customer.",
        "15.2. The law applicable is that which was in force on Tuesday, 1 April 2025.",
        "15.3. HT may amend these general terms and conditions at any time without prior notice. Amended terms and conditions take effect upon publication on the website and do not apply retroactively to existing contractual arrangements entered into via this website or otherwise. If you continue to use this website after any amendment, this means that you have accepted the amended general terms and conditions.",
      ],
    },
    {
      id: 16,
      title: "Personal Data",
      subsections: [
        "16.1. HT requests personal information when making a booking. The personal data HT receives is used solely to provide the service or to deliver the relevant travel product. HT will never disclose personal data to persons or companies for commercial exploitation without the customer's explicit consent.",
      ],
    },
    {
      id: 17,
      title: "Disputes",
      subsections: [
        "17.1. If disputes arise between HT and the customer to which these general terms and conditions apply, both parties are obliged to resolve the dispute between themselves. If this is not possible, the District Court of Rotterdam has jurisdiction to hear the case.",
      ],
    },
    {
      id: 18,
      title: "Invalidity",
      subsections: [
        "18.1. These general terms and conditions have been drawn up with great care. Should it be established that a provision in these general terms and conditions is invalid or unenforceable, the remaining provisions shall remain in full force.",
        "18.2. The parties shall replace the invalid or unenforceable provisions with provisions that, in nature and purport, correspond as closely as possible to the effect of the invalid or unenforceable provisions.",
      ],
    },
    {
      id: 19,
      title: "Entire Agreement",
      subsections: [
        "19.1. These general terms and conditions and any other legal notices, policies, and guidelines of HT associated with these general terms and conditions constitute the entire agreement between you and HT regarding your use of this Website, and supersede all prior arrangements or agreements (whether oral or written), claims, representations, and understandings of or between the parties regarding this subject matter. The terms and conditions may only be changed or amended by making such changes or amendments available on this website.",
      ],
    },
    {
      id: 20,
      title: "Warranty and Claims",
      subsections: [
        "20.1. To the extent permitted under applicable law, HT disclaims all representations, warranties, and undertakings regarding the information, software, products, and services on this website.",
        "20.2. As part of good service, HT assists its customers in filing a damage claim with a third party.",
      ],
    },
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
          <span className="text-[#0F91D5]">
            <br />
            {termsData.hero.title.highlight}
          </span>
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

        {/* REST OF THE SECTIONS (Article 3 onward) */}
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
