import { Card, CardBody } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function FeatureCard() {
  const homePageData = useSelector((state) => state.homePageData);
  return (
    // <!-- Icon Blocks -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10 px-0 sm:px-10">
        {/* <!-- Card --> */}
        {homePageData?.featureCard?.map((x, i) => (
          <Card
            shadow="lg"
            isHoverable
            isPressable
            key={i}
            className="rounded-3xl anim-bg3"
          >
            <CardBody>
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-50 dark:border-blue-900 dark:bg-blue-800">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
                    <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
                    <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
                  </svg>
                </div>
                <div className="flex-shrink-0">
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white z-20">
                    {x?.title || "Build your portfolio"}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 z-10">
                {x?.description ||
                  "The simplest way to keep your portfolio always up-to-date."}
              </p>
            </CardBody>
          </Card>
        ))}
        {/* <!-- End Card --> */}
      </div>
    </div>
  );
}
