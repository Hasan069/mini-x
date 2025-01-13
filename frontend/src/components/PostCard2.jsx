import React from "react";
import Image from "next/image";
import tintin from "@/assets/tintin1.jpg";
const PostCard = () => {
  return (
    <>
      <div className="flex w-[710px] ">
        <div className="w-14 h-12">
          <div className="w-14 h-12">
            <Image
              priority
              src={tintin}
              alt="Follow us on Twitter"
              className="h-[44px] w-[44px] rounded-full m-2 "
            ></Image>
          </div>
        </div>
        <div>
          <div className="">Mahedi Hassan Rafin</div>
          <div className=" text-justify">
            "We walked with a pace that was decreed for us, And this is how
            those under fate"s control must walk. A man destined to die in a
            certain land Will not find death in any other."
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
