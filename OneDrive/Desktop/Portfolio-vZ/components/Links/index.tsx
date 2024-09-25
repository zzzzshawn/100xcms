import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <div className="relative h-full py-0.5 px-2  flex flex-col justify-between">
      <ul className="flex w-full justify-between gap-1.5 items-center h-1/2">
        <li className="m-0 p-2 size-[4.5rem] text-[38px] font-bold leading-8"><h2>LIN<br/>KS.</h2></li>
        {Socials.slice(0, 2).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="border rounded-xl flex items-center justify-center p-2 size-[4.5rem]"
            >
              <Image
                src={item.logo}
                alt="logo"
                width={20}
                height={20}
                className={`w-[80%]  ${item.className}`}
              />
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex w-full justify-between gap-1.5 items-center h-1/2">
        {Socials.slice(2, 5).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="border rounded-xl flex items-center justify-center p-2 size-[4.5rem]"
            >
              <Image
                src={item.logo}
                alt="logo"
                width={20}
                height={20}
                className={`w-[80%]  ${item.className}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
