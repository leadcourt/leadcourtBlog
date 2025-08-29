import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PreloaderItem from "../components/Level/PreloaderItem";

const baseUrl = import.meta.env.VITE_BE_URL;
export default function UpdatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [publishError, setPublishError] = useState(null);
  const { postId } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loadCreate, setLoadCreate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchPost = async () => {
        console.log("get post to update");

        const res = await fetch(`${baseUrl}/post/getposts?postId=${postId}`);
        const data = await res.json();

        if (!res.ok) {
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);

          setContent(data.posts[0]?.content);
          setTitle(data.posts[0]?.title);
          setFile(data.posts[0]?.image);
        }
      };

      fetchPost();
    } catch (error) {}
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoadCreate(true);
    const formDataInfo = new FormData();
    formDataInfo.append("title", title);
    formDataInfo.append("content", content);
    formDataInfo.append("image", file);

    try {
      const response = await axios.put(
        `${baseUrl}/post/updatepost/${postId}`,
        formDataInfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response?.data;

      console.log("data response", data);

      if (response?.status == 200) {
        setPublishError(null);
        navigate(`/blog/post/${data?.slug}`);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setPublishError("Something went wrong");
    }
    setLoadCreate(false);
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      {loadCreate ? <PreloaderItem /> : ""}
      <h1 className="text-center text-3xl my-7 font-semibold">Update post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex gap-4 items-center justify-between border-2 border-teal-500 p-3">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {file && (
          <img src={file} alt="upload" className="w-full h-72 object-cover" />
        )}
        <ReactQuill
          theme="snow"
          value={content}
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={setContent}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Update post
        </Button>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
