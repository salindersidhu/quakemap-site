import Image from "next/image";

export default function Contact({ mailLink }: { mailLink: string }) {
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
          src="/contact_us.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-600 mix-blend-multiply"
        />
      </div>
      <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            General support
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            We&apos;re here to help
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Have a question about the app? Found a bug? Have a suggestion for a
            feature? Let&apos;s start a conversation. We typically respond
            within a few business days.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href={mailLink}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
