"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import twitterIcon from "@/assets/x-logo.svg";
import appleIcon from "@/assets/apple.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignup = async (e) => {
    e.preventDefault();
    const newErrors = {};
    //checks the user field is null or not
    if (!user.username.trim()) newErrors.username = "Username is required";
    if (!user.email.trim()) newErrors.email = "Email is required";
    if (!user.password.trim()) newErrors.password = "Password is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if found
      return;
    }
    setErrors({});
    console.log("User data:", user);

    try {
      // Send data to the backend
      const response = await axios.post(
        "http://localhost:5500/api/auth/register-user",
        user
      );
      console.log(response);

      // Handle success (e.g., navigate to another page or show a success message)
      console.log("Signup successful:", response.data);
      toast.success("Signup Successfully!");
      router.push("/login"); // Redirect to login page
    } catch (error) {
      // Handle error (e.g., show error messages)
      console.error("Signup failed:", error.response?.data || error.message);
      toast.error("Signup failed! User Already exist");
      setErrors({
        server: error.response?.data?.message || "Something went wrong",
      });
    }
  };

  //handling input. throws error if field is empty.
  const handleInputChange = (field, value) => {
    setUser({ ...user, [field]: value });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

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
                alt="google logo"
                width={24}
                height={24}
              />
              <span className="">Sign up with Google</span>
            </button>
          </div>
          <button className="mt-1 px-4 py-2 border flex gap-2 w-72 rounded-3xl  bg-white text-black items-center justify-center">
            <Image
              priority
              src={appleIcon}
              alt="Follow us on Twitter"
              className="h-[25px] w-[25px]"
            />
            <span className="font-bold">sign up with Apple</span>
          </button>
          <div className="flex mt-2">
            <Separator className="my-4 w-32" /> <div className="mx-2">or</div>
            <Separator className="my-4 w-32" />
          </div>
          {/* input form */}
          <form className="" onSubmit={onSignup}>
            <div className="m-0 pt-2">
              {/* username */}
              <Label htmlFor="username">Username</Label>
              <Input
                className={`h-12 w-72 ${
                  errors.username ? "border-red-500" : ""
                }`}
                id="username"
                placeholder="username"
                type="text"
                autoComplete="on"
                value={user.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                required={true}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>
            {/* Email */}
            <div className="m-0 pt-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className={`h-12 w-72 ${errors.email ? "border-red-500" : ""}`}
                id="email"
                placeholder="Email"
                type="text"
                autoComplete="on"
                value={user.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required={true}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            {/* password */}
            <div className=" mt-3 p-0">
              <Label htmlFor="password">Password</Label>
              <Input
                className={`h-12 w-72 ${
                  errors.password ? "border-red-500" : ""
                }`}
                id="password"
                placeholder="password"
                autoComplete="off"
                type="password"
                value={user.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required={true}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <Button variant="secondary" className="mt-3" onClick={onSignup}>
              Signup
            </Button>
          </form>
          <div>
            <button
              type="button"
              className="h-12 w-72 mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => router.push("/login")}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
