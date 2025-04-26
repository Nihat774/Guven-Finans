import Link from "next/link";
import React from "react";
import { CgArrowBottomRight, CgArrowTopRight } from "react-icons/cg";
import Blog from "./blog/page";
import BizKimikPage from "./bizkimiz/page";
import Comments from "./musteri-reyleri/page";
import ContactUsPage from "./bizimle-elaqe/page";

function GuvenFinans() {
  return (
    <>
      <section className="text-white h-[80vh] flex flex-col gap-3 items-center justify-around md:justify-center">
        <h1 className="text-center md:text-[45px] text-[40px]">
          İnnovativ maliyyə həlləri
        </h1>
        <p className="text-xl md:text-[17px] w-full md:w-[50vw]">
          Rəqəmlərin dili ilə şirkətinizi sizə tanıdaraq, şirkətlərin maliyyə
          uçot sistemini inkişaf etdirib, innovativ maliyyə həlləri nəticəsində
          şirkətinizə dəyər qatırıq.
        </p>
        <Link
          href="/guvenfinans"
          className="flex gap-1 rounded-bl-[10px] border rounded-tr-[10px] w-[164px] h-[45px] md:h-[54px] justify-center items-center"
        >
          <p>Xidmətlərimiz</p>
          <CgArrowBottomRight className="font-bold text-xl" />
        </Link>

        <div className="flex justify-end w-full ">
          <Link
            href="/guvenfinans"
            className="absolute md:static right-0 top-[80vh] rotate-text gap-1 rounded-bl-[10px] border rounded-tr-[10px] w-[130px] h-[40px] md:w-[164px] md:h-[54px] flex justify-center items-center"
          >
            <p className="text-sm ">Bizə yazın</p>
            <CgArrowTopRight className="font-bold md:text-xl text-[16px]" />
          </Link>
        </div>
      </section>

      <section id="bloq">
        <Blog />
      </section>

      <section id="bizkimik?">
        <BizKimikPage />
      </section>

      <section id="musteri-reyleri">
        <Comments />
      </section>

      <section className="bizimle-elaqe">
        <ContactUsPage />
      </section>
    </>
  );
}

export default GuvenFinans;
