"use client";

import { useState } from "react";
import { PackageModalProps, EsimPackage } from "./types";
import PaymentDialog from "./PaymentDialog";

export default function PackageModal({
  country,
  onClose,
}: PackageModalProps) {
  const [selectedPackage, setSelectedPackage] =
    useState<EsimPackage | null>(null);

  if (!country) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b">

            <div className="flex justify-between items-center">

              <div>

                <h2 className="text-3xl font-bold">
                  {country.flag} {country.country}
                </h2>

                <p className="text-gray-500 mt-2">
                  Choose your eSIM package
                </p>

              </div>

              <button
                onClick={onClose}
                className="text-3xl text-gray-500 hover:text-black"
              >
                ×
              </button>

            </div>

          </div>

          {/* Packages */}

          <div className="p-6 space-y-5">

            {country.packages.map((pkg) => (

              <div
                key={pkg.id}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#0F91D5] hover:shadow-lg transition"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">

                  <div>

                    <h3 className="text-xl font-bold">
                      {pkg.title}
                    </h3>

                    <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">

                      <div>
                        <strong>Data:</strong> {pkg.data}
                      </div>

                      <div>
                        <strong>Validity:</strong> {pkg.days} Days
                      </div>

                      <div>
                        <strong>Coverage:</strong> {pkg.coverage}
                      </div>

                      <div>
                        <strong>Network:</strong> {pkg.network}
                      </div>

                      <div>
                        <strong>Operator:</strong> {pkg.operator}
                      </div>

                      <div>
                        <strong>Activation:</strong> {pkg.activation}
                      </div>

                    </div>

                  </div>

                  <div className="text-center">

                    <p className="text-3xl font-bold text-[#0F91D5]">
                      €{pkg.price.toFixed(2)}
                    </p>

                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="mt-4 w-full lg:w-auto bg-[#0F91D5] hover:bg-[#0d80bd] text-white px-8 py-3 rounded-xl font-semibold transition"
                    >
                      Buy Now
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </div>

      <PaymentDialog
        open={selectedPackage !== null}
        packageItem={selectedPackage}
        country={country}
        onClose={() => setSelectedPackage(null)}
      />
    </>
  );
}