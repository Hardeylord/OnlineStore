import { ArrowDownToLine, Zap } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="mt-10">
        <div className="flex space-y-5 md:flex-row flex-col w-full rounded-t-2xl py-14 p-5 items-center bg-[#1F1F1F]">
          <div className="md:w-1/4">
            <div className=" w-48 space-y-3 h-40 flex flex-col justify-center items-center rounded-3xl font-bold text-xl bg-white">
              <div>
                <p>Download</p>
                <div className="flex">
                  Our
                  <Zap
                    className="border-[1px] rounded-full"
                    size={28}
                    strokeWidth={0.75}
                  />
                  App
                </div>
              </div>
              <button className="flex border-2 px-4 py-2 items-center rounded-full space-x-2">
                <img className="size-5" src="/grommet-icons_apple.png" alt="" />
                <img className="size-5" src="/mage_playstore.png" alt="" />
                <ArrowDownToLine
                  className="bg-black p-1 rounded-full"
                  size={25}
                  color="#fffafa"
                  strokeWidth={0.75}
                />
              </button>
            </div>
          </div>
          <div className="md:w-1/4 text-white space-y-4">
            <p className="text-center text-2xl">Facilities</p>
            <ul className="flex flex-col space-y-2 items-center">
              <li>Tennis Courts</li>
              <li>Basktball Courts</li>
              <li>Football Field</li>
              <li>Swimming Pool</li>
              <li>Gym & Fitness Center</li>
            </ul>
          </div>
          <div className="md:w-1/4 space-y-4">
            <p className="text-center text-white text-2xl">Socials</p>
            <div className="flex flex-col items-center space-y-3">
              <button className="px-4 w-fit py-2 rounded-full bg-white">
                instagram
              </button>
              <button className="px-4 w-fit py-2 rounded-full bg-white">
                Twitter
              </button>
              <button className="px-4 w-fit py-2 rounded-full bg-white">
                Facebook
              </button>
            </div>
          </div>
          <div className="md:w-1/4 space-y-4">
            <p className="text-center text-white text-2xl">
              Subscribe To Our NewsLetter
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="subscribe@gmail.com"
                className=" bg-white outline-0 rounded-l-full p-2"
              />
              <button className="bg-[#6E9A7F] cursor-pointer p-2 px-4 rounded-r-full text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
