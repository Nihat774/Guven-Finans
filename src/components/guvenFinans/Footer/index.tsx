import { ourServices, pages } from "@/constants/guvenFinans/contantItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhone,
} from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

function Footer() {
  return (
    <footer>
      <div className="flex md:flex-row flex-col justify-between  min-h-[70vh] bg-darkBlue bg-[#15305B] text-white px-5 md:px-[86px]">
        <div className="flex flex-col ">
          <Image
            src="/images/icon.svg"
            className="size-[200px]"
            alt="icon"
            width={100}
            height={70}
          />
          <div className="flex flex-col gap-7">
            <div>
              <p className="text-2xl font-semibold">Güvən Finans</p>
              <p className="text-[15px] font-light">Uğurlar Güvənlə Başlar</p>
            </div>

            <div className="flex gap-3">
              {/* salam */}
              <Link
                href=""
                className="p-2 h-fit rounded-[5px] text-white border border-white"
              >
                <FaGoogle className="size-[18px]  " />
              </Link>

              <Link
                href=""
                className="p-2 h-fit rounded-[5px] text-white border border-white"
              >
                <FaInstagram className="  size-[18px]  " />
              </Link>
              <Link
                href=""
                className="p-2 h-fit rounded-[5px] text-white border border-white"
              >
                <FaFacebookF className="size-[18px]  " />
              </Link>
              <Link
                href=""
                className="p-2 h-fit rounded-[5px] text-white border border-white"
              >
                <FaLinkedin className=" size-[18px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-4 md:py-11">
          <p className="text-[20px] font-semibold">Əlaqə</p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <TbMailFilled className="size-[25px]" />
              <Link
                href="mailto:info@guvenfinans.az"
                className="text-[17px] hover:underline"
              >
                info@guvenfinans.az
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone className="size-[25px]" />
              <Link href="tel:+994513210989" className="text-[17px] ">
                (+994) 51 321 0989
              </Link>
            </div>

            <div className="flex gap-2 w-[15vw]">
              <FaMap className="size-[6rem] flex h-fit " />
              <Link href="" className="text-[16px] ">
                Əhməd Rəcəbli 33, Esra Plaza, B bloku, 4-cü mərtəbə
                Azərbaycan/Bakı
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-4 md:py-11">
          <p className="text-xl font-semibold">Xidmətlərimiz</p>

          <div className="flex flex-col gap-2">
            {ourServices.map((item, index) => {
              return (
                <div className="flex gap-2 items-center" key={index}>
                  <p className="size-[4px] rounded-full bg-white"></p>
                  <Link href={item.path} className="font-light text-[17px]">
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 md:pb-0 pb-10">
          <p className="text-xl font-semibold">Səhifələr</p>

          <div className="flex flex-col gap-1 ">
            {pages.map((item, index) => {
              return (
                <div className="flex gap-2 items-center hover:underline" key={index}>
                  <p className="size-[4px] rounded-full bg-white"></p>
                  <Link href={item.path} className="text-xl md:text-[17px] font-light ">
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#15305B] px-5 flex justify-center  md:text-start text-center py-2 border-t border-white text-white text-[15px] font-light">
        <p>
          Copyright &copy; 2014 Bütün Hüquqları Güvən Finans tərəfindən qorunur.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
