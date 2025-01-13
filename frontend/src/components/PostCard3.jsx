import React from "react";
import Image from "next/image";
import angryCaptain from "@/assets/angryCaptain.jpg";
const PostCard = () => {
  return (
    <>
      <div className="flex w-[710px] ">
        <div className="w-14 h-12">
          <div className="w-14 h-12">
            <Image
              priority
              src={angryCaptain}
              alt="Follow us on Twitter"
              className="h-[44px] w-[44px] rounded-full m-2"
            ></Image>
          </div>
        </div>
        <div>
          <div className="">Sakib Bin Mizan</div>
          <div className=" text-justify">
            Captain Haddock: My memory isn't the way it used to be. Tintin: How
            was it? Captain Haddock: I've forgotten.
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
