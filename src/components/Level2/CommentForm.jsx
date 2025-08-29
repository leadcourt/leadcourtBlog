import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../utils/atom/authAtom";
import { useNavigate } from "react-router-dom";
import { addCommentToPost } from "../../utils/api/post";
import { toast } from "react-toastify";

const CommentForm = ( {postId, reloadComment} ) => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentLoading, setCommentLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setCommentLoading(true)
    const payload = {
      content: commentText,
      postId: postId,
      userName: commentName,
      userEmail: commentEmail
    }


    await addCommentToPost(payload).then((res) => {
      toast.info('Comment posted')
    });
    setCommentLoading(false)
    reloadComment(); 

  };

  const makeComment = () => {
    
      setComment(true); 
  }; 
 
  return (
    <div className="">
      {comment ? (
        <div className="border-t border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <textarea
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="5"
                placeholder="Your Comment"
                required
                value={commentText}
                onChange={(e)=>setCommentText(e.target.value)}
              ></textarea>
            </div>
            <div>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Name"
                value={commentName}
                onChange={(e)=>setCommentName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email"
                value={commentEmail}
                onChange={(e)=>setCommentEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center gap-3 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                {commentLoading ? <div className="w-5 h-5 border-t border- animate-spin rounded-full border-white"></div>: ''
                }
                Submit Reply <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="border-t border-gray-200 p-6">
          <button
            onClick={makeComment}
            className="text-2xl bg-blue-500 text-white rounded-2xl animate-bounce py-3 px-8 w-fit font-bold mb-4"
          >
            Leave a Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentForm;
