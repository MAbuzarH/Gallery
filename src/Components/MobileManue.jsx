import React, { useState } from "react";
import { useDispatch } from "react-redux";


import {
  selectCategories,
} from "../features/catagary/catagarySlice";

function MobileManue() {
  const dispatch = useDispatch();


    return (
   
      <ul className="md:hidden flex flex-col font-bold  absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t  text-black">
       <div>
            <ul className="flex flex-col justify-around items-center gap-3 text-[20px] font-semibold">
              <button
                className="rounded-full hover:bg-gray-500 py-2 px-3 cursor-pointer"
                onClick={()=> dispatch(selectCategories('All'))}
              >
                All
              </button>
              <button
                className="rounded-full hover:bg-gray-500 py-2 px-3 cursor-pointer"
                onClick={()=>dispatch(selectCategories('Photo'))}
              >
                Photo
              </button>
              <button
                className="rounded-full hover:bg-gray-500 py-2 px-3 cursor-pointer"
                onClick={() => dispatch(selectCategories('Video'))}
              >
                Video
              </button>
            </ul>
          </div>
          <div className="flex justify-around items-center py-2">
            <div className="ml-5 flex w-[100%] justify-around items-center ">
              <input
                type="search"
                className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />

              {/* <!--Search icon--> */}
              <span
                className="input-group-text flex items-center whitespace-nowrap rounded-full px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 cursor-pointer hover:bg-slate-400"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
      </ul>
 
);
  
}

export default MobileManue;
