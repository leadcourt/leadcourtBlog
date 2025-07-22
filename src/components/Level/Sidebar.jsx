import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
      <aside className="space-y-8">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Trending News</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="#" className="hover:underline">Envion – Digital Currency Mint in Exploits World’s Lowest Cost Power</Link></li>
            <li><Link to="#" className="hover:underline">Bitcoin Cash Price Hits Record $2,500 to pierce $300 billion</Link></li>
            <li><Link to="#" className="hover:underline">HOLD the Kitten! New Year Gift for Every Crypto Cuttie</Link></li>
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Advertisement</h3>
          <img src="images/advertisement-1.jpg" alt="Ad" className="w-full rounded" />
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
              <Link key={platform} to="#" className="text-gray-600 hover:text-gray-800">
                <i className={`fa fa-${platform}`}></i>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;