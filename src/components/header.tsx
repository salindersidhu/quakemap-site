import type { NavigationLink } from "@/data/navigationLinks";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header({ links }: { links: NavigationLink[] }) {
  return (
    <Popover as="header" className="relative">
      <div className="bg-gray-900 py-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <span className="sr-only">Quakemap</span>
                <Image
                  src="/logo_white.svg"
                  alt=""
                  className="h-8 w-auto sm:h-10"
                  height={40}
                  width={40}
                />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <PopoverButton className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {links.map((item, index) => (
                <Link
                  key={`${item.name}-${index}`}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          className="z-1 absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Image
                  src="/logo_black.svg"
                  alt=""
                  className="h-8 w-auto"
                  height={32}
                  width={32}
                />
              </div>
              <div className="-mr-2">
                <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {links.map((item, index) => (
                  <Link
                    key={`${item.name}-${index}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
