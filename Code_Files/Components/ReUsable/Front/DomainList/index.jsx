import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import DropDownLeft from "./DropDownLeft";
import DropDownRight from "./DropDownRight";
import { useState } from "react";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 12, 14, 15];

const drItems = ["com", "net", "org", "xyz", "cc"];
export default function DomainList({ ext, header, tlds }) {
  const [tld, setTld] = useState("com");
  // const [tlds, setTlds] = useState(false);
  const affiliateLinks = useSelector((state) => state?.affiliateLinks);

  const link = (x) => {
    if (x?.availability === "available") {
      return affiliateLinks?.affiliateProvider === "godaddy"
        ? `${affiliateLinks?.godaddyLink}https://in.godaddy.com/domainsearch/find?domainToCheck=${x?.domain}`
        : affiliateLinks?.affiliateProvider === "namecheap"
        ? `${affiliateLinks?.nameCheapLink}https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D${x.domain}&afftrack=`
        : affiliateLinks?.affiliateProvider === "domain.com"
        ? `https://www.domain.com/registration/?flow=domainDFE&search=${x?.domain}${affiliateLinks?.domainLink}`
        : affiliateLinks?.affiliateProvider === "dynadot"
        ? `${affiliateLinks?.dynadotLink}https%3A%2F%2Fwww.dynadot.com%2Fdomain%2Fsearch.html%3Fdomain%3D${x?.domain}`
        : affiliateLinks?.otherLink;
    }
    return `https://www.whois.com/whois/${x?.domain}`;
  };

  return (
    <>
      <Card className="p-0">
        <CardHeader className="flex justify-between">
          <p className="font-semibold text-gray-600 dark:text-gray-300">
            {header}
          </p>
          {/* {tlds && (
            <Dropdown isBordered className="p-0 min-w-[100px] max-w-[100px]">
              <DropdownTrigger>
                <Button size="sm" variant="flat">
                  {tld}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                // aria-setsize="10px"
                className=""
                aria-label="Single selection actions"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={tld}
                onAction={(e) => setTld(e)}
              >
                {drItems.map((x) => (
                  <DropdownItem className="text-center" key={x}>
                    <p className="text-cente">{x}</p>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          )} */}
        </CardHeader>
        {ext
          ? ext?.map((x, i) => (
              <div
                className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 rounded-xl p-3.5 box-shadow"
                key={i}
              >
                <div className="flex justify-between items-center">
                  <DropDownLeft domain={x} />
                  <Link
                    style={{ fontFamily: "jost" }}
                    href={link(x)}
                    isBlock
                    className="mx-2 py-0"
                    color="foreground"
                  >
                    {x?.domain}
                  </Link>
                </div>
                <div className="flex justify-between items-center">
                  <Chip
                    as={Link}
                    href={link(x)}
                    target={"_blank"}
                    variant="shadow"
                    color={
                      x?.availability === "available" ? "success" : "warning"
                    }
                    radius="sm"
                    style={{ fontFamily: "jost" }}
                    className="px-5 !py-3 text-white text-xs font-jost cursor-pointer mx-3"
                  >
                    {x?.availability === "available" ? "Buy" : "Whois"}
                  </Chip>
                  <DropDownRight domain={x?.domain} />
                </div>
              </div>
            ))
          : data.map((x, i) => <Skeleton key={i} />)}
      </Card>
    </>
  );
}
