import { Metadata } from "next";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Privacy Policy – Quakemap | Realtime Earthquakes",
};

export default function Privacy() {
  return (
    <main>
      <div className="bg-white dark:bg-zinc-950 px-6 py-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-center font-bold tracking-tight text-gray-900 dark:text-gray-50 text-2xl sm:text-4xl">
            Privacy Policy
          </h1>
          <div className="mt-10 text-gray-900 dark:text-gray-50">
            <p>
              We have built Quakemap as an ad supported app. This SERVICE is
              provided by Quakemap software at no cost and is intended for use
              as is.
            </p>
            <p className="mt-6">
              This page is used to inform visitors regarding our policies with
              the collection, use, and disclosure of Personal Information if
              anyone decided to use our Service.
            </p>
            <p className="mt-6">
              If you choose to use our Service, then you agree to the collection
              and use of information in relation to this policy. The Personal
              Information that we collect is used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>
            <p className="mt-6">
              The terms used in this Privacy Policy have the same meanings as in
              our End-User License Agreement, which are accessible at Quakemap
              unless otherwise defined in this Privacy Policy.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Information Collection and Use
            </h2>
            <p className="mt-6">
              For a better experience, while using our Service, we may require
              you to provide us with certain personally identifiable
              information. The information that we request will be retained on
              your device and is not collected by us in any way.
            </p>
            <p className="mt-6">
              The app does use third-party services that may collect information
              used to identify you.
            </p>
            <p className="mt-6">
              Link to the privacy policy of third-party service providers used
              by the app:
            </p>
            <ul role="list" className="mt-8 space-y-8">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-black dark:text-white"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/policies/privacy/"
                  className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-300"
                >
                  Google Play Services <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-black dark:text-white"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/admob/answer/6128543?hl=en"
                  className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-300"
                >
                  AdMob <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-black dark:text-white"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://firebase.google.com/policies/analytics"
                  className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-300"
                >
                  Google Analytics for Firebase{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-black dark:text-white"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://firebase.google.com/support/privacy/"
                  className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-300"
                >
                  Firebase Crashlytics <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
            </ul>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Log Data
            </h2>
            <p className="mt-6">
              We want to inform you that whenever you use our Service, in a case
              of an error in the app we collect data and information (through
              third-party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (&quot;IP&quot;) address, device name, operating system version,
              the configuration of the app when utilizing our Service, the time
              and date of your use of the Service, and other statistics.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Cookies
            </h2>
            <p className="mt-6">
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device&apos;s internal memory.
            </p>
            <p className="mt-6">
              This Service does not use these &quot;cookies&quot; explicitly.
              However, the app may use third-party code and libraries that use
              &quot;cookies&quot; to collect information and improve their
              services. You have the option to either accept or refuse these
              cookies and know when a cookie is being sent to your device. If
              you choose to refuse our cookies, you may not be able to use some
              portions of this Service.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Service Providers
            </h2>
            <p className="mt-6">
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul role="list" className="mt-8 space-y-8">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-black dark:text-white"
                />
                <span>To facilitate our Service;</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-black dark:text-white"
                />
                <span>To provide the Service on our behalf;</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-black dark:text-white"
                />
                <span>To perform Service-related services; or</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-black dark:text-white"
                />
                <span>To assist us in analyzing how our Service is used.</span>
              </li>
            </ul>
            <p className="mt-6">
              We want to inform users of this Service that these third parties
              have access to their Personal Information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Security
            </h2>
            <p className="mt-6">
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Links to Other Sites
            </h2>
            <p className="mt-6">
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party
              sites or services.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Children&apos;s Privacy
            </h2>
            <p className="mt-6">
              These Services do not address anyone under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13 years of age. In the case we discover that a
              child under 13 has provided us with personal information, we
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact us so that we will be able to
              perform the necessary actions.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Changes to This Privacy Policy
            </h2>
            <p className="mt-6">
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <p className="mt-6">
              This policy is effective as of <strong>2022-03-01</strong>.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Contact Us
            </h2>
            <p className="mt-6">
              If you have any questions or suggestions about this Privacy
              Policy, do not hesitate to contact us at{" "}
              <strong>quakemap.app@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
