import { Link } from "react-router-dom";

export default function Breadcrumb() {
    return (
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold">Blog Single style 2</h2>
          <ol className="flex space-x-2 text-sm mt-2 text-gray-600">
            <li><Link to="/index.html" className="hover:underline">Home</Link></li>
            <li>/</li>
            <li><Link to="#" className="hover:underline">Blog</Link></li>
            <li>/</li>
            <li className="text-blue-600">Blog details v3</li>
          </ol>
        </div>
      </div>
    );
  }
  