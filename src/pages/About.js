// const About = () => {
//   return (
//     <>

//       <h1>Welcome to <span>NAT-Services</span></h1>
//       <div>

//         <div>
//           <p className="mb-10">
//             NAT-Services is established with the aim <b>“one-call solution for a wide range of home maintenance and repair needs”</b>. As an owner of this respective place, it is very hard to find a reputable and trustworthy company or a person or a websites where we can find those workers who works on the home maintenance and renovation sector.
//           </p>

//           <p className="mb-6">
//             This is where NAT-Services is build up for, someone you can rely on without the big guy price to do the smaller work. We provide a wide array of services regarding solutions and repair. Tne main motive of this website to build is, to find a professionals workers in a particular field sector by a one click.
//           </p>
//         </div>
//         <div className="flex">
//           <p>
//             <span>OUR VISION</span>

//             <p>Empower service professionals to provide awesome service experiences.</p>
//           </p>

//           <p>
//             <span>OUR MISSION</span>

//             <p>To create an ecosystem where service professionals can work in a dignified working environment and provide the best service experience to the customers at their doorstep.</p>
//           </p>
//         </div>

//       </div>

//     </>
//   )
// }
// export default About




const About = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Welcome to <span className="text-blue-500">NAT-Services</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-10 text-lg">
            NAT-Services is established with the aim <b>“one-call solution for a wide range of home maintenance and repair needs”</b>. As an owner of this respective place, it is very hard to find a reputable and trustworthy company or a person or a websites where we can find those workers who work on the home maintenance and renovation sector.
          </p>
          <p className="mb-6 text-lg">
            This is where NAT-Services is built for, someone you can rely on without the big guy price to do the smaller work. We provide a wide array of services regarding solutions and repair. The main motive of this website to build is, to find professional workers in a particular field sector by a one click.
          </p>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">OUR VISION</h2>
            <p className="text-lg">Empower service professionals to provide awesome service experiences.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">OUR MISSION</h2>
            <p className="text-lg">To create an ecosystem where service professionals can work in a dignified working environment and provide the best service experience to the customers at their doorstep.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
