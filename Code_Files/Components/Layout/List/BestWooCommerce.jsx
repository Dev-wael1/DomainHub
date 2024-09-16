import { useRouter } from "next/router";
import Hero from "../../Admin/Components/BestWooCommerce/Hero";
import BestWooCommerceLogoGrid from "../../Admin/Components/BestWooCommerce/LogoGrid";
import BestWooCommerceCTA from "../../Admin/Components/BestWooCommerce/CTA";
import BestWooCommerceContent1 from "../../Admin/Components/BestWooCommerce/Content/Content1";
import BestWooCommerceContent2 from "../../Admin/Components/BestWooCommerce/Content/Content2";
import BestWooCommerceHostList from "../../Admin/Components/BestWooCommerce/HostingList";
import BestWooCommerceHostingTable from "../../Admin/Components/BestWooCommerce/TopHostingTable";
import FAQ from "../../Admin/Components/BestWooCommerce/FAQ";
import Stats from "../../Admin/Components/BestWooCommerce/Stats";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";

export default function BestWooCommerce() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "best-woocommerce-hero" ? (
        <Hero />
      ) : route === "best-woocommerce-logo-grid" ? (
        <BestWooCommerceLogoGrid />
      ) : route === "best-woocommerce-cta" ? (
        <BestWooCommerceCTA />
      ) : route === "best-woocommerce-content-1" ? (
        <BestWooCommerceContent1 />
      ) : route === "best-woocommerce-content-2" ? (
        <BestWooCommerceContent2 />
      ) : route === "best-woocommerce-hosting-list" ? (
        <BestWooCommerceHostList />
      ) : route === "best-woocommerce-hosting-table" ? (
        <BestWooCommerceHostingTable />
      ) : route === "best-woocommerce-hosting-stats" ? (
        <Stats />
      ) : route === "best-woocommerce-faq" ? (
        <FAQ />
      ) : route === "best-woocommerce-seo" ? (
        <Seo dbCollection={"best-woocommerce-hosting"} />
      ) : (
        ""
      )}
    </>
  );
}
