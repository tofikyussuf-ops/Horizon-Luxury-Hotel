import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800 border border-primary-700 rounded-sm">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link
          href="/login"
          className="underline text-accent-500 hover:text-accent-600 transition-colors font-semibold"
        >
          login
        </Link>
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
