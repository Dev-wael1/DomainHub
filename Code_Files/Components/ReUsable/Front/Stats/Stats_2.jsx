export default function Stats_2({ data = { enable: false } }) {
  const stats = [
    {
      data: data?.stat1Number || "35K",
      desc: data?.stat1Desc || "Customers consectetur adipiscing elit.",
    },
    {
      data: data?.stat2Number || "10K+",
      desc:
        data?.stat2Desc || "Downloads efficitur id eu nulla facilisis turpis",
    },
    {
      data: data?.stat3Number || "40+",
      desc: data?.stat3Desc || "Countries maximus sit amet auctor sed,",
    },
  ];
  return (
    <>
      {data?.enable && (
        <section className="py-28 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black">
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-2xl xl:mx-auto xl:text-center">
              <h3 className="dark:text-white text-3xl font-semibold sm:text-4xl text-center">
                {data?.title || "Our customers are always happy"}
              </h3>
              <p className="mt-3 dark:text-gray-300">
                {data?.desc ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi   venenatis sollicitudin quam ut tincidunt."}
              </p>
            </div>
            <div className="mt-12 mx-auto">
              <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                {stats?.map((item, idx) => (
                  <li key={idx} className="sm:max-w-[15rem] list-none">
                    <h4 className="text-4xl text-gray-700 dark:text-white font-semibold text-center">
                      {item?.data}
                    </h4>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 font-medium text-center">
                      {item?.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div
            className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div> */}
        </section>
      )}
    </>
  );
}
