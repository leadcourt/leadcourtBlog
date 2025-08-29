import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { addPost } from "../utils/api/post";
import axios from "axios";
import PreloaderItem from "../components/Level/PreloaderItem";

// import DOMPurify from 'dompurify';

const baseUrl = import.meta.env.VITE_BE_URL;

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loadCreate, setLoadCreate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoadCreate(true);
    const formDataInfo = new FormData();
    formDataInfo.append("title", title);
    formDataInfo.append("content", content);
    formDataInfo.append("image", file);

    try {
      const response = await axios.post(
        `${baseUrl}/post/create`,
        formDataInfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response?.data;

      if (response?.status == 201) {
        setPublishError(null);
        navigate(`/blog/post/${data?.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
    setLoadCreate(false);
  };
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      {loadCreate ? <PreloaderItem /> : ""}
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-solid p-3">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          value={content}
          onChange={setContent}

        />
        
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
        {publishError && (
          <Alert color="failure" className="mt-5">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
