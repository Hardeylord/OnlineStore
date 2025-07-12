import { MoveLeft, MoveRight, MoveUpRight } from "lucide-react";
import React, {useEffect, useState } from "react";

export default function Slider({ slides }) {

  const [currentIndex, setcurrentIndex] = useState(0);

  function goToPrevious() {
    if (currentIndex <= 0) {
      setcurrentIndex(slides.length - 1);
      return;
    }
    setcurrentIndex(currentIndex - 1);
  }
  //  right arrow
  function goToNext() {
    if (currentIndex >= slides.length - 1) {
      setcurrentIndex(0);
      return;
    }
    setcurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const automaticsScroll = setInterval(() => {
      setcurrentIndex((prev) => {
        if (prev >= slides.length - 1) {
          // clearInterval(automaticsScroll);
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(automaticsScroll);
  }, [currentIndex]);

  return (
    <>
      <div
        className="bg-center w-1/2 bg-cover bg-no-repeat rounded-4xl"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          height: "100%",
          borderRadius: "10px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-1/2 space-y-4 py-2 px-6 flex flex-col justify-between">
        <div className="text-white space-y-2">
          <p className="md:text-xl text-xl font-medium">
            We provide premium courts for both individual and group training
          </p>
          <p className="italic text-xs md:xl">
            Our advanced sports facilities boast diverse courts and fields for
            every athlete
          </p>
        </div>
        {/* plachere */}
        <div className="space-y-2">
        <div>
          <button className="flex items-center bg-black text-white p-2 pl-6 rounded-full space-x-2">
            <p className="text-xs md:xl">Book a court</p>
            <MoveUpRight
              className="bg-white rounded-full p-1 text-black"
              size={28}
              strokeWidth={1.9}
            />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-light text-white"><span className="text-xl">{currentIndex+1}</span>/5</p>
          <div className="flex space-x-2">
          <MoveLeft
            onClick={goToPrevious}
            className="border-2 p-1 rounded-full border-white cursor-pointer"
            size={60}
            color="#fffafa"
            strokeWidth={0.75}
          />
          <MoveRight
            onClick={goToNext}
            className="border-2 p-1 rounded-full border-white cursor-pointer"
            size={60}
            color="#fffafa"
            strokeWidth={0.75}
          />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
