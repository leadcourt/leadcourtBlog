
// components/CommentList.jsx
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPostComment } from '../../utils/api/post';
import formatDate from '../../utils/formatDate';


const CommentList = forwardRef(({ postId }, ref) => {
  const avatar = "/images/avatar_user.webp";
  const [comments, setComments] = useState([]);

const getComments = async () => {
  try {
    // const res = 
    await getPostComment(postId).then((res)=>{
      const data = res?.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) || [];

      setComments(data);
    })
  } catch (err) {
    console.error(err);
  }
};

useImperativeHandle(ref, () => ({
  reloadComments() {
    getComments();
  },
}));

useEffect(() => {
  getComments();
}, []);


// const CommentList = (postId) => {
//   const avatar = "/images/avatar_user.webp" 
  
//   const [comments, setComments] = useState([])

//   const getComments = async () => {

//     await getPostComment(postId?.postId).then((res)=>{
//       setComments(res?.data)
      
//     }).catch((err)=>{
      
//     })
//   }
  
  
//   useEffect(()=>{
    
//     getComments()
    
//   }, [])

  return (
    <div className="border-t border-gray-200 p-6">
      <h2 className="text-2xl font-bold mb-4">Comment ({comments.length})</h2>
      
      {comments?.map((comment) => (
        <div 
          key={comment.id} 
          className={`flex items-start mb-6 border pb-6 ${comment.isReply ? 'pl-8' : ''} ${comment.id !== comments.length ? 'border-b border-gray-200' : ''}`}
        >
          <div className="flex flex-col items-center mr-6">
            <img src={avatar} alt="" className="w-16 h-16 rounded-full mb-2" />
          </div>
          <div className='mt-1'>
            <h6 className="text-[11px] italic  text-gray-500 ">{formatDate(comment.updatedAt)}</h6>
            <Link className="text-blue-600 hover:underline">{comment.userName || 'Anonymous'}</Link>
            <p className="text-gray-600 mb-2">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default CommentList;