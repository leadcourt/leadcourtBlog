// PostPage2.jsx
import React, { useEffect, useRef, useState } from 'react';
import HeaderMain from '../components/Level/HeaderMain';
import Footer from '../components/Level/Footer';
import AuthorInfo from '../components/Level2/AuthorInfo';
import CommentList from '../components/Level2/CommentList';
import CommentForm from '../components/Level2/CommentForm';
import { Link, useParams } from 'react-router-dom';
import formatDate from '../utils/formatDate';
import PreloaderItem from '../components/Level/PreloaderItem';
import { getPostBySlug } from '../utils/api/post';

// import RelatedPosts from '../components/Level/RelatedPosts';
// import TopicsSection from '../components/Level/TopicsSection';
// import SocialMediaLinks from '../components/Level/SocialMediaLinks';
  
const PostPage2 = () => {
  const commentListRef = useRef();

    const {postSlug} = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [postData, setPostData] = useState(null)
    const [recentPosts, setRecentPosts] = useState(null)
    
    const fetchPost = async()=>{

      await getPostBySlug(postSlug).then((res)=>{
        const strcturePostData = {
          id: res?.data?.posts[0]?._id,
          title: res?.data?.posts[0]?.title,
          date: formatDate(res?.data?.posts[0]?.createdAt), 
          category: res?.data?.posts[0]?.category,
          // image: res?.data?.posts[0]?.image,
          author: res?.data?.posts[0]?.userId,
          // : "Emran Khan",
          content: [
            {
              type: "paragraph",
              text: res?.data?.posts[0]?.content
            },
          ],
          images: [res?.data?.posts[0]?.image,]

        }

        if(res.status == 200){
          setPostData(strcturePostData)
            setLoading(false)
            setError(false)
        }

      }).catch ((error)=> {
            setError(true)
            setLoading(false)
        })
 
    }



  const reloadComment = () => {
    commentListRef.current?.reloadComments();
  };
    useEffect(()=>{
      
        fetchPost()
    },[postSlug])

  return (
    <div className="font-sans bg-white">

      {loading ? 
      <PreloaderItem />:''  
    }
      
      {/* Page HeaderMain */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">News Page</h2>
          <nav className="flex justify-center">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
              <li><span className="text-gray-500">/</span></li>
              <li><Link to="#" className="text-blue-600 hover:underline">Blog</Link></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Post Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Post Meta */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                      <span className="mr-4">{postData?.date}</span>
                    </div>

                  {/* Post Images */}
                  <div className="mb-6">
                    <img src={postData?.images[0]} alt="" className="border-4 w-full rounded" />
                  </div>

                    <ul className="flex flex-wrap items-center text-sm text-gray-500">
                      <li className="mr-4 flex items-center">
                        <img src={postData?.authorImage} alt="" className="w-8 h-8 rounded-full mr-2" />
                        <Link to="#" className="text-blue-600 hover:underline">{postData?.author}</Link>
                      </li>
                      <li className="mr-4">
                        <Link to="#" className="text-blue-600 hover:underline">
                          <i className="fas fa-hand-o-right mr-1"></i>{postData?.likes}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="text-blue-600 hover:underline">
                          <i className="fas fa-comments mr-1"></i>{postData?.comments}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <h1 className="block text-3xl font-bold mb-6 hover:text-blue-600 transition">
                    {postData?.title}
                  </h1>

                  {/* Post Content Blocks */}
                  {postData?.content.map((block, index) => (
                    <div key={index}>
                      {block?.type === "paragraph" && (
                        <p className="mb-6">{block.text}</p>
                      )}
                      {block?.type === "quote" && (
                        <div className="bg-gray-100 p-6 mb-6 relative rounded">
                          <p className="italic">{block.text}</p>
                          <img src="images/quote.png" alt="" className="absolute top-4 right-4 w-8 opacity-20" />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* 
                  <div className="flex mb-6">
                    <div className="w-1/2 pr-2">
                      <img src={postData?.images[3]} alt="" className="w-full rounded" />
                    </div>
                    <div className="w-1/2 pl-2">
                      <img src={postData?.images[4]} alt="" className="w-full rounded" />
                    </div>
                  </div> */}

                  {/* Social Share and Related Posts */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div className="mb-4 sm:mb-0">
                      <ul className="flex items-center">
                        <li className="mr-4">Share:</li>
                        <li className="mr-4"><Link to="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook-f"></i></Link></li>
                        <li className="mr-4"><Link to="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-google-plus-g"></i></Link></li>
                        <li className="mr-4"><Link to="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link to="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-twitter"></i></Link></li>
                      </ul>
                    </div>
                    <div className="mb-4 sm:mb-0">
                      <Link to="/" className="text-blue-600 hover:underline">
                        <i className="fas fa-arrow-left mr-2"></i>Back to blog
                      </Link>
                    </div>
                  </div>

                  {/* <RelatedPosts /> */}
                </div>

                {/* <AuthorInfo info={[postData?.author]} /> */}
                {
                  postData?.id ? <div className="">
                <CommentList postId={postData?.id} ref={commentListRef} />
                <CommentForm postId={postData?.id} reloadComment={reloadComment} />

                  </div>
                
              : ''}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <TopicsSection />
      <SocialMediaLinks /> */}
    </div>
  );
};

export default PostPage2;