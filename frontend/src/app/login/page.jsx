"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import twitterIcon from "@/assets/x-logo.svg";
import appleIcon from "@/assets/apple.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div className="bg-black h-screen">
      <div className="h-[950px] flex justify-center items-center m-0 p-0">
        <div className="mr-56">
          <Image
            priority
            src={twitterIcon}
            alt="Follow us on Twitter"
            className="h-[600px] w-[600px]"
          />
        </div>
        <div>
          <p className="font-semibold text-7xl">Happening now</p>
          <p className="mt-10 font-semibold text-3xl">Join today.</p>
          <div className="mt-2 ">
            <button className="px-4 py-2 border flex gap-2 w-72 rounded-3xl  bg-white text-black items-center justify-center">
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
                width={24}
                height={24}
              />
              <span className="">Login with Google</span>
            </button>
          </div>
          <button class="mt-1 px-4 py-2 border flex gap-2 w-72 rounded-3xl  bg-white text-black items-center justify-center">
            <Image
              priority
              src={appleIcon}
              alt="Follow us on Twitter"
              className="h-[25px] w-[25px]"
            />
            <span>Login with Apple</span>
          </button>
          <div className="flex mt-2">
            <Separator className="my-4 w-32" /> <div className="mx-2">or</div>
            <Separator className="my-4 w-32" />
          </div>
          <div className="m-0 pt-2">
            <Label htmlFor="email">Email</Label>
            <Input className="h-12 w-72" id="email" placeholder="Email" />
          </div>
          <div className=" mt-3 p-0">
            <Label htmlFor="email">Password</Label>
            <Input className="h-12 w-72" id="password" placeholder="password" />
          </div>
          <Button variant="secondary" className="mt-3">
            Login
          </Button>
          <div>
            <button
              type="button"
              className="h-12 w-72 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => router.push("/signup")}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
