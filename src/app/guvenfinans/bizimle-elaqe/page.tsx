import Image from "next/image";
import React from "react";
function ContactUsPage() {
  return (
    <main className=" w-full flex justify-between     items-center py-[50px]">
      <section className="flex flex-col gap-7 items-center w-[45%]">
        <div className="text-[30px] font-light leading-[130%]">
          <p className=" w-[20vw]">Son dəyişiklikləri </p>
          <p className="w-[26vw]">bilmək üçün bizi izləyin.</p>
        </div>

        <form className="flex gap-4">
          <input
            type="text"
            className="w-[236px] bg-[#F7F7F7] rounded-tr-lg rounded-bl-lg focus:outline-none placeholder:text-black placeholder:text-[16px] placeholder:font-light p-3 text-[16px] font-light"
            placeholder="@güvənfinans"
          />
          <button className="cursor-pointer bg-[#0B58D4] rounded-tr-lg rounded-bl-lg text-white w-[91px] p-3">
            Izləyin
          </button>
        </form>
      </section>

      <section>
        <Image
          className="rounded-r-[15px]"
          width={694}
          height={343}
          src="/images/bizimle-elaqe-page-image.png"
          alt="bizimle-elaqe.png"
        />
      </section>
    </main>
  );
}

export default ContactUsPage;
