import React from "react";
import { Separator } from "@/components/ui/separator";
import TextArea from "./TextArea";
import WelcomeBack from "./WelcomeBack";
import PostCard from "./PostCard";
import PostCard2 from "./PostCard2";
import PostCard3 from "./PostCard3";
import PostCard4 from "./PostCard4";

const MidSection = () => {
  return (
    <>
      <div className="h-screen w-[730px]">
        <div className="flex justify-between mx-44 my-3">
          <div>For you</div>
          <div>Following</div>
        </div>
        <div>
          <TextArea />
          <WelcomeBack />
          <Separator className="my-4" />
          <PostCard />
          <Separator className="my-4" />
          <PostCard2 />
          <Separator className="my-4" />
          <PostCard3 />
          <Separator className="my-4" />
          <PostCard4 />
        </div>
      </div>
    </>
  );
};

export default MidSection;
