import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div className="max-w-2xl mx-auto w-full px-4 mb-10">
      <h2 className="font-semibold text-xl text-accent-400 mb-2">
        Guest Profile
      </h2>
      <p className="text-base mb-6 text-primary-300">
        Update your information for a faster check-in.
      </p>

      <UpdateProfileForm guest={guest}>
        {/* Passing as a child allows SelectCountry to be a Server Component */}
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-4 py-2.5 bg-primary-200 text-primary-800 w-full text-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
