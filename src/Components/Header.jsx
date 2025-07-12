import { AlignJustify } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [openHeader, setopenHeader] = useState(false);
  return (
    <div className="pt-2 z-50 w-full fixed top-0 left-0 px-14">
      <div className="bg-[#1F1F1F] border-[#3d3d3d] border-[1px]   flex justify-between items-center p-[10px] rounded-[26px]">
        <div className="flex space-x-1">
          <img src="" alt="" />
          <p className="text-white">DataWheel</p>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-8 text-white">
            <li>
              <Link to="/OnlineStore">Home</Link>
            </li>
            <li>
              <Link to="/OnlineStore/store">Store</Link>
            </li>
            <li>About Us</li>
            <li>Offer</li>
            <li>Membrship</li>
          </ul>
        </div>
        <div className="text-white space-x-2 hidden md:flex">
          <a
            className="bg-[#3d3d3d] px-3 py-2 rounded-[16px] font-light"
            href="http://"
          >
            Sign In
          </a>
          <a
            className="bg-[#6E9A7F] px-3 py-2 rounded-[16px] font-light"
            href="http://"
          >
            Log In
          </a>
        </div>
        {/* hamburger */}
        <AlignJustify
          onClick={() => setopenHeader(!openHeader)}
          className="cursor-pointer md:hidden"
          size={28}
          color="#fffafa"
          strokeWidth={0.75}
        />
      </div>
      {/* mobile menu */}
      {openHeader ? (
        <div className="bg-[#1F1F1F] h-fit mt-2 rounded-2xl md:hidden">
          <ul className=" text-white p-10 flex flex-col space-y-7 items-center">
            <li>
              <Link onClick={() => setopenHeader(false)} to="/OnlineStore">Home</Link>
            </li>
            <li>
              <Link onClick={() => setopenHeader(false)} to="/OnlineStore/store">Store</Link>
            </li>
            <li>About Us</li>
            <li>Offer</li>
            <li>Membrship</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
