import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaRegEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[1px] '>
        <div className="bg-gray-600 text-white p-5 w-[530px]">
          <h1 className="text-3xl font-bold mb-2">NAT-Services</h1>
          <p className="mb-4">NAT-Services is established with the aim <b>“one-call solution for a wide range of home maintenance and repair needs”</b>. As an owner of this respective place, it is very hard to find a reputable and trustworthy company or a person or a websites where we can find those workers who works on the home maintenance and renovation sector.</p>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Details:</h2>
            <ul>
              <li className='flex items-center'><FaLocationDot className="mr-2" /> Lubhu, Lalitpur, Nepal</li>
              <li className='flex items-center'><FaRegEnvelope className="mr-2" /> info@onlineworkerfinder.com</li>
              <li className='flex items-center'><FaPhone className="mr-2" /> +977-9812345678, 01-2345678</li>
            </ul>
          </div>
        </div>

        <div className='bg-gray-700 p-5 text-gray-300 flex w-[990px] -ml-[230px]'>
          <div className='w-2/5'>
            <h1 className='text-3xl font-bold mb-4 underline'>Our Services:</h1>
            <ul className="mb-6">
              <li><NavLink className="text-gray-300 hover:text-white">Electricity</NavLink></li>
              <li><NavLink className="text-gray-300 hover:text-white">Plumber</NavLink></li>
              <li><NavLink className="text-gray-300 hover:text-white">Painting</NavLink></li>
              <li><NavLink className="text-gray-300 hover:text-white">Home Appliance</NavLink></li>
              <li><NavLink className="text-gray-300 hover:text-white">Cleaning and Laundry</NavLink></li>
              <li><NavLink className="text-gray-300 hover:text-white">Civil Works</NavLink></li>
              <li><NavLink className="text-gray-300 hover:text-white">Transportation</NavLink></li>
            </ul>
          </div>

          <div className='w-3/5'>
            <h1 className="mb-4"><NavLink to="/policy" className="text-gray-300 hover:text-white text-2xl">Privacy Policy</NavLink></h1>

            <p className="mb-4">Find Us On:</p>
            <ul className="flex space-x-5 mb-4">
              <li><a href="#" className="text-gray-300 hover:text-white"> <FaFacebook size={30} /> </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white"> <FaInstagram size={30} /> </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white"> <FaTwitter size={30} /> </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white"> <FaLinkedin size={30} /> </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white"> <FaYoutube size={30} /> </a></li>
            </ul>
            <hr className="border-gray-600 mb-4" />
            <div>
              <p className="text-gray-300 mb-3">&copy; {new Date().getFullYear()} NAT-Services, An Online Worker Finder Portal. All Rights Reserved. Developed by <span className='italic font-semibold'>NATIONAL</span>.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer;
