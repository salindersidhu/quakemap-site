import PropTypes from "prop-types";

import { prefix } from "../prefix";

function FeatureSection({ downloadLink, features }) {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      {features.map((feature, index) => (
        <div className={index > 0 ? "mt-24" : "relative"} key={index}>
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 mt-16 lg:mt-0">
            <div
              className={`px-4 max-w-xl mx-auto sm:px-6 lg:py-48 lg:max-w-none lg:mx-0 lg:px-0 ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gray-900">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {feature.title}
                  </h2>
                  <p
                    className="mt-4 text-lg text-gray-500"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                  <div className="mt-6">
                    <a
                      href={downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex bg-gray-900 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    >
                      Download Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mt-12 sm:mt-16 lg:mt-0 ${
                index % 2 === 1 ? "lg:col-start-1" : ""
              }`}
            >
              <div className="lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className={`w-full lg:absolute lg:h-full lg:w-auto lg:max-w-none ${
                    index % 2 === 1 ? "lg:right-0 " : "lg:left-0 "
                  }`}
                  src={prefix + feature.image}
                  alt={feature.alt}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

FeatureSection.propTypes = {
  downloadLink: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeatureSection;
