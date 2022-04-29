import Link from "next/link";
import PropTypes from "prop-types";

function FooterSection({ navigation, socials }) {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {socials.map((item) => (
            <Link href={item.href}>
              <a
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; {new Date().getFullYear()} Salinder Sidhu. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
}

FooterSection.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.object).isRequired,
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FooterSection;
