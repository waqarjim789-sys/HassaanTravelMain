"use client";

import React, { useId } from "react";

interface Props {
  placeHolder: string;
  label: string;
  name?: string;
  id?: string;
  value?: string;
  readOnly?: boolean;
  required?: boolean;
  inputDirection?: "ltr" | "rtl" | "auto";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange?: (name: string, value: string) => void;
}

export const BookingSearchFormInputField = ({
  placeHolder,
  label,
  name,
  id,
  value,
  readOnly = false,
  required = true,
  inputDirection,
  handleChange,
  onChange,
}: Props) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="h-21.25 flex flex-col justify-center px-5 bg-white rounded-xl shadow-sm">
      <label htmlFor={inputId} className="text-gray-800 font-bold text-sm mb-1 text-start">
        {label}
      </label>

      <input
        id={inputId}
        name={name ?? label.toLowerCase()}
        type="text"
        dir={inputDirection}
        placeholder={placeHolder}
        value={value ?? ""}
        readOnly={readOnly}
        required={required}
        onChange={(event) => {
          handleChange?.(event.target.name, event.target.value);
          onChange?.(event);
        }}
        className="
          bg-transparent
          outline-none
          text-gray-900
          placeholder:text-gray-400
          text-base sm:text-base
          font-medium
          text-start
        "
      />
    </div>
  );
};
