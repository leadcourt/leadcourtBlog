import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import {addPost} from "../utils/api/post";
import axios from "axios";
 
const baseUrl = import.meta.env.VITE_BE_URL

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();



  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [category, setCategory] = useState('');

  const [loadCreate, setLoadCreate] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoadCreate(true)
    const formDataInfo = new FormData();
    formDataInfo.append('title', title);
    formDataInfo.append('content', content);
    // formDataInfo.append('category', category);
    formDataInfo.append('image', file);

    try {

      const response = await axios.post(`${baseUrl}/post/create`, formDataInfo, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
       const data = response?.data 

      if (response?.status == 201) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      // console.error('Error creating post:', error);
      setPublishError("Something went wrong");
    }
    setLoadCreate(false)

  }; 
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>{
              // setFormData({ ...formData, title: e.target.value })
              setTitle(e.target.value)
            }
            }
          />
          {/* <Select
            onChange={(e) => {
              // setFormData({ ...formData, category: e.target.value })
              setCategory(e.target.value)
            }
            }
          >
            <option value="uncategorized">Select a category</option>
            <option value="automobile">Automobile</option>
            <option value="history">History</option>
            <option value="science">Science</option>
          </Select> */}
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-solid p-3">
          {/* <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          /> */}
          <input type="file" onChange={(e) => setFile(e.target.files[0])} required />

          {/* <Button
            type="button"
            gradientDuoTone="purpleToPink"
            size="sm"
            outline
            // onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress}%` || 0}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button> */}
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        {/* <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
              setFormData((prevFormData) => ({ ...prevFormData, content: value }));
          }}
        /> */}
        <textarea 
        
        placeholder="Write something..."
        className="h-72 mb-12"
        required
        onChange={(e) => {
          // setFormData((prevFormData) => ({ ...prevFormData, content: e.target.value }));
          setContent(e.target.value)
      }}
    //   onChange={(e) => {
    //     console.log('e.target.value', e.target.value);
    //     ;
    // }}
        >

        </textarea>
          {loadCreate ? 
          <div className="text-center">
            <i className="pi pi-spinner pi-spin"></i>
          </div>
          :
        <Button type="submit" gradientDuoTone="purpleToPink">
          <i className="pi pi-spinner pi-spin"></i>
          Publish
        </Button>
          }
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
