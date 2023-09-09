import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen text-center flex flex-col items-center justify-center">
        <h2 className="px-6 font-semibold text-white text-3xl">
          Contact Management and Covid Tracking 
        </h2>

        
        </div>

        <div className="px-6 mt-6 w-full mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <Link to="/contactApp">
            <div className="componentBar w-full sm:w-fit">Contact App</div>
          </Link>

          <Link to="/graphApp">
            <div className="componentBar w-full sm:w-fit">
              Charts & Maps App
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

