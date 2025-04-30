import Video from "@/components/guvenFinans/BizkimikVideo";
import { page3 } from "@/constants/guvenFinans/contantItems";
import Image from "next/image";
import React  from "react";

function BizKimikPage() {
 
  return (
    <main className=" flex flex-col md:flex-row items-center  md:items-center gap-8 min-h-[60vh] md:min-h-[100vh] " >
     <Video />
      <section className="w-full md:w-[50%] flex flex-col  gap-4">
        <p className="text-2xl md:text-sm ">Biz kimik?</p>
        <p className="text-[25px] md:text-[36px] font-light leading-[110%]">
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
