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
import Pricing_5 from "../Front/Pricing/Pricing_5";

export default function AdminPricing_5({ dbCollection, item }) {
  const [topTitle, setTopTitle] = useState("");

  const [title, setTitle] = useState("");
  const [pricing, setPricing] = useState("");
  const [pricingFeatures, setPricingFeatures] = useState("");
  const [pricingButtonText, setPricingButtonText] = useState("");
  const [pricingButtonLink, setPricingButtonLink] = useState("");
  const [pricingBottomDescription, setPricingBottomDescription] = useState("");

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        topTitle,
        title,
        pricing,
        pricingFeatures,
        pricingButtonText,
        pricingButtonLink,
        pricingBottomDescription,
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
        if (res.data?.pricing_5) {
          setTopTitle(res.data?.pricing_5?.topTitle);
          setTitle(res.data?.pricing_5?.title);
          setPricing(res.data?.pricing_5?.pricing);
          setPricingFeatures(res.data?.pricing_5?.pricingFeatures);
          setPricingButtonText(res.data?.pricing_5?.pricingButtonText);
          setPricingButtonLink(res.data?.pricing_5?.pricingButtonLink);
          setPricingBottomDescription(
            res.data?.pricing_5?.pricingBottomDescription
          );
          setEnable(res.data?.pricing_5?.enable);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Pricing 4 Component
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
            value={topTitle}
            onChange={(e) => setTopTitle(e.target.value)}
            type="text"
            label="Top Title"
          />
          <Spacer y="2" />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Pricing Title"
          />
          <Spacer y="2" />
          <Input
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            type="text"
            label="Pricing  Per month"
          />
          <Spacer y="2" />
          <Input
            value={pricingButtonText}
            onChange={(e) => setPricingButtonText(e.target.value)}
            type="text"
            label="Pricing  Button Text"
          />
          <Spacer y="2" />
          <Input
            value={pricingButtonLink}
            onChange={(e) => setPricingButtonLink(e.target.value)}
            type="text"
            label="Pricing  Button Link"
          />
          <Spacer y="2" />
          <Textarea
            value={pricingFeatures}
            onChange={(e) => setPricingFeatures(e.target.value)}
            type="text"
            label="Pricing  Features"
          />
          <Spacer y="2" />
          <Textarea
            value={pricingBottomDescription}
            onChange={(e) => setPricingBottomDescription(e.target.value)}
            type="text"
            label="Bottom Description"
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
      <Pricing_5 data={{ enable: true }} />
    </div>
  );
}
