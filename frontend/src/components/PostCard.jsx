import React from "react";
import Image from "next/image";
import captain from "@/assets/captain.jpg";
import {
  MessageCircle,
  Repeat2,
  Heart,
  ChartNoAxesCombined,
  Bookmark,
  Upload,
} from "lucide-react";
const PostCard = ({ name, content, photo }) => {
  return (
    <>
      <div className="flex w-[710px] ">
        <div className="w-14 h-12">
          <div className="w-14 h-12">
            <Image
              priority
              src={photo}
              height={44}
              width={44}
              alt={name}
              className="h-[44px] w-[44px] rounded-full m-2 "
            ></Image>
          </div>
        </div>
        <div className="mx-3 px-3">
          <div className="">{name}</div>
          <div className=" text-justify">
            <div className="">{content}</div>
          </div>
          <div className="my-2">
            <div className="flex justify-between">
              <MessageCircle />
              <Repeat2 />
              <Heart />
              <ChartNoAxesCombined />
              <div className="flex gap-4">
                <Bookmark />
                <Upload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
