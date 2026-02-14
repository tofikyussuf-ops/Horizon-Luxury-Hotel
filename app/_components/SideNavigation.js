"use client";

import {
  Bars3Icon,
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* 1. MOBILE TRIGGER (Hamburger Button) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden fixed top-24 left-4 z-50 p-2 bg-primary-900 border border-primary-800 rounded-sm hover:bg-primary-800 transition-colors"
        >
          <Bars3Icon className="h-6 w-6 text-accent-500" />
        </button>
      )}

      {/* 2. MOBILE BACKDROP (Darkens the content when sidebar is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-primary-950/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 3. THE SIDEBAR CONTAINER */}
      <nav
        className={`
          fixed md:static inset-y-0 left-0 z-50 
          w-64 md:w-full bg-primary-950 md:bg-transparent
          transition-all duration-300 ease-in-out
          border-r border-primary-900 
          h-screen md:h-full
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Inner wrapper using flexbox to control vertical layout */}
        <div className="flex flex-col h-full py-2">
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden self-end p-4 text-primary-300 hover:text-accent-500 transition-all active:scale-90"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>

          {/* Navigation Link List */}
          <ul className="flex flex-col gap-1 text-base px-2 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-3 px-4 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold 
                      ${isActive ? "bg-primary-900 text-primary-100" : "text-primary-200"}
                    `}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}

            {/* THE SMART SPACER:
                This empty div grows to fill all available space. 
                It "pushes" the Logout button to the bottom of the current layout height.
            */}
            <div className="flex-1" />

            <li className="pb-4">
              <SignOutButton />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideNavigation;
