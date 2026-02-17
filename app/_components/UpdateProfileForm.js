"use client";

import { updateGuest } from "@/app/_lib/actions";
import { useFormStatus } from "react-dom";

function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-6 px-8 text-base flex gap-5 flex-col border border-primary-800 rounded-sm shadow-sm"
    >
      <div className="space-y-1">
        <label className="text-sm font-medium text-primary-200">
          Full name
        </label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-4 py-2.5 bg-primary-200 text-primary-800 w-full text-sm rounded-sm disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-primary-200">
          Email address
        </label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-4 py-2.5 bg-primary-200 text-primary-800 w-full text-sm rounded-sm disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-primary-200">
            Where are you from?
          </label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>
        {/* We can pass SelectCountry as a child or import it directly */}
        {children}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-primary-200">
          National ID number
        </label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="px-4 py-2.5 bg-primary-200 text-primary-800 w-full text-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end pt-3">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-7 py-3.5 text-primary-800 font-semibold hover:bg-accent-600 transition-all uppercase tracking-widest text-xs disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? "Updating..." : "Update profile"}
    </button>
  );
}

export default UpdateProfileForm;
