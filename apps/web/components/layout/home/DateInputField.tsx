"use client";

import { useCallback, useState } from "react";
import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
import { DatePickerDialog, type DatePickerValue } from "./DatePIckerDialog";
import { formatDateSelection } from "./DatePicker";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { getHomepageTranslation } from "@/translations/homepage";

export default function DateInputField({
  label,
  name,
  placeHolder,
  value,
  handleChange,
}: {
  label: string;
  name?: string;
  placeHolder: string;
  value: DatePickerValue | string;
  handleChange: (value: DatePickerValue | string) => void;
}) {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const locale = getHomepageTranslation(language).bookingForm.dateLocale;
  const displayValue = formatDateSelection(value, locale);
  const closeDialog = useCallback(() => setOpen(false), []);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            setOpen(true);
          }
        }}
        dir={getDirection(language)}
        className="w-full h-full cursor-pointer rounded-xl"
      >
        <div className="h-full w-full">
          <BookingSearchFormInputField
            label={label}
            name={name}
            readOnly
            required={false}
            placeHolder={placeHolder}
            value={displayValue}
            handleChange={(_name: string, nextValue: string) => handleChange(nextValue)}
          />
        </div>
      </div>

      {open && (
        <DatePickerDialog
          onClose={closeDialog}
          initialValue={typeof value === "string" ? undefined : value}
          onApply={(data) => {
            handleChange(data);
            closeDialog();
          }}
        />
      )}
    </>
  );
}
