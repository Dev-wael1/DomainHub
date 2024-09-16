import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestReseller() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-reseller")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-reseller-hero",
            bold: router.query.route === "best-reseller-hero",
          },
          // {
          //   text: "Logo Grid",
          //   bold: router.query.route === "best-reseller-logo-grid",
          //   link: `/admin/best-reseller-logo-grid`,
          // },
          {
            text: "Call to Action",
            bold: router.query.route === "best-reseller-cta",
            link: `/admin/best-reseller-cta`,
          },
          {
            text: "Content_1",
            bold: router.query.route === "best-reseller-content-1",
            link: `/admin/best-reseller-content-1`,
          },
          {
            text: "Hosting List",
            bold: router.query.route === "best-reseller-hosting-list",
            link: `/admin/best-reseller-hosting-list`,
          },
          {
            text: "Content_2",
            bold: router.query.route === "best-reseller-content-2",
            link: `/admin/best-reseller-content-2`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "best-reseller-hosting-table",
            link: `/admin/best-reseller-hosting-table`,
          },
          {
            text: "Stats",
            bold: router.query.route === "best-reseller-stats",
            link: `/admin/best-reseller-stats`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "best-reseller-faq",
            link: `/admin/best-reseller-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "best-reseller-seo",
            link: `/admin/best-reseller-seo`,
          },
        ]}
        title="Best Reseller"
      />
    </>
  );
}
