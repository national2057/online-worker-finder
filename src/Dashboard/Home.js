// import Services from "../pages/Services"
import React, { useState } from 'react';
import ImgSlides from './ImgSlides';

const Home = ({ onSearch }) => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className='bg-zinc-500'>
      <h1>Welcome to NAT-Services.</h1>

      <div>
        <form onSubmit={handleSubmit} className="flex items-center mx-[25rem] ">
          <input
            type="text"
            placeholder="I am looking for..."
            value={query}
            onChange={handleChange}
            className="px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-[900px]"
          />
          <button
            type="submit"
            className="-ml-[90px] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>

      <ImgSlides />

      {/* <Services /> */}
    </div>
  )
}
export default Home