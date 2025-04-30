"use client";
import { header } from "@/constants/guvenFinans/contantItems";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { PiListBold } from "react-icons/pi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`flex justify-between items-center h-20 px-5 md:px-[86px] z-50`}
      >
        <Link href="/guvenfinans" className="text-white">
          <p className="text-2xl font-semibold">Güvən Finans</p>
          <p className="text-[13px] md:text-[15px] font-light">
            Uğurlar Güvənlə Başlar
          </p>
        </Link>

        {/* Desktop  */}
        <nav className="hidden md:flex justify-around text-white md:w-[45vw]">
          {header.map((item) => (
            <Link key={item.id} href={item.path} className="text-[17px]">
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/guvenfinans"
          className="hidden md:flex justify-center items-center rounded-tr-[10px] rounded-bl-[10px] font-semibold text-[16px] bg-white text-black h-[54px] w-[144px]"
        >
          Bizimlə görüş
        </Link>

        {/*  icon */}
        <div className="md:hidden flex text-4xl text-white">
          <PiListBold onClick={() => setIsOpen(true)} />
        </div>
      </header>

      {/* Mobile  */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-[#1a1a1a] z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out `}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <Link href="/" className="text-white">
            <p className="text-2xl font-semibold">Güvən Finans</p>
            <p className="text-[15px] font-light">Uğurlar Güvənlə Başlar</p>
          </Link>
          <IoClose
            className="text-4xl text-white"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <nav className="flex flex-col gap-5 px-5 pt-8 text-white">
          {header.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="text-[20px]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          onClick={() => setIsOpen(false)}
          href="/guvenfinans"
          className="flex justify-center m-5 items-center rounded-tr-[10px] rounded-bl-[10px] font-semibold text-[16px] bg-white text-black h-[54px] w-[144px]"
        >
          Bizimlə görüş
        </Link>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
        ></div>
      )}
    </>
  );
}

export default Header;
