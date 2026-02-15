"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css"; // Note: ensure you use the version 9 style path if updated

function DateSelector() {
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;
  const range = { from: null, to: null };

  const minBookingLength = 1;
  const maxBookingLength = 23;

  return (
    <div className="flex flex-col border border-primary-800">
      {/* Reduced padding and centered single month */}
      <DayPicker
        className="pt-4 place-self-center pb-4"
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={1} // Changed to 1 for minimalist look
      />

      {/* Sleeker Price Bar */}
      <div className="flex items-center justify-between px-6 bg-accent-500 text-primary-800 h-[60px]">
        <div className="flex items-baseline gap-4">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl font-semibold">
                  ${regularPrice - discount}
                </span>
                <span className="line-through text-sm font-medium text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl font-semibold">${regularPrice}</span>
            )}
            <span className="text-xs uppercase font-bold">/night</span>
          </p>

          {numNights ? (
            <div className="flex items-baseline gap-4 border-l border-primary-700 ml-4 pl-4">
              <p className="text-lg">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-xs font-bold uppercase">Total</span>{" "}
                <span className="text-xl font-semibold">${cabinPrice}</span>
              </p>
            </div>
          ) : null}
        </div>

        {(range.from || range.to) && (
          <button
            className="border border-primary-800 py-1 px-3 text-xs font-semibold uppercase tracking-wide"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
