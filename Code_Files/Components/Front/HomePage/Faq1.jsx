import { useSelector } from "react-redux";

export default function Faq1() {
  const homePageData = useSelector((state) => state.homePageData);
  return (
    // <!-- FAQ -->
    // <!-- FAQ -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Title --> */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-gray-200 text-center">
          Frequently Asked Questions
        </h2>
      </div>
      {/* <!-- End Title --> */}

      <div className="max-w-5xl mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {homePageData?.faq?.map((x, i) => (
            <div
              key={i}
              className="border border-gray-100 dark:border-gray-900 p-4 rounded-xl cursor-pointer hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {x?.title || "Can I cancel at anytime?"}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {x?.description ||
                  "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."}
              </p>
            </div>
          ))}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </div>
  );
}
