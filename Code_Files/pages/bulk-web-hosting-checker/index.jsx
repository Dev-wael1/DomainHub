import { useDispatch } from "react-redux";
import { setPageData } from "../../Redux/reducer";
import Head from "next/head";
import axios from "axios";
import Bulk_Hosting_Checker from "../../Components/Front/BulkHostingChecker";

export default function BulkHosting({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <Bulk_Hosting_Checker />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/bulk-hosting-checker/`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
