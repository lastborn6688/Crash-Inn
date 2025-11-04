import React from "react";
import { SlCalender } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { cities } from "../assets/cities";

const Hero = () => {

  return (
    <section className='justify-center flex flex-col items-start px-6 md:px-16 lg:px-24 xl:px-32 bg-[url("https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332")] bg-no-repeat bg-cover text-[rgb(250,249,246)] bg-center h-screen'>
      <p className="px-3.5 py-1 mt-20 rounded-full bg-amber-400/70">
        {" "}
        Stay Rest Refresh
      </p>
      <h1 className="bg-black/50 text-white rounded-2xl justify-center items-center play-fair text-2xl md:text-5xl md:text-[56px] py-5  font-bold md:font-extrabold max-w-xl mt-4">
        Experience The Art Of A Perfect Getaway.
      </h1>
      <p className="bg-black/50 text-white max-w-103 mt-0 rounded-b-2xl text-sm md:text-base">
        Discover a world of unmatched elegance and comfort at the most exclusive
        destinations. Start your escape today.
      </p>
      <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-6  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <SlCalender />

            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <SlCalender />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <SlCalender />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <GoSearch />
          <span>Search</span>
        </button>
      </form>
    </section>
  );
};

export default Hero;
