import { useSelector } from "react-redux";
import Blog from "../../ReUsable/Blog";

export default function Content() {
  const dnsCheckerPageData = useSelector((state) => state.dnsCheckerPageData);
  return <Blog data={dnsCheckerPageData?.content} />;
}
