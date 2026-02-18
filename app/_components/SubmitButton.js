"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingLabel }) {
  // 1. This hook automatically knows if the parent form is submitting
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? (
        <span className="flex items-center gap-2">
          {/* You can put your SpinnerMini here */}
          {pendingLabel}
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default SubmitButton;
