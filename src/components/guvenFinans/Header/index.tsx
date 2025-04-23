"use client"
import { header } from "@/constants/guvenFinans/contantItems";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center  h-20 px-[86px]">
      <Link href="/" className="text-white">
        <p className="text-2xl font-semibold">Güvən Finans</p>
        <p className="text-[15px] font-light">Uğurlar Güvənlə Başlar</p>
      </Link>

      <nav className="flex justify-around text-white w-[45vw]">
        {header.map((item) => {
          return (
            <Link key={item.id} href={item.path} className="text-[17px]">
              {item.name}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/"
        className="flex justify-center items-center rounded-tr-[10px] rounded-bl-[10px]  font-semibold text-[16px] bg-white h-[54px] w-[144px]"
      >
        Bizimlə görüş
      </Link>
    </header>
  );
}

export default Header;
