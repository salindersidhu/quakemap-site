import type { Faq } from "@/data/faq";

export default function Faq({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h1 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently Asked Questions
        </h1>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p
                  className="text-base leading-7 text-gray-600"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
