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
import Pricing_10 from "../Front/Pricing/Pricing_10";

export default function AdminPricing_10({ dbCollection, item }) {
  const [leftTitle, setLeftTitle] = useState("");
  const [leftDesc, setLeftDesc] = useState("");

  const [rightTitle, setRightTitle] = useState("");
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
        leftTitle,
        leftDesc,
        rightTitle,
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
        if (res.data?.pricing_10) {
          setLeftTitle(res.data?.pricing_10?.leftTitle);
          setLeftDesc(res.data?.pricing_10?.leftDesc);
          setRightTitle(res.data?.pricing_10?.rightTitle);
          setPricing(res.data?.pricing_10?.pricing);
          setPricingFeatures(res.data?.pricing_10?.pricingFeatures);
          setPricingButtonText(res.data?.pricing_10?.pricingButtonText);
          setPricingButtonLink(res.data?.pricing_10?.pricingButtonLink);
          setPricingBottomDescription(
            res.data?.pricing_10?.pricingBottomDescription
          );
          setEnable(res.data?.pricing_10?.enable);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Pricing 10 Component
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
            value={leftTitle}
            onChange={(e) => setLeftTitle(e.target.value)}
            type="text"
            label="Left Side Title"
          />
          <Spacer y="2" />
          <Input
            value={rightTitle}
            onChange={(e) => setRightTitle(e.target.value)}
            type="text"
            label="Right Side Title"
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
          <Input
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
      <Pricing_10 data={{ enable: true }} />
    </div>
  );
}
