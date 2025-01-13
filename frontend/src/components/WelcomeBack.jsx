import React from "react";
import { Button } from "./ui/button";

const WelcomeBack = () => {
  return (
    <>
      <div className="px-4">
        <p className="text-3xl font-bold">Welcome Back</p>
        <p className="text-justify">
          Select some topics you are interested in to help personalize your X
          experience, starting with finding people to follow.
        </p>
        <Button className="my-5 rounded-3xl">Get Started</Button>
      </div>
    </>
  );
};

export default WelcomeBack;
