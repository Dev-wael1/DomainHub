import {
  Button,
  Checkbox,
  Divider,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Pricing_1 from "../Front/Pricing/Pricing_1";
import Pricing_6 from "../Front/Pricing/Pricing_6";

export default function AdminPricing_6({ dbCollection, item }) {
  const [pricingLeftTag, setPricingLeftTag] = useState("");
  const [pricingLeftTitle, setPricingLeftTitle] = useState("");
  const [pricingLeftDescription, setPricingLeftDescription] = useState("");
  const [pricingLeftFeatures, setPricingLeftFeatures] = useState("");

  const [topButtonText, setTopButtonText] = useState("");
  const [pricingTitle, setPricingTitle] = useState("");
  const [pricingDescription, setPricingDescription] = useState("");
  const [pricing, setPricing] = useState("");
  const [discountedPricing, setDiscountedPricing] = useState("");
  const [pricingButtonText, setPricingButtonText] = useState("");
  const [pricingButtonLink, setPricingButtonLink] = useState("");
  const [pricingFeatures, setPricingFeatures] = useState("");

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        pricingLeftTag,
        pricingLeftTitle,
        pricingLeftDescription,
        pricingLeftFeatures,
        topButtonText,
        pricingTitle,
        pricingDescription,
        pricing,
        discountedPricing,
        pricingButtonText,
        pricingButtonLink,
        pricingFeatures,

        enable,
        token,
        dbCollection,
        item,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios
      .get("/api/data/plain-data", { params: { dbCollection, item } })
      .then((res) => {
        if (res.data?.pricing_6) {
          setEnable(res.data?.pricing_1?.enable);
          setPricingLeftTag(res.data?.pricing_6?.pricingLeftTag);
          setPricingLeftTitle(res.data?.pricing_6?.pricingLeftTitle);
          setPricingLeftDescription(
            res.data?.pricing_6?.pricingLeftDescription
          );
          setPricingLeftFeatures(res.data?.pricing_6?.pricingLeftFeatures);

          setTopButtonText(res.data?.pricing_6?.topButtonText);
          setPricingTitle(res.data?.pricing_6?.pricingTitle);
          setPricingDescription(res.data?.pricing_6?.pricingDescription);
          setPricing(res.data?.pricing_6?.pricing);
          setDiscountedPricing(res.data?.pricing_6?.discountedPricing);
          setPricingButtonText(res.data?.pricing_6?.pricingButtonText);
          setPricingButtonLink(res.data?.pricing_6?.pricingButtonLink);
          setPricingFeatures(res.data?.pricing_6?.pricingFeatures);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Pricing 6 Component
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <div>
          <Input
            value={pricingLeftTag}
            onChange={(e) => setPricingLeftTag(e.target.value)}
            type="text"
            label="Left Side Top Text"
          />
          <Spacer y="2" />
          <Input
            value={pricingLeftTitle}
            onChange={(e) => setPricingLeftTitle(e.target.value)}
            type="text"
            label="Left Side Title"
          />
          <Spacer y="2" />
          <Input
            value={pricingLeftDescription}
            onChange={(e) => setPricingLeftDescription(e.target.value)}
            type="text"
            label="Left Side Description"
          />
          <Spacer y="2" />
          <Input
            value={pricingLeftFeatures}
            onChange={(e) => setPricingLeftFeatures(e.target.value)}
            type="text"
            label="Left Side Features"
          />
          <Spacer y="4" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Input
            value={topButtonText}
            onChange={(e) => setTopButtonText(e.target.value)}
            type="text"
            label="Pricing Top Button Text"
          />

          <Input
            value={pricingTitle}
            onChange={(e) => setPricingTitle(e.target.value)}
            type="text"
            label="Pricing Title"
          />

          <Input
            value={pricingDescription}
            onChange={(e) => setPricingDescription(e.target.value)}
            type="text"
            label="Pricing  Description"
          />

          <Input
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            type="text"
            label="Original Pricing"
          />
          <Input
            value={discountedPricing}
            onChange={(e) => setDiscountedPricing(e.target.value)}
            type="text"
            label="Discounted Pricing Per month"
          />

          <Input
            value={pricingButtonText}
            onChange={(e) => setPricingButtonText(e.target.value)}
            type="text"
            label="Pricing Button Text"
          />

          <Input
            value={pricingButtonLink}
            onChange={(e) => setPricingButtonLink(e.target.value)}
            type="text"
            label="Pricing Button Link"
          />

          <Textarea
            value={pricingFeatures}
            onChange={(e) => setPricingFeatures(e.target.value)}
            type="text"
            label="Pricing Features"
          />
        </div>
        <Spacer y="4" />
        <Button
          size="md"
          color="secondary"
          variant="shadow"
          isLoading={loading}
          onPress={handleSave}
        >
          Save
        </Button>
      </div>

      <Divider />
      <Pricing_6 data={{ enable: true }} />
    </div>
  );
}
