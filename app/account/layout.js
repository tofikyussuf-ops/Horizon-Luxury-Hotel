// app/account/layout.js
import SideNavigation from "@/app/_components/SideNavigation";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";
// app/account/layout.js
// app/account/layout.js
// app/account/layout.js
export default function Layout({ children }) {
  return (
    /* We use overflow-hidden on the parent to lock the screen, 
       then allow the content area to scroll independently. */
    <div className="grid md:grid-cols-[16rem_1fr] h-[calc(100vh-5rem)] gap-12 overflow-hidden">
      {/* Sidebar won't scroll, it just sits in its cell */}
      <SideNavigation />

      {/* Only this area will scroll if the content is long */}
      <div className="overflow-y-auto py-1 pt-16 md:pt-1 px-4">
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </div>
    </div>
  );
}
