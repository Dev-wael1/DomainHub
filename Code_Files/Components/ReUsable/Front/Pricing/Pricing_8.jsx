export default function Pricing_8({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          {/* Pricing */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl text-center font-bold md:text-4xl md:leading-tight dark:text-white">
                Pricing
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Whatever your status, our offers evolve according to your needs.
              </p>
            </div>
            {/* End Title */}

            {/* Grid */}
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
              {/* Card */}
              <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                  Free
                </h4>
                <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <p className="mt-2 text-sm text-gray-500">Forever free</p>
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      1 user
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      Plan features
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      Product support
                    </span>
                  </li>
                </ul>
                <a
                  className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Sign up
                </a>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
                <p className="mb-3">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                    Most popular
                  </span>
                </p>
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                  Startup
                </h4>
                <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                  <span className="font-bold text-2xl -me-2">$</span>
                  39
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  All the basics for starting a new business
                </p>
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      2 users
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      Plan features
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      Product support
                    </span>
                  </li>
                </ul>
                <a
                  className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
                >
                  Sign up
                </a>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                  Team
                </h4>
                <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                  <span className="font-bold text-2xl -me-2">$</span>
                  89
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  Everything you need for a growing business
                </p>
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      5 users
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      Plan features
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      Product support
                    </span>
                  </li>
                </ul>
                <a
                  className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Sign up
                </a>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                  Enterprise
                </h4>
                <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                  <span className="font-bold text-2xl -me-2">$</span>
                  149
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  Advanced features for scaling your business
                </p>
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      10 users
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      Plan features
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-400">
                      Product support
                    </span>
                  </li>
                </ul>
                <a
                  className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Sign up
                </a>
              </div>
              {/* End Card */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Pricing */}
        </>
      )}
    </>
  );
}
