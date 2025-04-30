import { comments } from "@/constants/guvenFinans/contantItems";
import React from "react";
function Comments() {
  return (
    <main className="py-0 md:py-[10px]">
      <h2 className="text-[30px] md:text-[45px] leading-[100%] md:leading-4  py-7 md:pb-[10vh] flex justify-start md:justify-center">
        Müştəri rəyləri:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
        {comments.map((item) => {
          return (
            <div className="h-fit md:h-[241px] 2xl:h-[150px]  flex flex-col gap-2 md:gap-3 " key={item.id}>
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-lg font-light leading-[18px]">{item.work}</p>
              <p className="text-lg md:text-[15px] font-light leading-6">{item.comment}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Comments;
