import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Hero_19 from "../../Front/Hero/Hero_19";
export default function HeroAdmin_19({ dbCollection, item }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [svgText, setSvg] = useState("");
  const [enable, setEnable] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState("");

  const [topButtonText, setTopButtonText] = useState("");
  const [topButtonLink, setTopButtonLink] = useState("");

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        title,
        desc,
        enable,
        svgText,
        buttonText,
        buttonLink,
        topButtonText,
        topButtonLink,
        token,
        dbCollection,
        item,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios
      .get("/api/data/plain-data", { params: { dbCollection, item } })
      .then((res) => {
        if (res.data?.hero_19) {
          setEnable(res.data?.hero_19?.enable);
          setTitle(res.data?.hero_19?.title);
          setSvg(res.data?.hero_19?.svgText);
          setDesc(res.data?.hero_19?.desc);
          setButtonText(res.data?.hero_19?.buttonText);
          setButtonLink(res.data?.hero_19?.buttonLink);
          setTopButtonText(res.data?.hero_19?.topButtonText);
          setTopButtonLink(res.data?.hero_19?.topButtonLink);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 18
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <div className="grid grid-cols-2 gap-2 ">
          <Input
            value={topButtonText}
            onChange={(e) => setTopButtonText(e.target.value)}
            type="text"
            label="Top Button Text"
          />
          {/* <Spacer y="1" /> */}
          <Input
            value={topButtonLink}
            onChange={(e) => setTopButtonLink(e.target.value)}
            type="text"
            label="Top Button Link"
          />
        </div>
        <Spacer y="2" />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          label="Title"
        />
        <Spacer y="2" />
        <Input
          value={svgText}
          onChange={(e) => setSvg(e.target.value)}
          type="text"
          label="SVG Text"
        />
        <Spacer y="2" />
        <Input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          label="Description"
        />
        <Spacer y="2" />
        <div className="grid grid-cols-2 gap-2 ">
          <Input
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            type="text"
            label=" Button Text"
          />
          {/* <Spacer y="1" /> */}
          <Input
            value={buttonLink}
            onChange={(e) => setButtonLink(e.target.value)}
            type="text"
            label=" Button Link"
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
      <Hero_19 data={{ enable: true }} />
    </div>
  );
}
