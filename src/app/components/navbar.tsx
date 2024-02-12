import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import "../page.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  ArrowLongRightIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BoltIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
const links = ["Get Invite"];

export const Top = () => {
  return (
    <div className="bg-black/5  backdrop-blur-3xl z-50 fixed w-[100%] ">
      <nav className=" flex justify-between items-center  px-4 py-[12px]">
        {/* rect-logo */}{" "}
        <div className="relative h-10 w-20 ml-[78px]">
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
        {/* header text -- welcome */}
        {/* <span
          className={[
            styles.font_size_,   
            styles.font_weight_300,
            styles.built_for,
            "ml-16 text-xl white --text-gray-color   text-white",
          ].join(" ")}
        >
          welcome to rect. demo
        </span> */}
        <div className=" ml-auto flex gap-10 text-xs    mr-12 align-baseline  decoration-0 text-gray-500 ">
          <a
            href="https://rect.money/"
            target="_blank"
            className="hover:text-white"
          >
            About Us
          </a>

          <a
            href="https://rect.money/"
            target="_blank"
            className="hover:text-white"
          >
            Resources
          </a>
        </div>
        {/* get invite button */}
        <ul className="flex gap-4 list-none text-gray-200 mr-[80px]  ">
          {links.map((link) => (
            <li key={link}>
              <button>
                <a
                  href="mailto:hello@rect.money?subject=Get Invitation - Rect."
                  className={[styles.button_theme, "text-base"].join(" ")}
                >
                  <span>{link}</span>
                  {/* <ArrowForwardIosIcon className={styles.button_icon} /> */}
                  <ChevronRightIcon className="h-4 pl-[1px] pb-[1px]"></ChevronRightIcon>
                </a>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
