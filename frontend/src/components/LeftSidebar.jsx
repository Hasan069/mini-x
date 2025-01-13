import React from "react";
import Image from "next/image";
import twitterIcon1 from "@/assets/x-logo.svg";
import twitterIcon2 from "@/assets/x-logo-white.svg";
import {
  House,
  Search,
  BellDot,
  Mail,
  Bot,
  Rows2,
  Bookmark,
  BriefcaseBusiness,
  Users,
  X,
  Zap,
  User,
  CircleEllipsis,
  ScanFace,
} from "lucide-react";
import { Button } from "./ui/button";
const LeftSidebar = () => {
  return (
    <>
      <div
        className="py-4 text-white fixed
                 top-0 left-44"
      >
        <Image
          priority
          src={twitterIcon1}
          alt="Follow us on Twitter"
          className="h-[44px] w-[40px]"
        />

        <div className="h-9 text-xl mt-5">
          <div className="flex gap-5 text-black dark:text-white">
            <House /> Home
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <Search /> Explore
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <BellDot />
            Notification
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <Mail />
            Messages
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <Bot />
            Grok
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <Rows2 /> Lists
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <Bookmark />
            Bookmark
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <BriefcaseBusiness />
            Jobs
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <Users />
            Communities
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <X />
            Premium
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <Zap />
            Varified Orgs
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <User />
            Profile
          </div>
          <div className="my-5 flex gap-5 text-black dark:text-white">
            <CircleEllipsis />
            More
          </div>
          <Button className="w-48 rounded-3xl">Post</Button>
          <div className="mt-10 flex gap-5">
            <ScanFace />
            Tanvir Hasan
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
