import axios from "axios";
import Blog from "../../Components/Front/Blog";
import { setPageData } from "../../Redux/reducer";
import { useDispatch } from "react-redux";
import Head from "next/head";

export default function Blogs({ data, seo }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  return (
    <>
      <Head>
        <title>{seo?.seo?.title}</title>
        <meta name="description" content={seo?.seo?.metaDesc} />
      </Head>
      <Blog />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/blog/add-new-post`)
    .then((res) => res.data?.allPost);

  const seo = await axios
    .get(`http://${host}/api/blog/edit-post`)
    .then((res) => res.data);
  return {
    props: {
      data,
      seo,
    },
  };
}
