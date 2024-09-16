import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestWooCommerce() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-woocommerce")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-woocommerce-hero",
            bold: router.query.route === "best-woocommerce-hero",
          },
          // {
          //   text: "Logo Grid",
          //   bold: router.query.route === "best-woocommerce-logo-grid",
          //   link: `/admin/best-woocommerce-logo-grid`,
          // },
          {
            text: "Call to Action",
            bold: router.query.route === "best-woocommerce-cta",
            link: `/admin/best-woocommerce-cta`,
          },
          {
            text: "Content_1",
            bold: router.query.route === "best-woocommerce-content-1",
            link: `/admin/best-woocommerce-content-1`,
          },
          {
            text: "Hosting List",
            bold: router.query.route === "best-woocommerce-hosting-list",
            link: `/admin/best-woocommerce-hosting-list`,
          },
          {
            text: "Content_2",
            bold: router.query.route === "best-woocommerce-content-2",
            link: `/admin/best-woocommerce-content-2`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "best-woocommerce-hosting-table",
            link: `/admin/best-woocommerce-hosting-table`,
          },
          {
            text: "Stats",
            bold: router.query.route === "best-woocommerce-stats",
            link: `/admin/best-woocommerce-stats`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "best-woocommerce-faq",
            link: `/admin/best-woocommerce-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "best-woocommerce-seo",
            link: `/admin/best-woocommerce-seo`,
          },
        ]}
        title="Best WooCommerce"
      />
    </>
  );
}
