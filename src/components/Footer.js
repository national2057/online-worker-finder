import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaRegEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
// import Policy from '../pages/policy';

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-2 '>
        <div className="bg-violet-500 text-white p-4">
          <h1>NAT-Services</h1>
          <p> NAT-Services is established with the aim <b>“one-call solution for a wide range of home maintenance and repair needs”</b>. As an owner of this respective place, it is very hard to find a reputable and trustworthy company or a person or a websites where we can find those workers who works on the home maintenance and renovation sector.</p>
          <p>
            <h2>Contact Details:</h2>
            <ul>
              <li className='flex'><FaLocationDot /> Lubhu, Lalitpur, Nepal</li>
              <li className='flex'><FaRegEnvelope /> info@onlineworkerfinder.com</li>
              <li className='flex'><FaPhone /> +977-9812345678, 01-2345678</li>
            </ul>
          </p>
        </div>

        <div className='bg-gray-900 p-4 text-gray-300'>
          <h1 className='font-bold text-2xl underline'>Our Services:</h1>
          <ul>
            <li><NavLink>Electricity</NavLink></li>
            <li><NavLink>Plumber</NavLink></li>
            <li><NavLink>Painting</NavLink></li>
            <li><NavLink>Home Appliance</NavLink></li>
            <li><NavLink>Cleaning and Laundry</NavLink></li>
            <li><NavLink>Civil Works</NavLink></li>
            <li><NavLink>Transportation</NavLink></li>
          </ul>

          <h1><NavLink>Privacy Policy</NavLink></h1>

          <p>Find Us On:</p>
          <ul className="flex space-x-5 ml-8 mb-5">
            <li><a href="#" className="text-gray-300 hover:text-white"> <FaFacebook size={30} /> </a></li>
            <li><a href="#" className="text-gray-300 hover:text-white"> <FaInstagram size={30} /> </a></li>
            <li><a href="#" className="text-gray-300 hover:text-white"> <FaTwitter size={30} /> </a></li>
            <li><a href="#" className="text-gray-300 hover:text-white"> <FaLinkedin size={30} /> </a></li>
            <li><a href="#" className="text-gray-300 hover:text-white"> <FaYoutube size={30} /> </a></li>
          </ul>
          <hr />
          <div className="">
            <p className="text-gray-300 my-3">&copy; {new Date().getFullYear()} NAT-Services, An Online Worker Finder Portal. All Rights Reserved. Developed by <b>NATIONAL</b>.</p>
          </div>

        </div>

      </div>
    </>
  )
}
export default Footer