import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cartData = [
    {
      id: 2,
      path: "/turanfinans",
      icon: "/icons/scales.svg",
      name: "Turan Finans",
      desc: "Rəqəmlərin dili ilə şirkətinizi sizə tanıdaraq,şirkətlərin maliyyə uçot sistemini inkişaf etdirin.",
    },
    {
      id: 3,
      path: "/islammaliyyesi",
      icon: "/icons/scales.svg",
      name: "İslam Maliyəsi",
      desc: "Rəqəmlərin dili ilə şirkətinizi sizə tanıdaraq,şirkətlərin maliyyə uçot sistemini inkişaf etdirin.",
    },
  ];
  return (
    <>
      <main className="flex justify-evenly items-center min-h-screen bg-[#457BD1] text-white">
        <section className="">
          {/* icon */}
          <Image
            src="/images/icon.svg"
            width={100}
            height={100}
            alt="icon"
            className="w-[368px] h-[257px] "
          />
          <div className="w-[28vw] flex flex-col gap-5">
            <h2 className="text-[42px] leading-[100%]">
              İnnovativ maliyyə həlləri!
            </h2>
            <p className="text-[17px] w-[25vw]">
              Rəqəmlərin dili ilə şirkətinizi sizə tanıdaraq,şirkətlərin maliyyə
              uçot sistemini inkişaf etdirib, innovativ maliyyə həlləri
              nəticəsində şirkətinizə dəyər qatırıq.
            </p>
          </div>
        </section>

        <section className="flex items-center gap-8">
          <Link href="/guvenfinans" className="flex flex-col items-center justify-around p-[25px] w-[280px] h-[240px] rounded-[15px] bg-white text-black">
            <Image
              src="/icons/scales.svg"
              width={100}
              height={100}
              className="size-[54px]"
              alt="Güvən finans"
            />
            <p className="text-xl font-semibold">Güvən finans</p>
            <p className="text-center text-[16px] font-light">
              Rəqəmlərin dili ilə şirkətinizi sizə tanıdaraq,şirkətlərin maliyyə
              uçot sistemini inkişaf etdirin.
            </p>
          </Link>
          <div className="flex flex-col gap-12">
            {cartData.map((item) => {
              return (
                <Link 
                href={item.path}
                  className="flex flex-col items-center justify-around p-[25px] w-[280px] h-[240px] rounded-[15px] bg-white text-black"
                  key={item.id}
                >
                  <Image
                    src={item.icon}
                    width={100}
                    height={100}
                    className="size-[54px]"
                    alt={item.name}
                  />
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-center text-[16px] font-light">
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
