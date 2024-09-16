import { Card } from "@nextui-org/react";
import axios from "axios";
import Head from "next/head";
import { useSelector } from "react-redux";
import Ads from "../../Components/Front/Ads";
export default function ReadPost({ post }) {
  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.meta} />
      </Head>
      {/* Blog Article */}
      <div
        shadow="lg"
        className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto my-20 "
      >
        <div className="max-w-3xl">
          {/* Content */}
          <div>
            <h1 className="text-start text-5xl mb-10 font-semibold">
              {post?.title}
            </h1>
          </div>
          <div
            className="space-y-5 md:space-y-8 text-center blog text-xl"
            dangerouslySetInnerHTML={{
              __html: post?.content,
            }}
          ></div>
          {/* End Content */}
        </div>
      </div>
      <Ads />
    </>
  );
}
export async function getServerSideProps({ req, query }) {
  const { post } = query;
  const { host } = req.headers;
  const pst = await axios
    .post(`http://${host}/api/blog/read-post`, { permalink: post })
    .then((res) => res.data);

  return {
    props: {
      post: pst,
    },
  };
}
