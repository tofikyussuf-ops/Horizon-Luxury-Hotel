import Image from "next/image";
import SelectCountry from "@/app/_components/SelectCountry";

export default function Page() {
  // Temporary variables (replace with actual data later)
  const countryFlag = "pt.jpg";
  const nationality = "portugal";

  return (
    // Max-width constrained to 2xl (~670px) to prevent stretching
    <div className="max-w-2xl mx-auto w-full px-4 mb-10">
      <h2 className="font-semibold text-xl text-accent-400 mb-2">
        Guest Profile
      </h2>

      <p className="text-base mb-6 text-primary-300">
        Update your information for a faster check-in.
      </p>

      {/* Standard vertical column flow (flex-col) */}
      <form className="bg-primary-900 py-6 px-8 text-base flex gap-5 flex-col border border-primary-800 rounded-sm shadow-sm">
        <div className="space-y-1">
          <label className="text-sm font-medium text-primary-200">
            Full name
          </label>
          <input
            disabled
            placeholder="John Doe"
            className="px-4 py-2.5 bg-primary-200 text-primary-800 w-full text-sm rounded-sm disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-primary-200">
            Email address
          </label>
          <input
            disabled
            placeholder="john@example.com"
            className="px-4 py-2.5 bg-primary-200 text-primary-800 w-full text-sm rounded-sm disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label
              className="text-sm font-medium text-primary-200"
              htmlFor="nationality"
            >
              Where are you from?
            </label>
            <div className="relative h-4 aspect-video">
              <Image
                src={`/${countryFlag}`}
                alt="Flag"
                fill
                className="object-cover rounded-px"
              />
            </div>
          </div>
          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-4 py-2.5 bg-primary-200 text-primary-800 w-full text-sm rounded-sm"
            defaultCountry={nationality}
          />
        </div>

        <div className="space-y-1">
          <label
            className="text-sm font-medium text-primary-200"
            htmlFor="nationalID"
          >
            National ID number
          </label>
          <input
            name="nationalID"
            className="px-4 py-2.5 bg-primary-200 text-primary-800 w-full text-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end pt-3">
          <button className="bg-accent-500 px-7 py-3.5 text-primary-800 font-semibold hover:bg-accent-600 transition-all uppercase tracking-widest text-xs">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}
