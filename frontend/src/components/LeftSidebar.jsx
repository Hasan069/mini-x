import React from "react";
import Image from "next/image";
import twitterIcon from "@/assets/x-logo.svg";
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
      <div className="h-screen w-56">
        <Image
          priority
          src={twitterIcon}
          alt="Follow us on Twitter"
          className="h-[44px] w-[40px]"
        />

        <div className="h-9 text-xl mt-5">
          <div className="flex gap-5">
            <House /> Home
          </div>
          <div className="my-5 flex gap-5">
            <Search /> Explore
          </div>
          <div className="my-5 flex gap-5">
            <BellDot />
            Notification
          </div>
          <div className="my-5 flex gap-5">
            <Mail />
            Messages
          </div>
          <div className="my-5 flex gap-5">
            <Bot />
            Grok
          </div>
          <div className="my-5 flex gap-5">
            <Rows2 /> Lists
          </div>
          <div className="my-5 flex gap-5">
            <Bookmark />
            Bookmark
          </div>
          <div className="my-5 flex gap-5">
            <BriefcaseBusiness />
            Jobs
          </div>
          <div className="my-5 flex gap-5">
            <Users />
            Communities
          </div>
          <div className="my-5 flex gap-5">
            <X />
            Premium
          </div>
          <div className="my-5 flex gap-5">
            <Zap />
            Varified Orgs
          </div>
          <div className="my-5 flex gap-5">
            <User />
            Profile
          </div>
          <div className="my-5 flex gap-5">
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
