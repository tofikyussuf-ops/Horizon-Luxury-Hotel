import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    // grid-cols-[16rem_1fr] gives the sidebar a fixed width
    // and lets the content take the rest of the space
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />

      {/* The main content area where your profile form will live */}
      <div className="py-1">{children}</div>
    </div>
  );
}
