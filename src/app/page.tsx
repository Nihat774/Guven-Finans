import { cartData } from "@/constants/MainPage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex md:flex-row flex-col gap-8 justify-evenly items-center min-h-screen bg-[#457BD1] text-white ">
        <section className="flex flex-col  md:w-fit w-full px-12">
          {/* icon */}
          <Image
            src="/images/icon.svg"
            width={100}
            height={100}
            alt="icon"
            className="w-[150px] h-[150px] md:w-[368px]  md:h-[257px] "
          />
          <div className="w-full md:w-[28vw] flex flex-col gap-5">
            <h2 className="text-2xl md:text-[42px] leading-[100%]">
              İnnovativ maliyyə həlləri!
            </h2>
            <p className="text-[17px] w-full md:w-[25vw]">
              Rəqəmlərin dili ilə şirkətinizi sizə tanıdaraq,şirkətlərin maliyyə
              uçot sistemini inkişaf etdirib, innovativ maliyyə həlləri
              nəticəsində şirkətinizə dəyər qatırıq.
            </p>
          </div>
        </section>

        <section className="flex md:flex-row flex-col items-center gap-4 md:gap-8 pb-5 md:pb-0">
          <Link href="/guvenfinans" className="flex flex-col items-center justify-around p-[10px] md:p-[25px] w-[300px] h-[200px] md:w-[280px]  md:h-[240px] rounded-[15px] bg-white text-black">
            {/* icon */}
            <Image
              src="/icons/scales.svg"
              width={100}
              height={100}
              className="size-[50px] md:size-[54px]"
              alt="Güvən finans"
            />
            <p className="text-md md:text-xl font-semibold">Güvən finans</p>
            <p className="text-center text-sm md:text-[16px] font-light">
              Rəqəmlərin dili ilə şirkətinizi sizə tanıdaraq,şirkətlərin maliyyə
              uçot sistemini inkişaf etdirin.
            </p>
          </Link>

          <div className="flex flex-col gap-4 md:gap-12">
            {cartData.map((item) => {
              return (
                <Link 
                href={item.path}
                  className="flex flex-col items-center justify-around  p-[10px] md:p-[25px]  w-[300px] h-[200px]  md:w-[280px]  md:h-[240px] rounded-[15px] bg-white text-black"
                  key={item.id}
                >
                  <Image
                    src={item.icon}
                    width={100}
                    height={100}
                    className="size-[50px] md:size-[54px]"
                    alt={item.name}
                  />
                  <p className="text-md md:text-xl font-semibold">{item.name}</p>
                  <p className="text-center text-sm md:text-[16px] font-light">
                    {item.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}