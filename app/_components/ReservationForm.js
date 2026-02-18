// app/_components/ReservationForm.js
"use client";

import { createBooking } from "@/app/_lib/actions";

function ReservationForm({ cabin, user }) {
  const { maxCapacity, regularPrice, discount, id } = cabin;

  // This would usually come from a Context/State shared with a DatePicker
  const bookingData = {
    startDate: new Date().toISOString(), // Placeholder
    endDate: new Date().toISOString(), // Placeholder
    cabinPrice: regularPrice - discount,
    cabinId: id,
  };

  // Bind the bookingData to the action
  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>
        <div className="flex gap-4 items-center">
          <img src={user.image} className="h-8 rounded-full" alt={user.name} />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={createBookingWithData}
        className="bg-primary-900 py-10 px-16 text-lg flex flex-col gap-5"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">Anything we should know?</label>
          <textarea
            name="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, or special requests?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
