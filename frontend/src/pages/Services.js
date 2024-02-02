import { NavLink } from "react-router-dom"

const Services = () => {
  return (
    <div>
      <h1 className="font-semibold text-center text-4xl">Our Services:</h1>
      <div className="grid grid-cols-4 gap-10 px-20 py-10 ">
        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[250px] w-[300px] rounded" src="../images/plumber.png" alt="Plumbler" />
          <h1 className="font-bold text-xl my-2">Plumber</h1>
          <p className="text-justify">Our focus of providing the highest quality plumbing services and products along with our professional commitment earned us the reputation of being the first choice of many commercial clients like you. They count on us to take care of their plumbing needs.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/electrician.png" alt="Electrician" />
          <h1 className="font-bold text-xl my-2">Electrician</h1>
          <p className="text-justify">Our focus of providing the highest quality electrical services and products along with our professional commitment earned us the reputation of being the first choice of many commercial clients like you. They count on us to take care of their electrical needs.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/painting.png" alt="Painting" />
          <h1 className="font-bold text-xl my-2">Painting</h1>
          <p className="text-justify">Services related to painting.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/carpenter.jpg" alt="Carpenter" />
          <h1 className="font-bold text-xl my-2">Carpenter</h1>
          <p className="text-justify">All the services related to the carpentry works.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/home-appliance.jpg" alt="Home Appliance" />
          <h1 className="font-bold text-xl my-2">Home Appliance</h1>
          <p className="text-justify">Our focus of providing the highest quality home appliances services and products along with our professional commitment earned us the reputation of being the first choice of many commercial clients like you.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/water-purify.png" alt="Water Purify" />
          <h1 className="font-bold text-xl my-2">Water Purify</h1>
          <p className="text-justify">Removing undesirable chemicals, biological contaminants, suspended solids, and gases from water.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/cleaning-and-laundry.jpg" alt="Cleaning and Laundry" />
          <h1 className="font-bold text-xl my-2">Cleaning and Laundry</h1>
          <p className="text-justify">Services related to cleaning and laundry.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/civil-workers.jpg" alt="Civil Workers" />
          <h1 className="font-bold text-xl my-2">Civil Workers</h1>
          <p className="text-justify">All the services related to civil works.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/transportation.jpg" alt="Transportation" />
          <h1 className="font-bold text-xl my-2">Transportation</h1>
          <p className="text-justify">Services Related to transportation and delivery.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/air-condition-and-cooling.jpg" alt="Air Condition and Cooling" />
          <h1 className="font-bold text-xl my-2">Air Condition and Cooling</h1>
          <p className="text-justify">Services related to systems and techniques that provide heating, ventilation, and air conditioning (HVAC).</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/cc-camera-and-security.jpg" alt="CC-Camera and Security" />
          <h1 className="font-bold text-xl my-2">CC-Camera and Security</h1>
          <p className="text-justify">Services related to digital security.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/hardware-and-networking.jpg" alt="Hardware and Networking" />
          <h1 className="font-bold text-xl my-2">Hardware and Networking</h1>
          <p className="text-justify">Services related to Hardware and Networking systems.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/aluminium-works.jpg" alt="Aluminium Works" />
          <h1 className="font-bold text-xl my-2">Aluminium Works</h1>
          <p className="text-justify">All Amuninium repairing And maintenance And new Fitting.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/weilding.png" alt="Weilding" />
          <h1 className="font-bold text-xl my-2">Weilding</h1>
          <p className="text-justify">Services related to sculptural process that joins materials like Metals.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>

        <div className="bg-slate-400 p-5 rounded-md w-80">
          <img className="h-[300px] w-[300px] rounded" src="../images/automobile.jpg" alt="Automobile" />
          <h1 className="font-bold text-xl my-2">Automobile</h1>
          <p className="text-justify">All the services related to Automobile; wheeled motor vehicle used for transportation.</p>
          <button className="bg-red-700 w-[250px] h-9 rounded-lg mt-7 ml-4 text-xl font-medium">
            <NavLink>What's your problem?</NavLink>
          </button>
        </div>
      </div>

    </div>
  )
}
export default Services