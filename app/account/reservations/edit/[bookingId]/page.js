// app/account/reservations/edit/[bookingId]/page.js
import { getBooking, getCabin } from "@/app/_lib/data-service";
import EditBookingForm from "@/app/_components/EditBookingForm";

export default async function Page({ params }) {
  const { bookingId } = await params; // In Next.js 15+, params is a promise!

  // This runs on the SERVER, so it can see your secret keys
  const booking = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(booking.cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <EditBookingForm booking={booking} maxCapacity={maxCapacity} />
    </div>
  );
}
