export default function Hero_7({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <div className="bg-white dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row lg:items-center">
              {/* content - start */}
              <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                  {data?.topTitle || "Very proud to introduce"}
                </p>
                <h1 className="mb-8 text-4xl font-bold text-black dark:text-gray-400 sm:text-5xl md:mb-12 md:text-6xl">
                  {data?.title || "Revolutionary way to build the web"}
                </h1>
                <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                  {data?.desc ||
                    "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random."}
                </p>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href={data?.leftButtonLink || "#"}
                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  >
                    {data?.leftButtonText || "Start now"}
                  </a>
                  <a
                    href={data?.rightButtonLink || "#"}
                    className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    {data?.rightButtonText || "Take tour"}
                  </a>
                </div>
              </div>
              {/* content - end */}
              {/* image - start */}
              <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                <img
                  src={
                    data?.heroImage?.split("public")[1] ||
                    "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
                  }
                  loading="lazy"
                  alt="Photo by Fakurian Design"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* image - end */}
            </section>
          </div>
        </div>
      )}
    </>
  );
}
