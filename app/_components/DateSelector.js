"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { isPast, isSameDay, isWithinInterval } from "date-fns";

// Helper function to check if the selected range hits any booked dates
function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  // 1. DATA FROM PROPS
  const { regularPrice, discount } = cabin;
  const { minBookingLength, maxBookingLength } = settings;

  // 2. STATE (We'll connect this to Context later)
  const range = { from: null, to: null };
  const numNights = 0; // Calculated logic will go here
  const cabinPrice = numNights * (regularPrice - discount);

  return (
    <div className="flex flex-col border border-primary-800">
      <DayPicker
        className="pt-4 place-self-center pb-4"
        mode="range"
        onSelect={(range) => console.log(range)} // Placeholder for now
        // 3. DISABLE LOGIC
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={1}
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

        {(range.from || range.to) && (
          <button
            className="border border-primary-800 py-1 px-3 text-xs font-semibold uppercase tracking-wide"
            onClick={() => {
              /* reset logic */
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
