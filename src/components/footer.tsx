import type { NavigationLink } from "@/data/navigationLinks";
import type { SocialLink } from "@/data/socialLinks";

import Link from "next/link";

export default function Footer({
  links,
  socials,
}: {
  links: NavigationLink[];
  socials: SocialLink[];
}) {
  return (
    <footer className="bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {links.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                className="text-base text-gray-950 dark:text-gray-200 hover:text-gray-400 hover:dark:text-white"
                href={item.href}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {socials.map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-950 dark:text-gray-200 hover:text-gray-400 hover:dark:text-white"
              href={item.href}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="text-base mt-8 text-center text-gray-950 dark:text-gray-200">
          &copy; {new Date().getFullYear()} Salinder Sidhu. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
