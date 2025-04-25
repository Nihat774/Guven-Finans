import Link from "next/link";
import React from "react";
import { CgMail } from "react-icons/cg";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

function SubHeader() {
  const icons = [
    {
      id:1,
      icon:<FaGoogle />
    },
    {
      id:2,
      icon:<FaInstagram  />
    },
    {
      id:3,
      icon:<FaFacebookF  />
    },
    {
      id:4,
      icon:<FaLinkedin />
    }
  ]
  return (
    <>
      <header className="flex items-center justify-between text-white h-14 px-5 md:px-[86px]">
        <div className="flex md:flex-row flex-col gap-0 md:gap-6">
          <div className="flex gap-1 items-center text-white">
            <CgMail className="size-[20px] font-semibold" />
            <Link
              href="mailto:info@guvenfinans.az"
              className="text-[15px] font-light hover:underline"
            >
              info@guvenfinans.az
            </Link>
          </div>
          <div className="h-[25px] w-[2px] bg-white md:flex hidden"></div>
          <div className="flex gap-1 items-center">
            <FaPhone />
            <Link href="tel:+994513210989">(+994) 51 321 0989</Link>
          </div>
        </div>
        {/* icons */}
        <div className="flex gap-2 md:gap-3">
         {
          icons.map((item)=>{
            return(
             
              <Link href="" key={item.id} className="bg-white flex items-center rounded-full p-2">
              <p className="text-darkBlue text-[#15305B] text-[16px] md:text-[18px]">{item.icon}</p>
              </Link>
             
            )
          })
         }
          {/* <Link href="" className="bg-white rounded-full p-2">
            <FaGoogle className="text-darkBlue text-[#15305B] size-[18px] " />
          </Link>

          <Link href="" className="bg-white rounded-full p-2">
            <FaInstagram className="text-darkBlue text-[#15305B] size-[18px] " />
          </Link>
          <Link href="" className="bg-white rounded-full h-fit p-2">
            <FaFacebookF className="text-darkBlue text-[#15305B] size-[18px]" />
          </Link>
          <Link href="" className="bg-white rounded-full p-2">
            <FaLinkedin className="text-darkBlue text-[#15305B] size-[18px] " />
          </Link> */}
        </div>
      </header>
      <div className="h-[1px]  bg-white"></div>
    </>
  );
}

export default SubHeader;
