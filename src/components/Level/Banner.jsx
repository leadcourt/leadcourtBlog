import React from 'react';
import { useRecoilState } from 'recoil';
import { postState } from '../../utils/atom/postAtom';
import formatDate from '../../utils/formatDate';
import { Link } from 'react-router-dom';

const Banner = () => {
  const postAtom = useRecoilState(postState)

  return (
    <section className="bg-gray-50 border-b py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div
              className={`relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden bg-gray-700 bg-blend-multiply `}
              style={{ backgroundImage: `url(${postAtom?.[0][0]?.image})` }}
            >
              
              <div className="absolute top-4 left-4 text-white space-y-2">
                <h6 className="text-sm">{formatDate(postAtom?.[0][0]?.createdAt)} 
                  </h6>
                <Link to={`post/${postAtom?.[0][0]?.slug}`} className="block text-xl font-semibold leading-tight hover:underline">
                {(postAtom?.[0][0]?.title)}
                </Link> 

                
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: postAtom?.[0][0]?.content?.slice(0, 50) }}
                  /> 
              </div>
            </div>
          </div>

          <div className="space-y-6">
          {postAtom?.[0][1] ? 
            <div
              className="relative h-32 bg-cover bg-center rounded-lg overflow-hidden bg-gray-700  bg-blend-multiply "
              style={{ backgroundImage: `url(${(postAtom?.[0][1]?.image)})` }}
            >
              <div className="absolute bottom-2 left-2 text-white">
                <h6 className="text-xs">{formatDate(postAtom?.[0][1]?.createdAt)}</h6>
                <Link to={`post/${postAtom?.[0][1]?.slug}`} className="block text-sm font-medium hover:underline">
                {(postAtom?.[0][1]?.title)}
                </Link>
                {/* <Link to="#" className="inline-block mt-1 px-2 p)y-0.5 bg-green-600 text-xs rounded">Finance</span> */}
              </div>
            </div>
            : ''
               }
            {postAtom?.[0][2] ? 
            <div
              className="relative h-32 bg-cover bg-center rounded-lg overflow-hidden bg-gray-700 bg-[url(/blog_images/google.webp)] bg-blend-multiply "
              style={{ backgroundImage: `url(${(postAtom?.[0][2]?.image)})` }}
            >
              <div className="absolute bottom-2 left-2 text-white">
                <h6 className="text-xs">{formatDate(postAtom?.[0][2]?.createdAt)}</h6>
                <Link to={`post/${postAtom?.[0][2]?.slug}`} className="block text-sm font-medium hover:underline">
                {(postAtom?.[0][2]?.title)}
                </Link>
                {/* <Link to="#" className="inline-block mt-1 px-2 p)y-0.5 bg-red-600 text-xs rounded">Business</span> */}
              </div>
            </div>
            :
            ""
            }
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
