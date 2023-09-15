import Head from "next/head";
import Link from "next/link";

import { ContactSection, FooterSection, HeaderSection } from "../components";
import {
  FooterNavigation,
  FooterSocials,
  HeaderNavigation,
  Links,
} from "../data";

function NotFound() {
  return (
    <>
      <Head>
        <title>404 &#8211; Quakemap | Realtime Earthquakes</title>
      </Head>
      <HeaderSection navigation={HeaderNavigation} />
      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 hero-section">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page Not Found
                </h1>
                <p className="mt-4 text-base text-gray-500">
                  Please check the URL and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link href="/">
                  <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Home
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <ContactSection mailLink={Links.mail} />
      <FooterSection navigation={FooterNavigation} socials={FooterSocials} />
    </>
  );
}

export default NotFound;
