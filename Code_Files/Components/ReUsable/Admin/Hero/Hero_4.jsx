import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Hero_4 from "../../Front/Hero/Hero_4";
export default function HeroAdmin_4({ storagePath, dbCollection }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [enable, setEnable] = useState(false);
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");
  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");
  const [topTitle, setTopTitle] = useState("");

  const [heroImage, setHeroImage] = useState("");
  const [loading, setLoading] = useState(false);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("leftButtonText", leftButtonText);
  formData.append("leftButtonLink", leftButtonLink);
  formData.append("rightButtonText", rightButtonText);
  formData.append("rightButtonLink", rightButtonLink);
  formData.append("topTitle", topTitle);

  formData.append("enable", enable);
  formData.append("storagePath", storagePath);
  formData.append("dbCollection", dbCollection);

  const handleSave = (e) => {
    const token = localStorage.getItem("lg_tk");
    formData.append("token", token);
    formData.append("heroImage", heroImage);
    setLoading(true);
    axios
      .post("/api/hero/hero-4", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/hero/hero-4", { params: { dbCollection } }).then((res) => {
      if (res.data?.hero_4) {
        setEnable(res.data?.hero_4?.enable);
        setTitle(res.data?.hero_4?.title);
        setDesc(res.data?.hero_4?.desc);
        setLeftButtonText(res.data?.hero_4?.leftButtonText);
        setLeftButtonLink(res.data?.hero_4?.leftButtonLink);
        setRightButtonText(res.data?.hero_4?.rightButtonText);
        setRightButtonLink(res.data?.hero_4?.rightButtonLink);
        setTopTitle(res.data?.hero_4?.topTitle);
      }
    });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 4
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <Input
          value={topTitle}
          onChange={(e) => setTopTitle(e.target.value)}
          type="text"
          label="Top Text"
        />
        <Spacer y="2" />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          label="Title"
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
            value={leftButtonText}
            onChange={(e) => setLeftButtonText(e.target.value)}
            type="text"
            label="Left Button Text"
          />
          {/* <Spacer y="1" /> */}
          <Input
            value={leftButtonLink}
            onChange={(e) => setLeftButtonLink(e.target.value)}
            type="text"
            label="Left Button Link"
          />
          {/* <Spacer y="1" /> */}

          <Input
            value={rightButtonText}
            onChange={(e) => setRightButtonText(e.target.value)}
            type="text"
            label="Right Button Text"
          />
          {/* <Spacer y="1" /> */}
          <Input
            value={rightButtonLink}
            onChange={(e) => setRightButtonLink(e.target.value)}
            type="text"
            label="Right Button Link"
          />
        </div>
        <Spacer y="2" />

        <Spacer y="3" />
        <Input
          onChange={(e) => setHeroImage(e.target.files[0])}
          type="file"
          labelPlacement="outside-left"
          label="Hero Image"
          placeholder="Hero Image"
        />
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
      <Hero_4 data={{ enable: true }} />
    </div>
  );
}
