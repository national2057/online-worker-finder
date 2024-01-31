

const Contact = () => {
  return (
    <>

      <div className="grid grid-cols-3 space-x-4">

        <div>
          <h3>Contact Informations:</h3>
          <p>
            Our main office is located at Lubhu, Lalitpur, Nepal. You can contact us by calling on +977-9812345678 or mail us at onlineworkerfinder@gmail.com
          </p>
        </div>

        <div>
          <p>
            NAT-Services, An online Worker Finder Portal.
            <br /> <br />
            Lubhu, Lalitpur, Nepal
            <br /> <br />
            Email: info@onlineworkerfinder.com <br />
            Mob: +977-9812345678, 01-2345678
            <br /> <br />
            VAT no: 987654321
          </p>
        </div>

        <div>
          <h3>Get In Touch</h3>
          <div>
            <form>
              <div className="grid">
                <label htmlFor="name">Your Name:</label>
                <input type="text"
                  id="name"
                  name="name"
                  className="border border-black rounded-sm border-solid w-60 mb-3 p-1"
                />
                <label htmlFor="email">Email:</label>
                <input type="email"
                  id="email"
                  name="email"
                  className="border border-black rounded-sm border-solid w-60 mb-3 p-1"
                />
                <label htmlFor="subject">Subject:</label>
                <input type="text"
                  id="subject"
                  name="subject"
                  className="border border-black rounded-sm border-solid w-60 mb-3 p-1"
                />
                <label htmlFor="message">Write Message:</label>
                <textarea type="message"
                  id="message"
                  name="msg"
                  className="border border-black rounded-sm border-solid w-[350px] h-[125px] mb-3 p-1"
                />
              </div>

              <div className="flex items-center my-3">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>

    </>
  )
}
export default Contact