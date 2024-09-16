import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Spacer,
  Switch,
  Textarea,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

import TextEditor from "../../../ReUsable/Editor";
import axios from "axios";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
export default function EditPost() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router.query.post_id;
  const [title, setTitle] = useState("");
  const [permalink, setPermalink] = useState("");
  const [meta, setMeta] = useState("");
  const [postImage, setPostImage] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const currentDate = new Date();
  const today = currentDate.toLocaleDateString("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const token = localStorage.getItem("lg_tk");

  const formData = new FormData();
  formData.append("id", id);
  formData.append("title", title);
  formData.append("permalink", permalink || title.split(" ").join("-"));
  formData.append("meta", meta);
  formData.append("postImage", postImage);
  formData.append("content", content);
  formData.append("published", published);
  formData.append("date", today);
  formData.append("token", token);
  const handleSave = () => {
    console.log(today);
    axios
      .post("/api/blog/edit-post", formData)
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
    axios.post("/api/blog/get-one-post", { id }).then((res) => {
      if (res.data) {
        setTitle(res.data?.title);
        setPermalink(res.data?.permalink);
        setMeta(res.data?.meta);
        setContent(res.data?.content);
        setPublished(res.data?.published);
      }
    });
  }, []);
  return (
    <Card>
      <Toaster />
      <CardHeader className="flex flex-col items-start">
        <p className="text-xl">Add new Post</p>
        <p className="text-sm">Create New Blog Post</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Post Title"
          />
          <Spacer y="2" />
          <Input
            value={permalink}
            onChange={(e) => setPermalink(e.target.value.split(" ").join("-"))}
            type="text"
            label="URL Permalink"
          />
          <Spacer y="2" />
          <Input
            // value={postImage}
            onChange={(e) => setPostImage(e.target.files[0])}
            type="file"
            placeholder="Post Image"
            labelPlacement="outside-left"
            label="Post Image"
          />
          <Spacer y="2" />
          <Textarea
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
            type="text"
            label="Meta Description"
          />
          <Spacer y="2" />
          <p className="text-xl">Post Content</p>
          <TextEditor
            setDefaultStyle="font-size:20px; font-family:jost"
            height="100vh"
            setContent={content}
            onChange={(e) => setContent(e)}
            // onImageUpload={imageUpload}
            // onImageUploadBefore={handleVideoUploadBefore}
          />
        </div>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button onClick={handleSave}>Save Post</Button>
        <Switch
          color={published === "true" ? "success" : "error"}
          isSelected={published === "true"}
          onChange={(x) =>
            setPublished(published === "true" ? "false" : "true")
          }
        >
          {published === "true" ? "Publish" : "Draft"}
        </Switch>
      </CardFooter>
    </Card>
  );
}
