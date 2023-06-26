import React from "react";
import { BsSearch, BsBell } from "react-icons/bs";

import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="shadow-md bg-white h-16 w-full justify-center items-center p-3">
      <div className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
        <div className="flex-none sm:pl-6 xl:pl-8 flex items-center lg:w-60 xl:w-72">
          <h6 className="hidden text-left md:text-2xl font-bold p-t- text-sm md:block">
            Ekunola Paul
          </h6>
        </div>
        <div className="flex-auto border-b border-gray-200 h-18 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
          <div className="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2">
            <div className="w-full border bg-gray-100 rounded-full flex flex-row pr-2">
              <button className="inline-block float-left bg-white shadow-md ml- mt- mr-2 text-center border rounded-full w-16">
                <BsSearch size={20} className="inline-block mx-auto" />
              </button>
              <input
                className="w-full borderx py-2 px-1 inline-block focus:outline-none mr- rounded-full bg-transparent"
                placeholder="Users, Packages..."
              />
            </div>
          </div>

          <div className="lg:w-64 pl-8 space-x-2 flex-shrink-0 flex items-center justify-end md:space-x-6">
            {/* <div className="visible-xs md:hidden">
              <button className="inline-block float-left bg-white shadow-md ml- mt- mr-1 text-center border rounded-full w-8 h-8">
                <BsSearch
                  size={20}
                  className="inline-block mx-auto text-red-600"
                />
              </button>
            </div> */}

            <div className="md:mx-4">
              <Link to="/notifications" className="text-white">
                <BsBell
                  size={20}
                  className="fa fa-bell block z-0 relative text-black "
                />
                <span className="bg-red-700 w-3 h-3 block text-center rounded-full z-50 absolute ml-3 mt-[-25px]"></span>
              </Link>
              {/* <NotificationModal /> */}
            </div>

            <div className="pt-2  mr-2 ml- text-center hide-xsx">
              <Link to="/profile" className="text-white">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07N97kaFbouS-Da6Rz-apFXQRAAt_EZhk7A&usqp=CAU"
                  className="h-16 w-16  md:h-16 md:w-16 p-2 rounded-full object-cover  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
