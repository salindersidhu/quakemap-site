import faq from "@/data/faq.json";

export default function Faq() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 dark:divide-gray-50/10 px-6 py-6 sm:py-32 lg:px-8">
        <h1 className="text-2xl sm:text-4xl font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-50">
          Frequently Asked Questions
        </h1>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10 dark:divide-gray-50/10">
          {faq.map((faq, index) => (
            <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p
                  className="text-base leading-7 text-gray-600 dark:text-gray-400"
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
