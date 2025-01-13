import React from "react";
import Image from "next/image";
import captain from "@/assets/captain.jpg";
const PostCard = () => {
  return (
    <>
      <div className="flex w-[710px] ">
        <div className="w-14 h-12">
          <div className="w-14 h-12">
            <Image
              priority
              src={captain}
              alt="Follow us on Twitter"
              className="h-[44px] w-[44px] rounded-full m-2 "
            ></Image>
          </div>
        </div>
        <div>
          <div className="">Tanvir Hasan serazy</div>
          <div className=" text-justify">
            "Time is two days, one safe and one of peril, And our lives are of
            two halves, one fair, one overcast. Say to those who reproach us for
            what Time has done: "Does Time oppose any but great men?" " Do you
            not see that when the storm winds blow, It is the tall trees that
            they strike? Corpses rise to the surface of the sea, while pearls
            lie hidden in its depths. It may be that Time will mishandle us,
            Subjecting us to constant harm. Though in the heavens there are
            countless stars, Only the sun and moon suffer eclipses. There are
            both green and dry boughs on the earth, But we throw stones only at
            those with fruit. You think well of the days when they are fine, So
            do not fear the evil that fate brings."
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
