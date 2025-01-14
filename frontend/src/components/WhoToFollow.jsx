import React from "react";

const WhoToFollow = () => {
  return (
    <div className="mt-6 border p-6 border-spacing-7 rounded-xl ">
      <div>
        <p className="text-2xl font-bold">What is happenning?</p>
        <div className="mt-8">
          <div className="mt-4">
            <p className="text-sm">Technology . trending</p>
            <p className="text-lg font-bold">TikTok</p>
            <p className="text-sm">742k post</p>
          </div>
          <div className="mt-4">
            <p className="text-sm">Sports · Trending</p>
            <p className="text-lg font-bold">Manchester United F.C.</p>
            <p className="text-sm">63.1K posts</p>
          </div>
          <div className="mt-4">
            <p className="text-sm">Politics · Trending</p>
            <p className="text-lg font-bold">#Modi</p>
            <p className="text-sm">742k Post</p>
          </div>
          <div className="mt-4">
            <p className="text-sm">Politics · Trending</p>
            <p className="text-lg font-bold">Rahul Gandhi</p>
            <p className="text-sm">26.7K posts</p>
          </div>
        </div>
        <p className="mt-5 text-blue-400">Show more</p>
      </div>
    </div>
  );
};

export default WhoToFollow;
