"use client";
import React from "react";

interface Props {
  placeHolder: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange?: (name: string, value: string) => void;
}

export const BookingSearchFormInputField = ({
  placeHolder,
  label,
  value,
  handleChange,
  onChange,
}: Props) => {
  return (
    <div className="h-21.25 flex flex-col justify-center px-5 bg-white rounded-xl shadow-sm">
      {/* LABEL */}
      <span className="text-gray-800 font-bold text-sm mb-1 text-left">
        {label}
      </span>

      {/* INPUT */}
      <input
        name={label.toLowerCase()}
        type="text"
        placeholder={placeHolder}
        value={value || ""}
        onChange={(e) => {
          handleChange?.(e.target.name, e.target.value);
        }}
        className="
          bg-transparent
          outline-none
          text-gray-900
          placeholder:text-gray-400
          text-base sm:text-base
          font-medium
          text-left
        "
        required
      />
    </div>
  );
};
