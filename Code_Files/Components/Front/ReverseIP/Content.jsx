import { useSelector } from "react-redux";
import Blog from "../../ReUsable/Blog";

export default function Content() {
  const hostingLocationPageData = useSelector(
    (state) => state.hostingLocationPageData
  );

  return <Blog data={hostingLocationPageData?.content} />;
}
