import Image from "next/image";
import React from "react";
import MorphingText from "./morphing-text";
import Time from "./Time";
import { availableForWork } from "@/constants";

const Profile = () => {
  const texts = ["WebApps", "Backends"];

  return (
    <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 ">
      <div className="flex gap-3 ">
        <Image
          src={`/assets/kaneshiro.svg`}
          alt="profile"
          width={20}
          height={20}
          className="w-20 rounded-full"
        />
        <div className="">
          <p className="font-bold text-lg">Shawn.</p>
          <p className="text-md font-mono text-zinc-400/80">@zzzzshawn</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 overflow-hidden ">
        <div className="font-bold  w-full  flex items-center justify-start gap-1">
          <p className="inline text-lg">I build </p>
          {"   "}
          <div className="min-w-[5.5rem]">
            <MorphingText texts={texts} />
          </div>
          <p>.</p>
        </div>
        <div className="w-full">
          <p className="text-md">
            Hello, I’m Shawn! a 21 year old developer based in Goa - India.
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 right-8 ">
        <div className="font-mono flex justify-end items-center gap-1 text-sm text-zinc-400">
          <div
            className={`size-2 rounded-full ${
              availableForWork ? "bg-green" : "bg-red"
            } `}
          ></div>
          <p>Available for work</p>
        </div>
        <Time />
      </div>
      <div className="absolute bottom-5 left-5 ">
        <div className="w-full">
          <p className="text-sm text-zinc-400/80">
            &ldquo;How do i center a div again??&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
