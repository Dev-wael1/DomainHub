import { useSelector } from "react-redux";
import Blog from "../../ReUsable/Blog";

export default function Content() {
  const whoisHostingPageData = useSelector(
    (state) => state.whoisHostingPageData
  );
  return <Blog data={whoisHostingPageData?.content?.content} />;
}
