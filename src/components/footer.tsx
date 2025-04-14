import Link from "next/link";

import socials from "@/data/socials.json";
import navigation from "@/data/navigation.json";
import { getIconByName } from "@/utils/iconMapper";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                className="text-base text-gray-950 dark:text-gray-200 hover:text-gray-400 hover:dark:text-white"
                href={item.link}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {socials.map((item, index) => {
            const IconComponent = getIconByName(item.icon);
            return (
              <Link
                key={`${item.name}-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950 dark:text-gray-200 hover:text-gray-400 hover:dark:text-white"
                href={item.link}
              >
                <span className="sr-only">{item.name}</span>
                <IconComponent className="h-6 w-6" aria-hidden="true" />
              </Link>
            );
          })}
        </div>
        <p className="text-base mt-8 text-center text-gray-950 dark:text-gray-200">
          &copy; {new Date().getFullYear()} Salinder Sidhu. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
