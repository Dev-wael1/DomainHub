import { useRouter } from "next/router";
import Hero from "../../Admin/Components/BestReseller/Hero";
import BestResellerLogoGrid from "../../Admin/Components/BestReseller/LogoGrid";
import BestResellerCTA from "../../Admin/Components/BestReseller/CTA";
import BestResellerContent1 from "../../Admin/Components/BestReseller/Content/Content1";
import BestResellerContent2 from "../../Admin/Components/BestReseller/Content/Content2";
import BestResellerHostList from "../../Admin/Components/BestReseller/HostingList";
import BestResellerHostingTable from "../../Admin/Components/BestReseller/TopHostingTable";
import FAQ from "../../Admin/Components/BestReseller/FAQ";
import Stats from "../../Admin/Components/BestReseller/Stats";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";

export default function BestReseller() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "best-reseller-hero" ? (
        <Hero />
      ) : route === "best-reseller-logo-grid" ? (
        <BestResellerLogoGrid />
      ) : route === "best-reseller-cta" ? (
        <BestResellerCTA />
      ) : route === "best-reseller-content-1" ? (
        <BestResellerContent1 />
      ) : route === "best-reseller-content-2" ? (
        <BestResellerContent2 />
      ) : route === "best-reseller-hosting-list" ? (
        <BestResellerHostList />
      ) : route === "best-reseller-hosting-table" ? (
        <BestResellerHostingTable />
      ) : route === "best-reseller-hosting-stats" ? (
        <Stats />
      ) : route === "best-reseller-faq" ? (
        <FAQ />
      ) : route === "best-reseller-seo" ? (
        <Seo dbCollection={"best-reseller-hosting"} />
      ) : (
        ""
      )}
    </>
  );
}
