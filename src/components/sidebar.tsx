"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon from "public/icon.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-sidebar flex flex-col  w-[60px] h-[768px]">
      <Image
        src={icon}
        alt="icon"
        width={30}
        height={30}
        className="mt-[18px] ml-[15px]"
      />

      <Link
        href="/"
        className="mt-[40px] ml-[18px] px-[3px] py-[3px] relative "
      >
        {pathname === "/" ? (
          <div className="rounded-full h-1 w-1 bg-[#FEA013] top-2 left-[-6px] absolute"></div>
        ) : null}
        <GiHamburgerMenu color={pathname === "/" ? "#FEA013" : "#69563A"} />
      </Link>
      <Link
        href="/formation"
        className="mt-[45px] ml-[18px]  px-[3px] py-[3px] relative "
      >
        {pathname === "/formation" ? (
          <div className="rounded-full h-1 w-1 bg-[#FEA013] top-2 left-[-6px] absolute"></div>
        ) : null}
        <RiTeamFill color={pathname === "/formation" ? "#FEA013" : "#69563A"} />
      </Link>
    </div>
  );
}
