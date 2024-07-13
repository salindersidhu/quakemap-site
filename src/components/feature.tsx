import Image from "next/image";

import type { Feature } from "@/data/features";

export default function Feature({ features }: { features: Feature[] }) {
  return (
    <div className="relative bg-white dark:bg-zinc-950 lg:pt-16 pb-16 lg:pb-32 overflow-hidden">
      {features.map((feature, index) => (
        <div className={index > 0 ? "lg:mt-24" : "relative"} key={index}>
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 mt-16 lg:mt-0">
            <div
              className={`px-4 max-w-xl mx-auto sm:px-6 lg:py-48 lg:max-w-none lg:mx-0 lg:px-0 ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gray-900 dark:bg-gray-50">
                    <feature.icon
                      className="h-6 w-6 text-white dark:text-black"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 dark:text-gray-200">
                    {feature.title}
                  </h2>
                  <p
                    className="mt-4 text-lg text-gray-950 dark:text-gray-200"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              </div>
            </div>
            <div
              className={`px-4 md:px-32 lg:px-28 mt-12 sm:mt-16 lg:mt-0 ${
                index % 2 === 1 ? "lg:col-start-1" : ""
              }`}
            >
              <Image
                src={`/${feature.image}`}
                alt=""
                width={2600}
                height={3178}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
