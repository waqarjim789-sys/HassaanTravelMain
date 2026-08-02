"use client";

import { PaymentDialogProps } from "./types";

export default function PaymentDialog({
  open,
  packageItem,
  country,
  onClose,
}: PaymentDialogProps) {
  if (!open || !packageItem || !country) return null;

  const handleING = () => {
    alert(
      "ING Checkout integration will be connected in the next phase."
    );
  };

  const handleMollie = () => {
    alert(
      "Mollie integration will be connected in the next phase."
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F91D5] text-white p-6">
          <h2 className="text-2xl font-bold">
            Secure Checkout
          </h2>

          <p className="text-blue-100 mt-2">
            HT Connect Global eSIM
          </p>
        </div>

        {/* Body */}
        <div className="p-6">

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-gray-500">
                Country
              </span>

              <span className="font-semibold">
                {country.flag} {country.country}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Package
              </span>

              <span className="font-semibold">
                {packageItem.title}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Data
              </span>

              <span className="font-semibold">
                {packageItem.data}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Validity
              </span>

              <span className="font-semibold">
                {packageItem.days} Days
              </span>
            </div>

          </div>

          <div className="border-t mt-6 pt-6">

            <div className="flex justify-between items-center">

              <span className="text-xl font-bold">
                Total
              </span>

              <span className="text-3xl font-bold text-[#0F91D5]">
                €{packageItem.price.toFixed(2)}
              </span>

            </div>

          </div>

          {/* Payment Buttons */}

          <div className="mt-8 space-y-4">

            <button
              onClick={handleING}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition"
            >
              Pay with ING Checkout
            </button>

            <button
              onClick={handleMollie}
              className="w-full bg-[#0F91D5] hover:bg-[#0b7cbc] text-white font-bold py-4 rounded-xl transition"
            >
              Pay with Mollie
            </button>

          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-xl font-semibold"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}