"use client";
import React, { useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";

function Video() {
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play funksiyası
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsClicked(!isClicked);
  };
  return (
    <>
      <section className="relative md:py-0 pt-10">
        <video
          ref={videoRef}
          className="h-[300px] w-[660px] md:h-[500px] md:w-[627px] object-cover rounded-[13px] md:rounded-l-[13px]"
          controls
          onClick={() => setIsClicked(!isClicked)}
        >
          <source
            src="/videos/3512545-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {isClicked ? null : (
          <div
            className="size-[80px] flex justify-center items-center bg-white rounded-full absolute top-[39%] left-[36%] md:top-[44%] md:left-[42%] z-10 cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(61, 124, 223, 1) 0%, rgba(137, 170, 222, 1) 50%)",
            }}
            onClick={handlePlay}
          >
            <IoMdPlay className="pl-2 size-[44px] text-white" />
          </div>
        )}
      </section>
    </>
  );
}

export default Video;
