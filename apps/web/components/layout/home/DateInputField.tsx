"use client";

import { useState } from "react";
import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
import { DatePickerDialog } from "./DatePIckerDialog";

export default function DateInputField({
  label,
  placeHolder,
  value,
  handleChange,
}: {
  label: string;
  placeHolder: string;
  value: string;

  handleChange: ( value: any) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* IMPORTANT: use div instead of button */}
      <div
        onClick={() => setOpen(true)}
        className="
          w-full h-full
          cursor-pointer
          rounded-xl
        "
      >
        <div className="h-full w-full">
          <BookingSearchFormInputField
            label={label}
            placeHolder={placeHolder}
            value={value}
            handleChange={handleChange}
            // onChange={(value) => handleChange("depart", value)}
          />
        </div>
      </div>

      {open && (
        <DatePickerDialog
          onClose={() => setOpen(false)}
          onApply={(data) => handleChange( data)}
        />
      )}
    </>
  );
}
