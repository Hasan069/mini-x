import React from "react";
import Image from "next/image";
import google from "@/assets/google.png";
import facebook from "@/assets/facebook.png";
import game from "@/assets/joystick.png";
import { Button } from "./ui/button";

const WhoToFollow = () => {
  return (
    <div className="mt-6 border p-6 border-spacing-7 rounded-xl ">
      <div>
        <p className="text-2xl font-bold">Who to follow</p>
        <div className="mt-8">
          <div className="mt-4 flex justify-between ">
            <Image
              priority
              src={google}
              alt="Follow us on google"
              className="h-[35px] w-[35px] rounded-full"
            />
            <p className="text-lg font-bold">Google</p>
            <Button className="rounded-full">Follow</Button>
          </div>
        </div>
        <div className="mt-8">
          <div className="mt-4 flex justify-between ">
            <Image
              priority
              src={facebook}
              alt="Follow us on facebook"
              className="h-[35px] w-[35px] rounded-full"
            />
            <p className="text-lg font-bold">facebook</p>
            <Button className="rounded-full">Follow</Button>
          </div>
        </div>
        <div className="mt-8">
          <div className="mt-4 flex justify-between ">
            <Image
              priority
              src={game}
              alt="Follow us on counter strike 2"
              className="h-[35px] w-[35px] rounded-full"
            />
            <p className="text-lg font-bold">Counter Strike 2</p>
            <Button className="rounded-full">Follow</Button>
          </div>
        </div>
        <p className="mt-5 text-blue-400">Show more</p>
      </div>
    </div>
  );
};

export default WhoToFollow;
