

// const Contact = () => {
//   return (
//     <>

//       <div className="grid grid-cols-3 space-x-4">

//         <div>
//           <h3>Contact Informations:</h3>
//           <p>
//             Our main office is located at Lubhu, Lalitpur, Nepal. You can contact us by calling on +977-9812345678 or mail us at onlineworkerfinder@gmail.com
//           </p>
//         </div>

//         <div>
//           <p>
//             NAT-Services, An online Worker Finder Portal.
//             <br /> <br />
//             Lubhu, Lalitpur, Nepal
//             <br /> <br />
//             Email: info@onlineworkerfinder.com <br />
//             Mob: +977-9812345678, 01-2345678
//             <br /> <br />
//             VAT no: 987654321
//           </p>
//         </div>

//         <div>
//           <h3>Get In Touch</h3>
//           <div>
//             <form>
//               <div className="grid">
//                 <label htmlFor="name">Your Name:</label>
//                 <input type="text"
//                   id="name"
//                   name="name"
//                   className="border border-black rounded-sm border-solid w-60 mb-3 p-1"
//                 />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email"
//                   id="email"
//                   name="email"
//                   className="border border-black rounded-sm border-solid w-60 mb-3 p-1"
//                 />
//                 <label htmlFor="subject">Subject:</label>
//                 <input type="text"
//                   id="subject"
//                   name="subject"
//                   className="border border-black rounded-sm border-solid w-60 mb-3 p-1"
//                 />
//                 <label htmlFor="message">Write Message:</label>
//                 <textarea type="message"
//                   id="message"
//                   name="msg"
//                   className="border border-black rounded-sm border-solid w-[350px] h-[125px] mb-3 p-1"
//                 />
//               </div>

//               <div className="flex items-center my-3">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Send Message
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>

//       </div>

//     </>
//   )
// }
// export default Contact




const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Information:</h3>
          <p className="text-base">
            Our main office is located at Lubhu, Lalitpur, Nepal. You can contact us by calling on <span className="font-semibold italic">+977-9812345678,</span> <br /> or email us at <span className="font-semibold italic">onlineworkerfinder@gmail.com</span>
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-base">
            <span className="font-semibold">NAT-Services, An online Worker Finder Portal.</span> <br /><br />
            Lubhu, Lalitpur, Nepal <br /><br />
            Email: <span className="font-bold">info@onlineworkerfinder.com</span> <br />
            Mob: <span className="font-bold">+977-9812345678, 01-2345678</span> <br /><br />
            VAT no: <span className="font-bold">987654321</span>
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <form className="space-y-3">
            <div>
              <label htmlFor="name" className="block font-semibold">Your Name:</label>
              <input type="text" id="name" name="name" className="border border-gray-300 rounded-sm w-full p-2" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">Email:</label>
              <input type="email" id="email" name="email" className="border border-gray-300 rounded-sm w-full p-2" />
            </div>
            <div>
              <label htmlFor="subject" className="block font-semibold">Subject:</label>
              <input type="text" id="subject" name="subject" className="border border-gray-300 rounded-sm w-full p-2" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold">Write Message:</label>
              <textarea id="message" name="message" className="border border-gray-300 rounded-sm w-full h-32 p-2"></textarea>
            </div>
            <div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
