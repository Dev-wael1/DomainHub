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
import Pricing_11 from "../Front/Pricing/Pricing_11";

export default function AdminPricing_11({ dbCollection, item }) {
  const [pricing1Title, setPricing1Title] = useState("");
  const [pricing1Description, setPricing1Description] = useState("");
  const [pricing1, setPricing1] = useState("");
  const [pricing1ButtonText, setPricing1ButtonText] = useState("");
  const [pricing1ButtonLink, setPricing1ButtonLink] = useState("");
  const [pricing1Features, setPricing1Features] = useState("");

  const [pricing2Title, setPricing2Title] = useState("");
  const [pricing2Description, setPricing2Description] = useState("");
  const [pricing2, setPricing2] = useState("");
  const [pricing2ButtonText, setPricing2ButtonText] = useState("");
  const [pricing2ButtonLink, setPricing2ButtonLink] = useState("");
  const [pricing2Features, setPricing2Features] = useState("");

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        pricing1Title,
        pricing1Description,
        pricing1,
        pricing1ButtonText,
        pricing1ButtonLink,
        pricing1Features,
        pricing2Title,
        pricing2Description,
        pricing2,
        pricing2ButtonText,
        pricing2ButtonLink,
        pricing2Features,

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
        if (res.data?.pricing_11) {
          setEnable(res.data?.pricing_11?.enable);
          setPricing1Title(res.data?.pricing_11?.pricing1Title);
          setPricing1Description(res.data?.pricing_11?.pricing1Description);
          setPricing1(res.data?.pricing_11?.pricing1);
          setPricing1ButtonText(res.data?.pricing_11?.pricing1ButtonText);
          setPricing1ButtonLink(res.data?.pricing_11?.pricing1ButtonLink);
          setPricing1Features(res.data?.pricing_11?.pricing1Features);

          setPricing2Title(res.data?.pricing_11?.pricing2Title);
          setPricing2Description(res.data?.pricing_11?.pricing2Description);
          setPricing2(res.data?.pricing_11?.pricing2);
          setPricing2ButtonText(res.data?.pricing_11?.pricing2ButtonText);
          setPricing2ButtonLink(res.data?.pricing_11?.pricing2ButtonLink);
          setPricing2Features(res.data?.pricing_11?.pricing2Features);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Pricing 11 Component
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              value={pricing1Title}
              onChange={(e) => setPricing1Title(e.target.value)}
              type="text"
              label="Pricing 1 Title"
            />
            <Spacer y="2" />
            <Input
              value={pricing1Description}
              onChange={(e) => setPricing1Description(e.target.value)}
              type="text"
              label="Pricing 1 Description"
            />
            <Spacer y="2" />
            <Input
              value={pricing1}
              onChange={(e) => setPricing1(e.target.value)}
              type="text"
              label="Pricing 1 Per month"
            />
            <Spacer y="2" />
            <Input
              value={pricing1ButtonText}
              onChange={(e) => setPricing1ButtonText(e.target.value)}
              type="text"
              label="Pricing 1 Button Text"
            />
            <Spacer y="2" />
            <Input
              value={pricing1ButtonLink}
              onChange={(e) => setPricing1ButtonLink(e.target.value)}
              type="text"
              label="Pricing 1 Button Link"
            />
            <Spacer y="2" />
            <Textarea
              value={pricing1Features}
              onChange={(e) => setPricing1Features(e.target.value)}
              type="text"
              label="Pricing 1 Features"
            />
          </div>
          <div>
            <Input
              value={pricing2Title}
              onChange={(e) => setPricing2Title(e.target.value)}
              type="text"
              label="Pricing 2 Title"
            />
            <Spacer y="2" />
            <Input
              value={pricing2Description}
              onChange={(e) => setPricing2Description(e.target.value)}
              type="text"
              label="Pricing 2 Description"
            />
            <Spacer y="2" />
            <Input
              value={pricing2}
              onChange={(e) => setPricing2(e.target.value)}
              type="text"
              label="Pricing 2 Per month"
            />
            <Spacer y="2" />
            <Input
              value={pricing2ButtonText}
              onChange={(e) => setPricing2ButtonText(e.target.value)}
              type="text"
              label="Pricing 2 Button Text"
            />
            <Spacer y="2" />
            <Input
              value={pricing2ButtonLink}
              onChange={(e) => setPricing2ButtonLink(e.target.value)}
              type="text"
              label="Pricing 2 Button Link"
            />
            <Spacer y="2" />
            <Textarea
              value={pricing2Features}
              onChange={(e) => setPricing2Features(e.target.value)}
              type="text"
              label="Pricing 2 Features"
            />
          </div>
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
      <Pricing_11 data={{ enable: true }} />
    </div>
  );
}
