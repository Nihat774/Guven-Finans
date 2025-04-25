"use client";
import { page3 } from "@/constants/guvenFinans/contantItems";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";

function BizKimikPage() {
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null); // video elementinə istinad etmək üçün

  // Play funksiyası
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); 
    }
    setIsClicked(!isClicked);
  };
  return (
    <main className=" flex flex-col md:flex-row items-center  md:items-center gap-8 min-h-[100vh] " >
      <section className="relative md:py-0 pt-10">
        <video
          ref={videoRef} 
          className="h-[300px] w-[660px] md:h-[500px] md:w-[627px] object-cover rounded-[13px] md:rounded-l-[13px]"
          controls
          onClick={()=>setIsClicked(!isClicked)}
        >
          <source
            src="/videos/3512545-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {isClicked ? (
          null
        ) : (
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
      <section className="w-full md:w-[50%] flex flex-col  gap-4">
        <p className="text-2xl md:text-sm ">Biz kimik?</p>
        <p className="text-[32px] md:text-[36px] font-light leading-[110%]">
          Rəqəmlərin dili ilə şirkətiniz üçün innovativ həllər!
        </p>
        <p className="text-xl md:text-[17px] font-light leading-[120%]">
          Rəqəmlərin dili ilə şirkətinizi daha dərindən analiz edərək, mövcud
          maliyyə vəziyyətinizi aydın şəkildə görməyinizə kömək edirik. Dəqiq
          maliyyə uçotu və analitik hesabatlar vasitəsilə şirkətinizin güclü və
          zəif tərəflərini müəyyənləşdirir, inkişaf potensialınızı
          qiymətləndiririk.
        </p>
        <p className="text-xl md:text-[17px] font-light leading-[120%]">
          Şirkətlərin maliyyə uçot sistemini inkişaf etdirməklə, biznes
          proseslərinizi daha şəffaf və idarəolunan hala gətiririk. İnnovativ
          maliyyə həllərimiz sayəsində xərclərinizi azaldır, gəlirliliyinizi
          artırır və risklərinizi minimuma endiririk.
        </p>

        <div>
          {page3.map((item) => {
            return (
              <div key={item.id} className="flex items-center gap-2">
                <Image
                  src={item.icon}
                  alt="image"
                  className="size-[45px] md:size-[35px]"
                  height={100}
                  width={100}
                />
                <div>
                  <p className="text-xl md:text-[17] font-semibold">{item.headText} :</p>
                  <p className=" md:text-[17]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default BizKimikPage;
