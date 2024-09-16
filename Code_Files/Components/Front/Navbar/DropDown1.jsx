import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import Link from "next/link.js";
export default function DropDown1() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
          endContent={icons.chevron}
          radius="sm"
          variant="light"
        >
          Generator
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Dropdown Variants"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          as={Link}
          href="/ai-domain-generator"
          key="autoscaling"
          description="AI based domain generator with availability checks. Supports manuy extensions."
          startContent={icons.scale}
        >
          AI Domain Generator
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/random-word-generator"
          key="usage_metrics"
          description="Generate random english dicrionary words powered by AI. Add prefix and suffix words."
          startContent={icons.activity}
        >
          Random Word Generator
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/random-letter-generator"
          key="production_ready"
          description="Generate random english letters, numbers, and alpha-numaric domain names."
          startContent={icons.flash}
        >
          Random Letter Generator
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/who-is-hosting"
          key="99_uptime"
          description="Check who is hosted a website. Webhosting provider checker."
          startContent={icons.server}
        >
          Web Hosting Checker
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
