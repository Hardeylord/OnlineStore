import React from "react";
import {
  ArrowDownToLine,
  Bike,
  Boxes,
  ChevronsRight,
  MoveUpRight,
  Plus,
  Share,
  Share2,
  Shrub,
  Star,
  Zap,
} from "lucide-react";
import Friends from "../Components/Friends";
import Slider from "../Components/Slider";

export default function Home() {
  const slides = [
    { image: "professional-cyclist-woman-min.jpg" },
    { image: "john-fornander-4R9CcBdQTEg-unsplash-min.jpg" },
    { image: "massimiliano-mancini-tKTZ1rHpX4Y-unsplash-min.jpg" },
    { image: "tennis-min.jpg" },
    {image:"mick-de-paola-LUPJoR3OfEg-unsplash.jpg"}
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative -mt-10 bg-[url(professional-cyclist-woman-min.jpg)] h-fit md:h-screen bg-cover flex ">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative pt-20 md:flex z-10">
          <div className="md:w-1/2 space-y-4 py-16 px-10 md:h-full text-white flex flex-col md:justify-between md:items-start items-center">
            {/* avatar div */}
            <div className="space-y-3 flex flex-col justify-center items-center md:items-start">
              <div className="w-fit justify-center px-4 py-3 rounded-full bg-white/30 backdrop-blur-md flex">
                <Friends />
              </div>
              <div className="md:w-1/2">
                <p className="text-center md:text-[11px] text-2xl md:text-start">
                  We're committed to delivering a high-quality experince in a
                  welcoming and supportive atmosphere
                </p>
              </div>
            </div>
            {/* button */}
            <div className="space-y-2">
              <p className="italic text-center md:text-start">
                All in one-sports <br></br> facilities center
              </p>
              <button className="flex bg-black p-2 pl-6 rounded-full space-x-2">
                <p>join with us</p>
                <MoveUpRight
                  className="bg-white rounded-full p-1 text-black"
                  size={28}
                  strokeWidth={1.9}
                />
              </button>
            </div>
            {/* large text */}
            <div className="flex flex-col text-3xl md:text-5xl text-center md:text-start">
              <h1 className=" font-medium">
                Refresh, Relax, and Rediscover Life's simple Pleasures
              </h1>
            </div>
          </div>
          {/* right part */}
          <div className="md:w-1/2 md:space-y-2  md:py-16 px-10 md:h-full flex flex-col justify-between items-center md:items-end">
            {/* buttons */}
            {/* <div className="hidden md:flex flex-col space-y-2">
              <button className="px-4 py-2 rounded-full bg-white">
                instagram
              </button>
              <button className="px-4 py-2 rounded-full bg-white">
                Twitter
              </button>
              <button className="px-4 py-2 rounded-full bg-white">
                Facebook
              </button>
            </div> */}

            {/* refer */}
            <div className="space-y-7 flex items-center md:flex-col  md:items-end">
              <div className="w-96 h-48 rounded-2xl p-7 space-y-6 flex flex-col justify-center bg-white/30 backdrop-blur-md">
                <div className="text-white">
                  <p className="text-3xl">Refer a friend</p>
                  <p>Shar your referral link with friends</p>
                </div>
                <div className="flex space-x-7">
                  <button className="flex bg-white px-4 py-2 rounded-full space-x-2">
                    <Share2
                      className="rounded-full p-1 text-black"
                      size={28}
                      strokeWidth={1.9}
                    />
                    <p>share link</p>
                  </button>
                  {/* frinds */}
                  <Friends />
                </div>
              </div>
              {/* download */}
              <div className="hidden w-48 space-y-3 h-40 md:flex flex-col justify-center items-center rounded-3xl font-bold text-xl bg-white">
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
                  <img
                    className="size-5"
                    src="grommet-icons_apple.png"
                    alt=""
                  />
                  <img className="size-5" src="mage_playstore.png" alt="" />
                  <ArrowDownToLine
                    className="bg-black p-1 rounded-full"
                    size={25}
                    color="#fffafa"
                    strokeWidth={0.75}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* discovery */}
      <div className="w-full px-10 mt-20 md:space-x-32 flex flex-col md:flex-row">
        {/* left */}
        <div className="md:w-1/2 space-y-10">
          {/* upper */}
          <div className="flex justify-between items-center space-x-2">
            <div className="w-fit bg-black p-7 rounded-full">
              <Shrub size={40} color="#fffafa" strokeWidth={0.75} />
            </div>
            <div className="space-x-1 flex text-xs">
              <button className="px-4 py-2 border-[1px] rounded-full bg-white">
                Competition
              </button>
              <button className="px-4 py-2 text-white  rounded-full bg-black">
                Training
              </button>
              <button className="px-4 py-2 border-[1px] rounded-full bg-white">
                Friendly Match
              </button>
            </div>
          </div>
          {/* lower */}
          <div className="w-full rounded-4xl flex h-[60vh] bg-[#6E9A7F] p-4">
            <Slider slides={slides} />
          </div>
        </div>
        {/* right */}
        <div className="flex md:w-1/2 flex-col justify-between">
          <div>
            <p className="text-center text-3xl my-5 md:my-0 md:text-start md:text-5xl font-bold">
              Discover Excellence in Courts, Fields, and Beyond
            </p>
          </div>
          <div className="flex space-x-5 md:space-x-10">
            <div className="relative w-1/2 md:w-60 h-[40vh] rounded-3xl bg-cover bg-center bg-[url(jacek-dylag-fZglO1JkwoM-unsplash-min.jpg)]">
              <div className="w-fit absolute right-30 top-20 md:right-48 bg-black p-7 rounded-full">
                <Plus size={40} color="#fffafa" strokeWidth={0.75} />
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center w-1/2">
              <Boxes size={28} color="black" strokeWidth={0.75} />
              <p className="font-medium">
                Our top-tier sports facilities feature a range of courts and
                fields, including tennis, basketball, and football, perfect for
                both casual players and competitive athletes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* pricing */}
      <div className="justify-center mt-20 items-center flex flex-col w-full text-4xl md:text-7xl font-medium">
        <p className="text-center">Find the Parfect Plan for Your</p>
        <div className="flex items-center space-x-4">
          {" "}
          <p>Athletic</p>
          <Bike
            size={55}
            color="black"
            className="border-2 p-2 mt-2 rounded-full"
            strokeWidth={0.75}
          />
          <p>Journey</p>
        </div>
        <div className="flex mt-10 text-xl font-medium items-center">
          <p className="bg-[#efefef] p-2 rounded-full pr-10">
            See More Options
          </p>
          <ChevronsRight
            className="bg-black p-2 -ml-10 rounded-full"
            size={50}
            color="#fffafa"
            strokeWidth={0.75}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row  w-full h-fit  md:h-[80vh] md:space-x-7 px-10 mt-16">
        <div className="bg-[#6E9A7F] px-5 md:px-10 py-5 rounded-2xl flex flex-col
          justify-between relative md:w-1/2">
          <img
            src="Highlight_11.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />
          <div className="relative z-10 text-white">
            <button className="flex bg-black py-2 px-4 rounded-full space-x-2">
              <p>Best Seller</p>
            </button>
          </div>
          <div className="relative text-center flex flex-col space-y-10 items-center z-10 text-white">
            <div className="space-y-5">
              <p className="text-5xl font-medium">
                6 Season <br /> Package
              </p>
              <p className="text-xl">
                individualized <br /> Training
              </p>
            </div>
            <button className="flex bg-black py-4 px-10 rounded-full space-x-2">
              <p className="text-5xl flex items-center">
                $50 <span className="text-xl font-light">/Session</span>
              </p>
            </button>
          </div>
          <div className="relative flex items-center justify-between z-10 text-white">
            <button className="flex  border-2 h-fit p-2 px-5 rounded-full">
              <p>1 Year Expiry</p>
            </button>
            <div className="w-1/2 flex flex-col item-center">
              <div className="h-[2px] w-full bg-white"></div>
              <p className="text-center">600$/Total Cost</p>
            </div>
            <button className="flex bg-white p-7 rounded-full space-x-2">
              <MoveUpRight size={40} color="#000000" strokeWidth={0.75} />
            </button>
          </div>
        </div>
        <div className="bg-[url(robert-ruggiero-buGdVvTxJ38-unsplash-min.jpg)] bg-cover bg-center px-10 py-5 rounded-2xl flex flex-col
          justify-between relative md:w-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative z-10 text-white">
            <button className="flex bg-black py-2 px-4 rounded-full space-x-2">
              <p>Best Seller</p>
            </button>
          </div>
          <div className="relative text-center flex flex-col space-y-10 items-center z-10 text-white">
            <div className="space-y-5">
              <p className="text-5xl font-medium">
                12 Season <br /> Package
              </p>
              <p className="text-xl">
                individualized <br /> Training
              </p>
            </div>
            <button className="flex bg-black py-4 px-10 rounded-full space-x-2">
              <p className="text-5xl flex items-center">
                $98 <span className="text-xl font-light">/Session</span>
              </p>
            </button>
          </div>
          <div className="relative flex items-center justify-between z-10 text-white">
            <button className="flex  border-2 h-fit p-2 px-5 rounded-full">
              <p>1 Year Expiry</p>
            </button>
            <div className="w-1/2 flex flex-col item-center">
              <div className="h-[2px] w-full bg-white"></div>
              <p className="text-center">1176$/Total Cost</p>
            </div>
            <button className="flex bg-white p-7 rounded-full space-x-2">
              <MoveUpRight size={40} color="#000000" strokeWidth={0.75} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// bg-white/30 backdrop-blur-md
