"use client";
import { advantagesText, numbers } from "@/constants/guvenFinans/contantItems";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

function Blog() {
  return (
    <>
      <main className="bg-white -mx-[86px] ">
        <section className="bg-white ">
          <div className="px-[100px] flex justify-evenly items-center  h-[40vh]">
            {numbers.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <div className="flex flex-col items-center">
                    <p className="text-[75px] font-semibold font-urbanist">
                      {item.count}
                    </p>
                    <p className="text-[17px] font-light">{item.text}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </section>

        <div
          className="flex justify-evenly items-center  bg-custom-gradient min-h-[100vh] rounded-[15px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(26, 109, 242, 1) 0%, rgba(8, 16, 28, 1) 50%, rgba(50, 98, 176, 1) 100%)",
          }}
        >
          <section className=" relative flex items-center -mx-[86px] ">
            <div className="absolute top-[28%] z-10 left-[-4vw] bg-[#15305B] flex justify-center items-center p-6 bg- rounded-[20px] text-white w-[223px] h-[140px]">
              <p>
                Güvən Finans işini dürstlük və keyfiyyət ilə icra etməyi əsas
                alır.
              </p>
            </div>
            <Image
              src="/images/cartimages/image-1.png"
              className="rounded-[45px] object-cover"
              alt="image"
              width={450}
              height={450}
            />
          </section>

          <section className="w-[41%] text-white flex flex-col gap-6">
            <p className="text-xl">Niyə biz?</p>
            <p className="text-4xl font-light w-[34vw]">
              Güvənli və innovativ maliyyə həlləri mərkəzi!
            </p>
            <p className="font-light text-[17px]">
              Finozada səyahətimiz sadə, lakin güclü bir missiya ilə başladı:
              ekspert rəhbərliyi və sarsılmaz dəstək vasitəsilə fərdlərə və
              bizneslərə maliyyə məqsədlərinə çatmaq üçün səlahiyyət vermək.
            </p>
            <p>
              Maliyyə sənayesində uzun illər təcrübəmizlə biz dürüstlük,
              şəffaflıq və mükəmməllik üçün reputasiya qurmuşuq.
            </p>

            <div className="flex flex-col gap-3">
              {advantagesText.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className="flex items-center gap-2">
                      <FaCheck className="text-white font-semibold" />
                      <p className="text-lg leading-[100%] font-light">
                        {item.text}
                      </p>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Blog;
