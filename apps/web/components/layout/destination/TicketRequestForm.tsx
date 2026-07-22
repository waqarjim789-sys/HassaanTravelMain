"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { FaPlane, FaUser, FaPassport, FaEnvelope } from "react-icons/fa";

type TripType = "Round Trip" | "One Way" | "Multi-City";
type FormDataType = { [key: string]: string };
type FieldType = { label: string; name: string; type?: string; full?: boolean; options?: string[] };
type SectionType = { title: string; icon: React.ReactNode; fields: FieldType[] };
type SubmitStatus = "idle" | "loading" | "success" | "error";

const formSections: SectionType[] = [
  {
    title: "Flight Details",
    icon: <FaPlane size={12} className="text-[#0F91D5]" />,
    fields: [
      { label: "From (Departure City)", name: "from" },
      { label: "To (Destination City)", name: "to" },
      { label: "Next City", name: "nextCity" },
      { label: "Departure Date", name: "departure", type: "date" },
      { label: "Return Date", name: "return", type: "date" },
      { label: "Your Class", name: "travelClass", full: true, options: ["Economy Class", "Business Class", "First Class"] },
    ],
  },
  {
    title: "Passenger Information",
    icon: <FaUser size={12} className="text-[#0F91D5]" />,
    fields: [
      { label: "Given Name", name: "firstName" },
      { label: "Middle Name", name: "middleName" },
      { label: "Last Name", name: "lastName" },
      { label: "Nationality", name: "nationality" },
      { label: "Date of Birth", name: "dob", type: "date", full: true },
    ],
  },
  {
    title: "Passport Information",
    icon: <FaPassport size={12} className="text-[#0F91D5]" />,
    fields: [
      { label: "Passport Number", name: "passport" },
      { label: "Date of Issue", name: "issueDate", type: "date" },
      { label: "Date of Expiry", name: "expiryDate", type: "date", full: true },
    ],
  },
  {
    title: "Contact Information",
    icon: <FaEnvelope size={12} className="text-[#0F91D5]" />,
    fields: [
      { label: "Email Address", name: "email", type: "email" },
      { label: "Phone Number", name: "phone", type: "tel" },
    ],
  },
];

const TicketRequestForm = () => {
  const [tripType, setTripType] = useState<TripType>("Round Trip");
  const [formData, setFormData] = useState<FormDataType>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "ticket", tripType, ...formData }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isRequiredField = (fieldName: string) => {
    const nonRequiredFields = ["middleName", "passport", "issueDate", "expiryDate", "dob", "nationality"];
    if (nonRequiredFields.includes(fieldName)) return false;
    if (tripType === "One Way" && fieldName === "return") return false;
    if (fieldName === "nextCity" && tripType !== "Multi-City") return false;
    return true;
  };

  return (
    <section className="relative w-full min-h-[70vh] py-12 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 -z-30 w-full h-full">
        <Image src="/assets/bgimage/h1.webp" alt="" fill priority className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)]" />
      <div className="absolute inset-0 -z-10 bg-white/35" />

      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            <span className="text-black">Air Ticket</span>{" "}
            <span className="text-[#0F91D5]">Request Form</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Fill out the form below and our travel experts will find you the best flight deals<br /> within 24 hours
          </p>
        </div>

        <div className="flex gap-3 mb-6">
          {(["Round Trip", "One Way", "Multi-City"] as TripType[]).map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setTripType(type)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all shadow-xs ${
                tripType === type ? "bg-[#0F91D5] text-white shadow-md shadow-blue-500/10" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {formSections.map((section) => (
            <div key={section.title} className="mb-8">
              <div className="flex items-center gap-2 mb-4 font-semibold text-sm text-gray-900">
                {section.icon}
                {section.title}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {section.fields.map((field) => {
                  if (tripType === "One Way" && field.name === "return") return null;
                  if (tripType !== "Multi-City" && field.name === "nextCity") return null;
                  
                  const isCompulsory = isRequiredField(field.name);

                  return (
                    <div key={field.name} className={field.full ? "sm:col-span-2" : ""}>
                      <label className="text-xs text-gray-600 mb-1 block">
                        {field.label} {isCompulsory && <span className="text-red-600 font-bold ml-0.5">*</span>}
                      </label>
                      {field.options ? (
                        <select
                          required={isCompulsory}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md text-sm focus:border-[#0F91D5] focus:ring-1 focus:ring-[#0F91D5]/30 outline-none transition-all bg-white/80"
                        >
                          <option value="">Select class</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          required={isCompulsory}
                          type={field.type || "text"}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md text-sm focus:border-[#0F91D5] focus:ring-1 focus:ring-[#0F91D5]/30 outline-none transition-all bg-white/80"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {status === "success" && (
            <p className="text-green-600 text-sm text-center mb-4">✅ Request sent! We'll get back to you within 24 hours.</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center mb-4">❌ Something went wrong. Please try again.</p>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#0F91D5] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-md transition-all duration-200 hover:bg-blue-600 hover:shadow-lg disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TicketRequestForm;