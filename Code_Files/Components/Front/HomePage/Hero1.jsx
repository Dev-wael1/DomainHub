import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Hero1() {
  const homePageData = useSelector((state) => state.homePageData);

  return (
    <div className="relative">
      <div
        className="absolute inset-0  h-screen "
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <section className="pl-4 sm:pl-0">
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-col align-center sm:flex-none space-y-5 max-w-xl">
              <a
                target="_blank"
                href={homePageData?.hero?.newsLink || "/blog"}
                className="inline-flex justify-center sm:justify-start gap-x-6 items-center rounded-full p-1 pr-6 border border-gray-300 text-sm font-medium duration-150 hover:bg-gray-300 "
              >
                <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white dark:text-gray-300">
                  News
                </span>
                <p className="flex items-center text-gray-600 dark:text-gray-400 dark:hover:text-gray-900">
                  {homePageData?.hero?.newsText ||
                    "Read the Launch post from here"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <h1 className="text-4xl text-gray-800 dark:text-gray-200 font-extrabold sm:text-6xl -mb-10">
                {homePageData?.hero?.title.split(" ").slice(0, 3).join(" ") ||
                  "Get Webhosting in"}
              </h1>
              <h1 className="text-4xl font-extrabold sm:text-6xl bg-violet-800 text-gray-100 transform -skew-x-12 p-3 -ml-3 shadow-xl">
                {homePageData?.hero?.title.split(" ").slice(-3).join(" ") ||
                  "a Single Place."}
              </h1>
              <p className="text-gray-700 dark:text-gray-400">
                {homePageData?.hero?.desc ||
                  "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."}
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <Link
                  href="/top-ten-hosting"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex shadow-xl"
                >
                  Best Hosting
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="/hosting-reviews"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 dark:border dark:border-gray-600 rounded-full font-medium duration-150 md:inline-flex"
                >
                  See Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Replace with your image */}
              <Image
                // width={400}
                // height={400}
                alt="home page image"
                src={
                  homePageData?.hero?.heroImage?.split("public")[1] ||
                  "/images/custom/undraw_progressive_app_m-9-ms_oftfv5.png"
                }
                className="max-w-xl z-0"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
