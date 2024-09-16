import { useSelector } from "react-redux";

export default function Features() {
  const whoisHostingPageData = useSelector(
    (state) => state.whoisHostingPageData
  );
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="a0b40128-6963-4319-aeeb-471e92fa2d74"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#a0b40128-6963-4319-aeeb-471e92fa2d74)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-gray-700 dark:text-gray-400">
              {" "}
              {whoisHostingPageData?.featureList?.featureTitle}
            </span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-500 md:text-lg">
          {whoisHostingPageData?.featureList?.featureDesc}
        </p>
      </div>
      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className="text-gray-700 dark:text-gray-400">
            {whoisHostingPageData?.featureList?.feature1}
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className="text-gray-700 dark:text-gray-400">
            {whoisHostingPageData?.featureList?.feature2}
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className="text-gray-700 dark:text-gray-400">
            {whoisHostingPageData?.featureList?.feature3}
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className="text-gray-700 dark:text-gray-400">
            {whoisHostingPageData?.featureList?.feature4}
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className="text-gray-700 dark:text-gray-400">
            {whoisHostingPageData?.featureList?.feature5}
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className="text-gray-700 dark:text-gray-400">
            {whoisHostingPageData?.featureList?.feature6}
          </span>
        </div>
      </div>
    </div>
  );
}
