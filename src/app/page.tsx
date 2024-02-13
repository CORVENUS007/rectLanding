"use client";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ChevronRightIcon,
  ArrowLongRightIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BoltIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import treasury from "../../public/treasuryCard.svg";
import wealth from "../../public/wealthCard.svg";
import intro from "../../public/introCard.svg";
import frame from "../../public/rLogo.svg";
import security from "../../public/Security.svg";
import shadow from "../../public/Shadow.svg";
import fees from "../../public/Fees.svg";
import Image from "next/image";
import styles from "./page.module.css";
import dotGrid from "../../public/dotGrid.svg";
import { Button, Input, Flex } from "antd";
import custom from "./styles/custom.module.css";
import { useEffect, useRef } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { Top } from "./components/navbar";

import { Card, Card1 } from "./components/card";
import Switch from "./components/switch";
import SoundButton from "./components/sound";
import { useScroll, motion, useTransform } from "framer-motion";
const soundSrc = "/interstellar.mp3";
const soundSrc1 = "/inception.mp3";
const links = ["Get Invite"];
const links2 = ["Apply for Access"];
// const audio = new Audio(soundSrc) as HTMLAudioElement;
export default function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    
    AOS.init({ duration: 1000 ,once:true});
    
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <>
      <Top></Top>
      <SoundButton soundSrc={soundSrc} />
      <div className={styles.padding_16}></div>

      <main className={styles.main}>
        <div className={custom.bg_div}></div>
        <div className={styles.desc_container}>
          <div>
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              className={[
                styles.font_size_56,
                styles.font_weight_400,
                styles.modern_text,
              ].join(" ")}
            >
              Modern financial products
            </h1>
          </div>
          {/* <div>
            <a
              href="mailto:hello@rect.money?subject=Tell me more - Rect."
              className={[
                styles.button_theme,
                styles.font_size_16,
                styles.contact_button,
              ].join(" ")}
            >
              <span>Contact.</span>
            </a>
          </div> */}
        </div>
        <br />
        <div className={styles.padding_16}></div>
        <span
          data-aos="slide-right"
          data-aos-duration="2000"
          data-aos-easing="ease-out"
          data-aos-delay="200"
          className={[
            styles.font_gradient,
            styles.font_size_108,
            styles.font_weight_400,
            styles.built_for,
            "leading-[120px]",
          ].join(" ")}
        >
          built for
          <br />
          tomorrow.
        </span>
        <div className={styles.padding_32}></div>
        <h2
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          className={[
            styles.color_grey,
            styles.font_weight_100,
            "text-2xl",
          ].join(" ")}
        >
          rect. is currently available by invitation only
        </h2>
        <div className={styles.padding_16}></div>
        {/* request invitation button */}
        {/* <div></div> */}
        <ul
          data-aos="slide-right"
          data-aos-duration="2000"
          data-aos-easing="ease-out"
          data-aos-delay="200"
          className="flex gap-4 list-none text-gray-200 mr-[78px]"
        >
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
        <div className={styles.padding_56}></div>
        <div className={styles.padding_16}></div>
        {/* my products section  */}
        <div
          className="text-[56px]  font-normal"
          data-aos="slide-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          Secure way to entend your runway
        </div>
        <h2
          style={{ color: "#d8dee6" }}
          className="text-2xl   pl-1 mb-10 font-thin"
          data-aos="slide-left"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          Automatically put your funds to work with a competitive annual yield
          and move even closer to your goals
        </h2>
        <div className="flex flex-col gap-10">
          <div>
            {" "}
            {/* <Card H="400px" W="100%" ImageSrc={links[0]}></Card> */}
            {/* <Image
                className="bg-black border-black rounded-[64px] "
                width={10000}
                height={10000}
                src={links[1]}
                alt="rectlogo"
              ></Image> */}
            <Image
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              className="basis-1/2 w-[100%]     rounded-[36px] hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.2)] hover:-translate-y-4 transition-transform duration-300 ease-in-out"
              src={intro}
              alt="rectlogo"
            ></Image>
          </div>
          <div className="flex gap-10 ">
            {/* <div  className="basis-1/2 border-black rounded-[32px] hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.3)] hover:-translate-y-10 transition-transform duration-300 ease-in-out"> */}{" "}
            {/* <Card H="400px" W="100%" ImageSrc={links[2]}></Card>{" "} */}
            <Image
              data-aos="slide-left"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className="basis-1/2 w-[45%]  rounded-[36px]  hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.2)] hover:-translate-y-4 transition-transform duration-300 ease-in-out"
              src={wealth}
              alt="rectlogo"
            ></Image>
            {/* </div> */}
            {/* <div className="basis-1/2 border-white rounded-[32px] hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.3)] hover:-translate-y-10 transition-transform duration-300 ease-in-out"> */}{" "}
            {/* <Card H="400px" W="100%" ImageSrc={links[1]}></Card> */}
            <Image
              data-aos="slide-right"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className="basis-1/2 w-[45%]    rounded-[36px] hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.2)] hover:-translate-y-4 transition-transform duration-300 ease-in-out"
              src={treasury}
              alt="rectlogo"
            ></Image>
            {/* </div> */}
          </div>
        </div>
        <div className={styles.padding_56}></div>
        <div>
          <div
            className="text-[56px] text-normal"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            AutoPilot
          </div>
          <h2
            style={{ color: "#d8dee6" }}
            className="text-2xl   pl-1 mb-10 font-thin"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            Put your cash management strategy on autopilot. Start automating to
            start growing your money
          </h2>

          <div className="h-[400px]   flex items-center justify-center ">
            {/* <Image
                  className="absolute top-0 bottom-0 z-10"
                  src={shadow}
                  alt="shadow"
                  height={400}
                ></Image>{" "} */}
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              className="h-[400px] w-[500px]     flex items-center justify-center"
            >
              {" "}
              <Switch></Switch>
            </div>
          </div>
        </div>
        <div className={styles.padding_56}></div>
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col  ">
            <div
              className="text-[56px] text-normal "
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Returns with peace of mind
            </div>
            <h2
              style={{ color: "#d8dee6" }}
              className="text-2xl   pl-1  font-thin"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              A cash management experience that grows with you
            </h2>
          </div>

          <div
            className="relative h-[600px] "
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image
              src={dotGrid}
              alt="Your Image"
              className=" h-full  ml-10 mt-4"
            />
            <div className="absolute top-0 left-0 h-full  bg-black bg-opacity-50 text-white">
              <div className=" flex flex-col gap-20 p-20  h-full bg-gradient-to-r rounded-[16px] from-white/15 to-black ">
                <div className="flex justify-between gap-10">
                  {" "}
                  <div
                    data-aos="zoom-out-right"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col w-96 text-justify "
                  >
                    {" "}
                    <div>
                      <ShieldCheckIcon className="h-10 opacity-90"></ShieldCheckIcon>

                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Secure your runway
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      Protect your uninsured deposits with conservative debt
                      mutual funds and treasury bills.
                    </div>
                  </div>{" "}
                  <div
                    data-aos="zoom-out-right"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col w-96 text-justify "
                  >
                    {" "}
                    <div>
                      <CurrencyRupeeIcon className="h-10 opacity-70"></CurrencyRupeeIcon>{" "}
                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Unlock higher yields
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      Maximize yield by investing in Debt MFs and Treasury Bills
                      that earn up to 7.17% APY*.
                    </div>
                  </div>{" "}
                  <div
                    data-aos="zoom-out-right"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col w-96 text-justify "
                  >
                    {" "}
                    <div>
                      <BoltIcon className="h-10 opacity-70"></BoltIcon>{" "}
                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Stay liquid
                      </div>
                    </div>
                    <div className="text-base text-gray-500 ">
                      Withdraw your funds at any anytime. No waiting period.
                      Transfer same day via RGTS or NEFT
                    </div>
                  </div>{" "}
                </div>

                <div className="flex justify-between gap-10">
                  {" "}
                  <div
                    data-aos="zoom-out-left"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col w-96 text-justify "
                  >
                    {" "}
                    <div>
                      {" "}
                      <WrenchIcon className="h-10 opacity-70"></WrenchIcon>
                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Manage with ease
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      Set up auto-balancing rules to automatically move funds
                      between your rect. accounts to ensure you’re making the
                      most of uninvested cash.
                    </div>
                  </div>{" "}
                  <div
                    data-aos="zoom-out-left"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col w-96 text-justify "
                  >
                    {" "}
                    <div>
                      <Cog6ToothIcon className="h-10 opacity-70"></Cog6ToothIcon>
                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Seamless integrations
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      rect. integrates directly with top accounting services and
                      banks to provide a true self-serve onboarding experience.
                    </div>
                  </div>{" "}
                  <div
                    data-aos="zoom-out-left"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col w-96 text-justify "
                  >
                    {" "}
                    <div>
                      <UserGroupIcon className="h-10 opacity-70"></UserGroupIcon>
                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Feeling of togetherness
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      Get access to exclusive community and resources to help
                      bring your vision to life.
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.padding_16}></div>
        <div className={styles.padding_56}></div>{" "}
        <div className="flex flex-col gap-10">
          {" "}
          <div className="flex flex-col  ">
            <div
              className="text-[56px] text-normal "
              data-aos="slide-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              Simple and transparent pricing
            </div>
            <h2
              style={{ color: "#d8dee6" }}
              className="text-2xl   pl-1  font-thin"
              data-aos="slide-left"
              data-aos-duration="2000"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
            >
              rect. pricing accommodates your business, whether you are
              bootstrapped or supported by venture capital.
            </h2>
          </div>
          <div
            data-aos="slide-left"
            data-aos-duration="2000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            className="w-full relative bg-gradient-to-l  from-white/15 to-black  rounded-[16px] "
          >
            <Image src={fees} alt="fees "></Image>
            <div
              className={[
                styles.font_gradient,
                "absolute bottom-20 text-4xl backdrop-blur-3xl  opacity-90 bg-gradient-to-l from-white to-black  rounded-[8px]  p-2   right-[72px]  ",
              ].join(" ")}
            >
              free to open, free to use. no fees, no minimums.
            </div>{" "}
          </div>
        </div>
        <div className={styles.padding_16}></div>
        <div className={styles.padding_56}></div>
        <div style={{ padding: "none" }}>
          <div
            className="text-[56px] text-normal "
            data-aos="zoom-out-left"
            data-aos-duration="8000"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
          >
            Unparalleled security and support
          </div>
          <h2
            style={{ color: "#d8dee6" }}
            className="text-2xl   pl-1 mb-10 font-thin"
            data-aos="zoom-out-left"
            data-aos-duration="8000"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
          >
            Securely manage your finances with dedicated white-glove support
          </h2>
          {/* <motion.div
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
          > */}
          <div
            data-aos="zoom-out-left"
            data-aos-duration="8000"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
          >
            {" "}
            <Image src={security} alt="frame" height={900}></Image>
          </div>
          {/* </motion.div> */}
          {/* <div className="flex flex-col gap-10">
            <div className="flex gap-10">
              <div className="basis-[40%]">
                {" "}
                <Card H="500px" W="100%" ImageSrc={links[0]}></Card>
              </div>
              <div className="basis-[60%]">
                {" "}
                <Card H="500px" W="100%" ImageSrc={links[0]}></Card>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="basis-[60%]">
                {" "}
                <Card H="500px" W="100%" ImageSrc={links[0]}></Card>
              </div>
              <div className="basis-[40%]">
                {" "}
                <Card H="500px" W="100%" ImageSrc={links[0]}></Card>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className={styles.padding_56}></div> */}
        <div className="h-[700px] flex items-center justify-center  relative ">
          {" "}
          <Image
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            src={frame}
            alt="frame"
            fill={true}
          ></Image>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="1200"
            data-aos-duration="2000"
            data-aos-easing="ease-out"
            className="absolute bottom-[228px] left-auto text-5xl mr-5"
          >
            Building future together.
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="1600"
            data-aos-duration="2200"
            data-aos-easing="ease-out"
            className="absolute bottom-[170px] left-auto text-5xl mr-5"
          >
            {" "}
            <ul className="flex gap-4 list-none text-gray-200 mr-[46px]">
              {links.map((link) => (
                <li key={link}>
                  <button>
                    <a
                      href="mailto:hello@rect.money?subject=Get Invitation - Rect."
                      className={[styles.button_theme, "text-base "].join(" ")}
                    >
                      <span>{link}</span>
                      {/* <ArrowForwardIosIcon className={styles.button_icon} /> */}
                      <ChevronRightIcon className="h-4 pl-[1px] pb-[1px]"></ChevronRightIcon>
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={[styles.hr, " opacity-70"].join(" ")}></div>
        <div className="p-[12px]"></div>{" "}
        <div className="  flex ">
          <div className="basis-5/12  h-[330px]">
            {" "}
            <div className={styles.logo_image}>
              <Image src="/rect.svg" alt="Rect. Logo" fill={true} />
            </div>
            <div className="mt-4 pl-[2px]">Stay in touch with the latest.</div>
            <div className="pt-3 pb-1 border-white/70 border-b flex justify-between  w-[60%]">
              {" "}
              <input
                type="text"
                placeholder="your email"
                className=" bg-black  text-gray-500 w-[90%] py-2 px-1 focus:outline-none  rounded  placeholder-gray-500"
              />
              <button className="     rounded">
                <ArrowLongRightIcon className="hover:text-gray-500  text-[#d8dee6]   h-5"></ArrowLongRightIcon>
              </button>
            </div>
            <div className="p-9"></div>{" "}
            <div className={styles.social_icons}>
              <Link
                href="https://twitter.com/rect_money"
                passHref={true}
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <i className={styles.fa_twitter}></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/rect-money/"
                passHref={true}
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon fontSize="small" />
              </Link>
              <Link
                href="https://www.instagram.com/rect.money/"
                passHref={true}
                rel="noreferrer"
                target="_blank"
              >
                <InstagramIcon fontSize="small" />
              </Link>
              <Link
                href="https://www.fb.com/profile.php?id=61553971187042"
                passHref={true}
                rel="noreferrer"
                target="_blank"
              >
                <FacebookIcon fontSize="small" />
              </Link>
            </div>
            {/* <div className="flex justify-between">
                <div className="text-xs basis-5/12 ">
                  © 2024 rect.money All rights reserved.
                </div>{" "}
                <div className="basis-3/12"></div>
                <div className="flex  text-xs basis-4/12 gap-4  ">
                  {" "}
                  <div className="text-gray-500 cursor-pointer  hover:text-white">
                    Terms of Use
                  </div>{" "}
                  <div className="text-gray-500 cursor-pointer  hover:text-white">
                    Privacy Policy
                  </div>
                </div>
              </div> */}
          </div>

          <div className="basis-7/12 flex flex-col  p-[16px]   h-[330px]">
            {" "}
            <div className="flex">
              <div className="basis-4/12 flex flex-col gap-4">
                <div>Product</div>{" "}
                <div className="flex flex-col gap-2">
                  {" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    Features
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    How rect. works?
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    Pricing
                  </div>
                </div>
              </div>{" "}
              <div className="basis-4/12 flex flex-col gap-4">
                <div>Company</div>{" "}
                <div className="flex flex-col gap-2">
                  {" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    About
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    Careers
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    Contact
                  </div>
                </div>
              </div>{" "}
              <div className="basis-4/12 flex flex-col gap-4">
                <div>Resources</div>
                <div className="flex flex-col gap-2">
                  {" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    Blogs
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    Encyclopedia
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    Events
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    Status
                    <span className="h-[6px] w-[6px] bg-green-400 rounded-[50%] inline-block mb-[1px] ml-2"></span>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
            <div className="p-[52px]"></div>
            <div className="flex justify-between">
              <div className="text-xs basis-4/12 opacity-70">
                {" "}
                © 2024 rect.money All rights reserved.
              </div>{" "}
              <div className="basis-4/12 text-xs opacity-70 text-center"> </div>
              <div className="flex  text-xs basis-4/12 gap-4  ">
                {" "}
                <div className="text-gray-500 cursor-pointer  hover:text-white">
                  Terms of Use
                </div>{" "}
                <div className="text-gray-500 cursor-pointer  hover:text-white">
                  Privacy Policy
                </div>
              </div>
            </div>
            {/* <Flex
              className={styles.bounce}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className={styles.font_size_12} style={{ marginLeft: 8 }}>
                Making cents out of dollars, and dollars out of dreams.
              </div>
            </Flex> */}
          </div>
        </div>
      </main>
    </>
  );
}

{
  /* <div className={styles.hr}></div> */
}

{
  /* <div className={styles.logo_image}>
          <Image
            src="/rect.svg"
            alt="Rect. Logo"
            // width={200}
            // height={108}
            fill
            style={{
              objectFit: "contain",
            }}
            // layout="responsive"
            priority
          />
        </div> */
}

{
  /* <div className={styles.padding_16}></div> */
}
{
  /* <div className={styles.social_icons}>
          <Link
            href="https://twitter.com/rect_money"
            passHref={true}
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <i className={styles.fa_twitter}></i>
          </Link>
          <Link
            href="https://www.linkedin.com/company/rect-money/"
            passHref={true}
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon fontSize="small" />
          </Link>
          <Link
            href="https://www.instagram.com/rect.money/"
            passHref={true}
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon fontSize="small" />
          </Link>
          <Link
            href="https://www.fb.com/profile.php?id=61553971187042"
            passHref={true}
            rel="noreferrer"
            target="_blank"
          >
            <FacebookIcon fontSize="small" />
          </Link>
        </div> */
}
{
}
