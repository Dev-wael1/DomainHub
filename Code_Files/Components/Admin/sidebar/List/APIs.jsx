import { useRouter } from "next/router";
import SettingsIcon from "../../icons/sidebar/settings-icon";
import CollapseItems from "../collapse-items";

export default function APIs() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("godaddy-api")}
        icon={<SettingsIcon />}
        items={[
          {
            text: "Godaddy API",
            link: "/admin/godaddy-api",
            bold: router.query.route === "godaddy-api",
          },
        ]}
        title="API"
      />
    </>
  );
}
