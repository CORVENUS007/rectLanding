import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";


import "../page.module.css";

import {
 
  ChevronRightIcon,
 
} from "@heroicons/react/24/outline";
const links = ["Get Invite"];

export const Top = () => {
  return (
    <div className="bg-black/5  backdrop-blur-3xl z-50 fixed w-[100vw] ">
      <nav className=" flex justify-between w-full lg:px-24 xs:px-7  py-4">
     
        <div className="relative h-10 w-20 ">
          {/* image */}
          <Link href={"/pages/apis/home"}>
            <Image
              className="hover:bg-slate-700  rounded"
              src="/rect.svg"
              alt="Rect. Logo"
              fill
              style={{
                objectFit: "contain",
              }}
              // layout="responsive"
              priority
            />
          </Link>
        </div>
     {/* ON hover dropdown functionality appears using below code */}
        {/* <div className=" ml-auto flex gap-10 text-xs    mr-12 align-baseline  decoration-0 text-gray-500 ">
          <a
            href="https://rect.money/"
            target="_blank"
            className="hover:text-white"
          >
            About Us
          </a>
          <Example></Example> 

          <a
            href="https://rect.money/"
            target="_blank"
            className="hover:text-white"
          >
            Resources
          </a>
          <Example2></Example2>
        </div> */}
        {/* get invite button */}
        <div>
          {" "}
          <ul className="flex gap-4 list-none text-gray-200   ">
            {links.map((link) => (
              <li key={link}>
                <button>
                  <a
                    href="mailto:hello@rect.money?subject=Get Invitation - Rect."
                    className={[styles.button_theme, "text-base"].join(" ")}
                  >
                    <span>{link}</span>
                  
                    <ChevronRightIcon className="h-4 pl-[1px] pb-[1px]"></ChevronRightIcon>
                  </a>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
