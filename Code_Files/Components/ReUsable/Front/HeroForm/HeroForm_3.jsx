import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAllExt,
  setDnsInfo,
  setDomains,
  setGodaddyDomains,
  setHostingLocation,
  setInputValue,
  setLoading,
  setShowCard,
  setWhois,
  setWhoisHostingInfo,
} from "../../../../Redux/reducer";
export default function HeroForm_3({
  data = { enable: false },
  homePage,
  aiGenerator,
  whois,
  dnsChecker,
  hostingLocation,
  reverseIP,
  whoisHosting,
  placeholder = "Type a Domain Name",
}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setShowCard(true));
    dispatch(setInputValue(true));
    dispatch(setDomains(""));
    dispatch(setAllExt(""));
    dispatch(setGodaddyDomains(""));
    dispatch(setLoading(true));

    if (homePage) {
      axios.post("/api/domain-check", { value }).then((res) => {
        dispatch(setDomains(res.data));
      });
      axios.post("/api/domain-check/all-ext", { value }).then((res) => {
        dispatch(setAllExt(res.data));
      });
      axios.post("/api/domain-check/popular-domains", { value }).then((res) => {
        dispatch(setGodaddyDomains(res.data));
      });
    } else if (aiGenerator) {
      axios
        .post("/api/ai-domain-generator/ai-domain", { value })
        .then((res) => dispatch(setDomains(res.data)));
    } else if (whois) {
      axios.post("/api/whois/who-is", { value }).then((res) => {
        dispatch(setLoading(false));
        dispatch(setWhois(Object.entries(res.data)));
      });
    } else if (dnsChecker) {
      axios.post("/api/dns-checker/get-dns", { value }).then((res) => {
        // dispatch(setInputValue(false));
        dispatch(setLoading(false));
        dispatch(setDnsInfo(res.data));
      });
    } else if (hostingLocation) {
      axios
        .post("/api/hosting-location/get-location", { value })
        .then((res) => {
          // dispatch(setInputValue(false));
          dispatch(setLoading(false));
          dispatch(setHostingLocation(res.data?.data));
        });
    } else if (reverseIP) {
      axios.post("/api/reverse-ip/get-ip", { value }).then((res) => {
        // dispatch(setInputValue(false));
        dispatch(setLoading(false));
        dispatch(setHostingLocation(res.data?.data));
      });
    } else if (whoisHosting) {
      axios.post("/api/who-is-hosting/check-hosting", { value }).then((res) => {
        dispatch(setWhoisHostingInfo(res.data));
        dispatch(setLoading(false));
      });
    }

    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  return (
    <>
      {data?.enable && (
        <section className="relative bg-[#151522] h-screen py-20 sm:py-2">
          <svg
            className="absolute w-full"
            fill="none"
            viewBox="0 0 960 637"
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1_167)">
              <ellipse
                cx="479.5"
                cy="318.5"
                fill="#687af0"
                fillOpacity="0.5"
                rx="118.5"
                ry="118.5"
                transform="rotate(-90 479.5 318.5)"
              />
            </g>
            <mask
              height={573}
              id="mask0_1_167"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
              width={960}
              x={0}
              y={32}
            >
              <rect
                height={573}
                width={960}
                y={32}
                fill="url(#paint0_radial_1_167)"
              />
            </mask>
            <g mask="url(#mask0_1_167)">
              <rect height={79} width={79} y="41.5" stroke="white" x="123.5" />
              <rect height={79} width={79} y="41.5" stroke="white" x="202.5" />
              <rect height={79} width={79} y="41.5" stroke="white" x="281.5" />
              <rect height={79} width={79} y="41.5" stroke="white" x="360.5" />
              <rect height={79} width={79} y="41.5" stroke="white" x="439.5" />
              <rect height={79} width={79} y="41.5" stroke="white" x="518.5" />
              <rect
                height={79}
                width={79}
                y="41.5"
                stroke="white"
                x="597.5"
                fill="white"
                fillOpacity="0.25"
              />
              <rect height={79} width={79} y="41.5" stroke="white" x="676.5" />
              <rect height={79} width={79} y="41.5" stroke="white" x="755.5" />
              <rect height={79} width={79} y="120.5" stroke="white" x="123.5" />
              <rect height={79} width={79} y="120.5" stroke="white" x="202.5" />
              <rect height={79} width={79} y="120.5" stroke="white" x="281.5" />
              <rect height={79} width={79} y="120.5" stroke="white" x="360.5" />
              <rect height={79} width={79} y="120.5" stroke="white" x="439.5" />
              <rect height={79} width={79} y="120.5" stroke="white" x="518.5" />
              <rect height={79} width={79} y="120.5" stroke="white" x="597.5" />
              <rect height={79} width={79} y="120.5" stroke="white" x="676.5" />
              <rect height={79} width={79} y="120.5" stroke="white" x="755.5" />
              <rect height={79} width={79} y="199.5" stroke="white" x="123.5" />
              <rect height={79} width={79} y="199.5" stroke="white" x="202.5" />
              <rect height={79} width={79} y="199.5" stroke="white" x="281.5" />
              <rect height={79} width={79} y="199.5" stroke="white" x="360.5" />
              <rect
                height={79}
                width={79}
                y="199.5"
                stroke="white"
                x="439.5"
                fill="white"
                fillOpacity="0.25"
              />
              <rect height={79} width={79} y="199.5" stroke="white" x="518.5" />
              <rect
                height={79}
                width={79}
                y="199.5"
                stroke="white"
                x="597.5"
                fill="white"
                fillOpacity="0.25"
              />
              <rect height={79} width={79} y="199.5" stroke="white" x="676.5" />
              <rect height={79} width={79} y="199.5" stroke="white" x="755.5" />
              <rect height={79} width={79} y="278.5" stroke="white" x="123.5" />
              <rect height={79} width={79} y="278.5" stroke="white" x="202.5" />
              <rect height={79} width={79} y="278.5" stroke="white" x="281.5" />
              <rect height={79} width={79} y="278.5" stroke="white" x="360.5" />
              <rect height={79} width={79} y="278.5" stroke="white" x="439.5" />
              <rect height={79} width={79} y="278.5" stroke="white" x="518.5" />
              <rect height={79} width={79} y="278.5" stroke="white" x="597.5" />
              <rect height={79} width={79} y="278.5" stroke="white" x="676.5" />
              <rect height={79} width={79} y="278.5" stroke="white" x="755.5" />
              <rect height={79} width={79} y="357.5" stroke="white" x="123.5" />
              <rect height={79} width={79} y="357.5" stroke="white" x="202.5" />
              <rect height={79} width={79} y="357.5" stroke="white" x="281.5" />
              <rect
                height={79}
                width={79}
                y="357.5"
                stroke="white"
                x="360.5"
                fill="white"
                fillOpacity="0.25"
              />
              <rect height={79} width={79} y="357.5" stroke="white" x="439.5" />
              <rect height={79} width={79} y="357.5" stroke="white" x="518.5" />
              <rect height={79} width={79} y="357.5" stroke="white" x="597.5" />
              <rect height={79} width={79} y="357.5" stroke="white" x="676.5" />
              <rect height={79} width={79} y="357.5" stroke="white" x="755.5" />
              <rect height={79} width={79} y="436.5" stroke="white" x="123.5" />
              <rect height={79} width={79} y="436.5" stroke="white" x="202.5" />
              <rect height={79} width={79} y="436.5" stroke="white" x="281.5" />
              <rect height={79} width={79} y="436.5" stroke="white" x="360.5" />
              <rect height={79} width={79} y="436.5" stroke="white" x="439.5" />
              <rect height={79} width={79} y="436.5" stroke="white" x="518.5" />
              <rect height={79} width={79} y="436.5" stroke="white" x="597.5" />
              <rect height={79} width={79} y="436.5" stroke="white" x="676.5" />
              <rect height={79} width={79} y="436.5" stroke="white" x="755.5" />
              <rect height={79} width={79} y="515.5" stroke="white" x="123.5" />
              <rect height={79} width={79} y="515.5" stroke="white" x="202.5" />
              <rect height={79} width={79} y="515.5" stroke="white" x="281.5" />
              <rect height={79} width={79} y="515.5" stroke="white" x="360.5" />
              <rect height={79} width={79} y="515.5" stroke="white" x="439.5" />
              <rect height={79} width={79} y="515.5" stroke="white" x="518.5" />
              <rect height={79} width={79} y="515.5" stroke="white" x="597.5" />
              <rect height={79} width={79} y="515.5" stroke="white" x="676.5" />
              <rect height={79} width={79} y="515.5" stroke="white" x="755.5" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height={637}
                id="filter0_f_1_167"
                width={637}
                x={161}
                y="1.14441e-05"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_1_167"
                  stdDeviation={100}
                />
              </filter>
              <radialGradient
                cx={0}
                cy={0}
                gradientTransform="translate(480 318.5) rotate(90) scale(353.19 591.732)"
                gradientUnits="userSpaceOnUse"
                id="paint0_radial_1_167"
                r={1}
              >
                <stop stopColor="#D9D9D9" stopOpacity="0.2" />
                <stop stopColor="#D9D9D9" stopOpacity={0} offset="0.802083" />
              </radialGradient>
            </defs>
          </svg>
          <div className="relative items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-36 2xl:py-60 md:px-12">
            <div className="mx-auto text-center">
              <div>
                <p className="max-w-4xl mx-auto text-4xl font-medium tracking-tight text-white md:text-7xl">
                  {data?.title ||
                    "Quick method to start your projects in Figma"}
                  {/* <span className="md:block">your projects in Figma</span> */}
                </p>
                <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-white/70">
                  {data?.desc ||
                    " or the code version built with Astro and Tailwind CSS."}
                </p>
              </div>
              <div className="max-w-4xl flex flex-col justify-center items-center gap-3 mt-10 sm:flex-row mx-auto ">
                <form
                  className="w-full bg-white/20  p-1.5 rounded-2xl"
                  onSubmit={handleSubmit}
                >
                  <div className="w-full lg:flex lg:items-center lg:justify-between ">
                    <div className="shrink w-full">
                      <input
                        aria-label="Email address"
                        // autoComplete="email"
                        className="block w-full p-3 text-gray-300 bg-transparent border border-transparent appearance-none rounded-xl focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-300 sm:text-lg"
                        placeholder={placeholder}
                        value={value}
                        required
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                      />
                    </div>
                    <button
                      className="w-full lg:w-auto 0 active:bg-slate-600 active:text-white/80 before:transition-colors bg-white flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-indigo-500"
                      type="submit"
                    >
                      <span>{data?.buttonText || "Search"}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
