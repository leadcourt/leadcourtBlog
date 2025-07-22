// File: src/components/CommentSection.jsx
export default function CommentSection() {
    return (
      <section className="bg-gray-100 text-gray-800 py-10">
        <div className="container mx-auto px-4">
          {/* Comments Header */}
          <h2 className="text-2xl font-bold mb-6">Comment (3)</h2>
  
          {/* Comment 1 */}
          <div className="flex gap-4 mb-6">
            <img
              src="/images/post/author-2.jpg"
              alt="Asfia"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Asfia Asfia</h4>
              <p className="text-sm text-gray-700 mt-1">
                The payments are made directly from one person to another without passing through a central bank or clearing house. Brighter Business is an online information hub for small business owners. Visually appealing
              </p>
              <p className="text-xs text-gray-500 mt-1">22 Feb, 2018</p>
              <button className="text-blue-600 text-sm hover:underline mt-2">Reply</button>
            </div>
          </div>
  
          {/* Comment 2 (Reply) */}
          <div className="flex gap-4 ml-10 mb-6">
            <img
              src="/images/post/author-3.jpg"
              alt="Kana"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Kana Kafi</h4>
              <p className="text-sm text-gray-700 mt-1">
                Bitcoins can also be traded for other currencies and can be used to send remittances from Filipino expats around the world, a market that BuyBitcoin.ph is targeting.
              </p>
              <p className="text-xs text-gray-500 mt-1">23 Feb, 2018</p>
              <button className="text-blue-600 text-sm hover:underline mt-2">Reply</button>
            </div>
          </div>
  
          {/* Comment 3 */}
          <div className="flex gap-4 mb-6">
            <img
              src="/images/post/author-4.jpg"
              alt="Youma"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Youma Luv</h4>
              <p className="text-sm text-gray-700 mt-1">
                By eliminating the middle man, BuyBitcoin.ph offers a cheaper and faster alternative to banks or money transfer companies. Sean from Location Rebel does something we all dream about once in a while — he works and travels.
              </p>
              <p className="text-xs text-gray-500 mt-1">23 Feb, 2018</p>
              <button className="text-blue-600 text-sm hover:underline mt-2">Reply</button>
            </div>
          </div>
  
          {/* Comment Form */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
            <form className="space-y-4">
              <textarea
                className="w-full p-3 border border-gray-300 rounded"
                rows="4"
                placeholder="Your Comment"
              ></textarea>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Email"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
              >
                Submit Reply
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  