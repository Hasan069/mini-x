import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import SubScribeToPremium from "./SubScribeToPremium";
import WhatisHappenning from "./WhatisHappenning";
import WhoToFollow from "./WhoToFollow";

const RightSideBar = () => {
  return (
    <div className=" px-8 fixed top-0 right-64 overflow-y-auto no-scrollbar">
      <div className="fixed right-0">
        <ModeToggle />
      </div>
      <div className="h-screen w-[350px] pt-3">
        <div className="flex gap-3 fixed top-0 mt-1 h-8 w-[350px]">
          <Search className="mt-1 h-8 w-8" />
          <Input type="search" placeholder=" Search" className="rounded-full" />
        </div>
        <div>
          <SubScribeToPremium />
          <WhatisHappenning />
          <WhoToFollow />
        </div>
        <footer>like subscribe</footer>
      </div>
    </div>
  );
};

export default RightSideBar;
