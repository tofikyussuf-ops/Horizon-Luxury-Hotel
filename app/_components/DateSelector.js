"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  // 1. Check if the selection is valid before trying to display it
  // We only reset the view if they actually tried to book OVER a reserved date
  const displayRange = isAlreadyBooked(range, bookedDates)
    ? { from: undefined, to: undefined }
    : range;

  const { regularPrice, discount } = cabin;
  const { minBookingLength, maxBookingLength } = settings;

  // 2. Calculate number of nights safely
  // We use range here to ensure we calculate based on the actual selection
  const numNights =
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;
  const cabinPrice = numNights * (regularPrice - discount);
  console.log(range);
  return (
    <div className="flex flex-col border border-primary-800">
      <DayPicker
        className="pt-4 place-self-center pb-4"
        mode="range"
        selected={range}
        onSelect={setRange}
        // 1. THIS KEEPS THEM VISIBLE BUT DISABLED
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        // 2. CONSTRAINTS
        min={1}
        max={maxBookingLength}
        // 3. NAVIGATION (Ensures the user can't go back, but days remain visible)
        startMonth={new Date()}
        captionLayout="dropdown"
        numberOfMonths={1}
        // 4. STYLE OVERRIDES (Ensures disabled dates look "dead")
        modifiersClassNames={{
          disabled: "opacity-25 cursor-not-allowed",
          selected: "bg-accent-500 text-primary-800 hover:bg-accent-600",
          range_start: "rounded-l-full",
          range_end: "rounded-r-full",
          range_middle: "bg-accent-100 text-primary-900", // The days in between
          today: "text-accent-500 font-bold underline", // Current day marker
        }}
      />

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

        {(range?.from || range?.to) && (
          <button
            className="border border-primary-800 py-1 px-3 text-xs font-semibold uppercase tracking-wide"
            onClick={resetRange}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
