import { useDispatch } from "react-redux";
import WhoIsHosting from "../../Components/Front/WhoisHosting";
import { setPageData, setTopTenHostingPageData } from "../../Redux/reducer";
import axios from "axios";
import Head from "next/head";
export default function WHO({ data, topTen }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  dispatch(setTopTenHostingPageData(topTen));
  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <WhoIsHosting />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/who-is-hosting`)
    .then((res) => res.data);
  const topTen = await axios
    .get(`http://${host}/api/top-ten-hosting`)
    .then((res) => res.data);
  return {
    props: {
      data,
      topTen,
    },
  };
}
