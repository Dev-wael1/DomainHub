export default function CTA_2({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
              <div className="max-w-2xl md:mx-auto">
                <h3 className="text-gray-800 text-3xl dark:text-gray-400 font-semibold sm:text-6xl text-center">
                  {data?.title || "Build the future with us"}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-500">
                  {data?.desc ||
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident."}
                </p>
              </div>
              <div className="flex gap-3 items-center mt-4 md:justify-center">
                <a
                  target="_blank"
                  href={data?.leftButtonLink || "javascript:void(0)"}
                  className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
                >
                  {data?.leftButtonText || "Get started"}
                </a>
                <a
                  target="_blank"
                  href={data?.rightButtonLink || "javascript:void(0)"}
                  className="inline-block py-2 px-4 text-gray-800 dark:text-gray-400 dark:hover:text-gray-800 font-medium duration-150 border dark:border-gray-500 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100 rounded-lg"
                >
                  {data?.rightButtonText || "Learn more"}
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
