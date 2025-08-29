import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faXTwitter,   // for "X" (Twitter)
  faPinterest,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';


const ConnectWithUs = () => {


  const socials = [
    {
      platform: "instagram",
      link: 'https://www.instagram.com/leadcourt/',
      icon: faInstagram,
      // class: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent',
      // class: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent',
      // hover: ' hover:text-blue-600 hover:bg-white'
      class: 'text-red-600 hover:bg-white',
    },
    {
      platform: "youtube",
      link: 'https://www.youtube.com/channel/UCM_QRd0UO-sV05-gSNcBDhQ',
      icon: faYoutube,
      class: 'text-red-600 hover:bg-white',
    },
    {
      platform: "x",
      link: 'https://x.com/getleadcourt',
      icon: faXTwitter,
      class: 'text-white hover:text-blue-600 hover:bg-white',
    },
    {
      platform: "pinterest",
      link: 'https://in.pinterest.com/leadcourt/',
      icon: faPinterest,
      class: 'text-red-500 hover:bg-white',
    },
    {
      platform: "facebook",
      link: 'https://www.facebook.com/profile.php?id=61579393380354',
      icon: faFacebookF,
      class: 'text-blue-600 hover:bg-white',
    },
  ]


  return (
    <section className="bg-blue-900 text-white py-10">
      <div className=" max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-4 px-7 py-2 rounded-full border w-fit m-auto">Connect with us</h2>
        <ul className="flex justify-center  text-white gap-5 text-xl">
          {socials.map((item) => (
            <li key={item.platform}>
              <Link to={item.link} target='_blank' className="hover:text-gray-300">
                  <span className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent ">
                    <FontAwesomeIcon size="xl" icon={item.icon} className={` ${item.class} p-2 rounded-2xl  transition-all duration-300 ease-in-out  `} />
                  </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ConnectWithUs;
