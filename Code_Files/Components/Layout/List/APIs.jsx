import { useRouter } from "next/router";
import APIs from "../../Admin/Components/Apis";

export default function APIS() {
  const router = useRouter();
  const route = router.query.route;
  return <>{route === "godaddy-api" ? <APIs /> : ""}</>;
}
