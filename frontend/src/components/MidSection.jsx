import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import TextArea from "./TextArea";
import WelcomeBack from "./WelcomeBack";
import PostCard from "./PostCard";
import tintin1 from "@/assets/tintin1.jpg";
import captain from "@/assets/captain.jpg";
import angryCaptain from "@/assets/angryCaptain.jpg";
import {
  MessageCircle,
  Repeat2,
  Heart,
  ChartNoAxesCombined,
  Bookmark,
  Upload,
} from "lucide-react";

const MidSection = () => {
  return (
    <>
      <div className="h-screen w-[730px]  ">
        <div className="flex justify-between mx-44 my-3 ">
          <div>For you</div>
          <div>Following</div>
        </div>
        <div>
          <TextArea />
          <WelcomeBack />
          {/* <Separator className="my-4" />
          <PostCard /> */}

          <Separator className="my-4" />
          <PostCard
            name="Tanvir Hasan Serazy"
            content='"Time is two days, one safe and one of peril, And our lives are of
            two halves, one fair, one overcast. Say to those who reproach us for
            what Time has done: "Does Time oppose any but great men?" " Do you
            not see that when the storm winds blow, It is the tall trees that
            they strike? Corpses rise to the surface of the sea, while pearls
            lie hidden in its depths. It may be that Time will mishandle us,
            Subjecting us to constant harm. Though in the heavens there are
            countless stars, Only the sun and moon suffer eclipses. There are
            both green and dry boughs on the earth, But we throw stones only at
            those with fruit. You think well of the days when they are fine, So
            do not fear the evil that fate brings."'
            photo={captain}
          />

          <Separator className="my-4" />
          <PostCard
            name="Mahedi Hassan Raf"
            content='"We walked with a pace that was decreed for us, And this is how
            those under fate"s control must walk. A man destined to die in a
            certain land Will not find death in any other."'
            photo={tintin1}
          />

          <Separator className="my-4" />
          <PostCard
            name="Mahedi Hassan Raf"
            content="Captain Haddock: My memory isn't the way it used to be. Tintin: How
            was it? Captain Haddock: I've forgotten."
            photo={angryCaptain}
          />

          <Separator className="my-4" />

          <PostCard
            name="Md Yeasin Biplob"
            content="“If you let my daughter go now, that will be the end of it. I will not look for you, I will not pursue you. But if you dont, I will look for you, I will find you, and I will kill you.”"
            photo={captain}
          />
        </div>
        <PostCard
          name="Omor Faruk Rahul"
          content=" Sometimes it makes me sad, though... Andy being gone. I have to remind myself that some birds aren't meant to be caged. Their feathers are just too bright. And when they fly away, the part of you that knows it was a sin to lock them up DOES rejoice. But still, the place you live in is that much more drab and empty that they're gone. I guess I just miss my friend."
          photo={tintin1}
        />
      </div>
    </>
  );
};

export default MidSection;
