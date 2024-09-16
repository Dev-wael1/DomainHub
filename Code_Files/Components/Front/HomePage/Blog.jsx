import { useSelector } from "react-redux";
import Blog from "../../ReUsable/Blog";
export default function Blogs() {
  const pageData = useSelector((state) => state.pageData);
  return <Blog data={pageData} />;
}
