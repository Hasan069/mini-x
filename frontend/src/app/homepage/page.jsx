import React from "react";
import { Separator } from "@/components/ui/separator";
import LeftSidebar from "../../components/LeftSidebar";
import MidSection from "../../components/MidSection";
import RightSideBar from "./RightSideBar";

const page = () => {
  return (
    <>
      <div className="flex mx-44 p-0 divide-x">
        <LeftSidebar />
        <Separator orientation="vertical" />
        <MidSection />
        <RightSideBar />
      </div>
    </>
  );
};

export default page;
