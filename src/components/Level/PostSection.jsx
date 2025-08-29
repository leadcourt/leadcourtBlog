import React, { useEffect, useState } from "react";
import PostContent from "./PostContent";
import Sidebar from "./Sidebar";

import PreloaderItem from "./PreloaderItem";
import { useRecoilState } from "recoil";
import { postState } from "../../utils/atom/postAtom";
import { getAllPost } from "../../utils/api/post";

const baseUrl = import.meta.env.VITE_BE_URL;

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postAtom, setPostAtom] = useRecoilState(postState);

  const fetchPosts = async () => {
    setLoading(true);

    await getAllPost()
      .then((res) => {
        console.log(res?.data);

        setPosts(res?.data?.posts);

        setPostAtom(res?.data.posts.slice(0, 4));
      })
      .catch((error) => {});

    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="bg-white py-10">
      {loading ? <PreloaderItem /> : ""}
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="mb-16">
            <PostContent posts={posts} />
          </div>
        </div>
        <div className="lg:col-span-4">
          {/* <Sidebar /> */}
        </div>
      </div>
    </section>
  );
};

export default PostSection;
