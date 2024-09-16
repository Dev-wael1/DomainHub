import { useSelector } from "react-redux";
import Ads from "../Ads";
export default function Content() {
  const blogPageData = useSelector((state) => state.blogPageData);
  return (
    <>
      {/* Blog Article */}
      <div className="max-w-5xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl ">
          {/* Content */}

          <div
            className="space-y-5 md:space-y-8 blog text-xl"
            dangerouslySetInnerHTML={{
              __html: blogPageData?.content1?.content,
            }}
          ></div>
          {/* End Content */}
        </div>
        <Ads />
      </div>
    </>
  );
}
