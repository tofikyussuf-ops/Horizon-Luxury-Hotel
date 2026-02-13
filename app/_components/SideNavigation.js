"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
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
      {/* 1. MOBILE TRIGGER (Only visible on small screens) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden fixed top-24 left-4 z-50 p-2 bg-primary-900 border border-primary-800 rounded-sm"
        >
          <Bars3Icon className="h-6 w-6 text-accent-500" />
        </button>
      )}

      {/* 2. THE BACKDROP (Closes sidebar when clicking outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-primary-950/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 3. THE SIDEBAR */}
      <nav
        className={`
        fixed md:static inset-y-0 left-0 z-50 
        w-64 md:w-auto bg-primary-950 md:bg-transparent
        transition-all duration-300 ease-in-out
        border-r border-primary-900
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden self-end p-4 text-primary-300"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <ul className="flex flex-col gap-1 text-base">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close on link click
                    className={`py-3 px-3 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold 
                      ${isActive ? "bg-primary-900 text-primary-100" : "text-primary-200"}
                    `}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}

            <li className="mt-auto">
              <SignOutButton />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideNavigation;
