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
      <div className="py-4 text-white fixed top-0 left-60">
        <Image
          priority
          src={twitterIcon1}
          alt="Follow us on Twitter"
          className="h-[40px] w-[40px] rounded-full absolute left-2"
        />

        <div className="h-9 text-xl mt-12">
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <House />
            Home
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <Search /> Explore
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <BellDot />
            Notification
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <Mail />
            Messages
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <Bot />
            Grok
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <Rows2 /> Lists
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <Bookmark />
            Bookmark
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <BriefcaseBusiness />
            Jobs
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <Users />
            Communities
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <X />
            Premium
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <Zap />
            Varified Orgs
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <User />
            Profile
          </Button>
          <Button
            className="flex gap-5 text-xl h-12 rounded-full  text-left"
            variant="ghost"
          >
            <CircleEllipsis />
            More
          </Button>
          <Button className="w-48 rounded-3xl mt-3">Post</Button>
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
