import { Link, useNavigate } from "react-router-dom";
import formatDate from "../../utils/formatDate";


const PostContent = ({posts}) => {

  const navigate = useNavigate();
 
 
    return (
      <div className="space-y-10">
        <section>
          {/* <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">{category.toUpperCase()} POSTS</h2>
            <Link to="news.html" className="text-blue-600 hover:underline text-sm flex items-center">View More <i className="fa fa-arrow-right ml-1"></i></a>
          </div> */}
          <div className="grid md:grid-cols-2 gap-6">
            {posts?.map((item, index)=>(
            <div key={item?._id} className="relative bg-gray-100 rounded overflow-hidden">
              <span onClick={()=>navigate(`post/${item?.slug}`)}>
                <img src={item?.image} alt="" className="w-full h-48 object-cover" />
              </span>
              <div className="p-4">
                <Link to={(`post/${item?.slug}`)}>
                  {item?.title}
                </Link>
                <p className="text-xs text-gray-600">{formatDate(item?.createdAt)} | <strong className="hover:underline">{item?.userId}</strong></p>
              </div>
            </div>
            ))}

 
          </div>
        </section>
      </div>
    );
  };
  
  export default PostContent;