import React from 'react';
import LogoImg from '../../assets/logo/logo.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (


    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <img src={LogoImg} className='max-h-[50px]' alt="" />
            </h3>
            <p className="text-gray-600">
              Next-gen lead intelligence platform for modern sales teams.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to={(`https://leadcourt.com/#features`)} className="hover:text-primary-500">Features</Link>
              </li>
              <li>
                <Link to={(`https://leadcourt.com/#pricing`)} className="hover:text-primary-500">Pricing</Link>
              </li>
              <li>
                <Link to={(`https://leadcourt.com/#integrations`)} className="hover:text-primary-500"
                >
                  Integrations</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to={('https://blog.leadcourt.com/')} className="hover:text-primary-500">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to={(`https://leadcourt.com/privacyandpolicy.html`)} className="hover:text-primary-500">Privacy and Policy</Link></li>
              <li><Link to={(`https://leadcourt.com/termsandcondition.html`)} className="hover:text-primary-500">Terms and Conditions</Link></li>
              <li><Link to={(`https://leadcourt.com/refundpolicy.html`)} className="hover:text-primary-500">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div
          className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600"
        >
          <p>&copy; 2024 LeadCourt. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
