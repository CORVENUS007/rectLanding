"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState  } from "react";
import {
  ChevronRightIcon,
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
import mobile_rlogo from "../../public/rMobile.svg";
import mobile_intro from "../../public/intro_card_mobile.svg";
import mobile_fees from "../../public/fees_mobile.svg";
import mobile_bwf from "../../public/BWF_mobile.svg";
import frame from "../../public/rLogo.svg";
import security from "../../public/Security.svg";

import fees from "../../public/Fees.svg";
import Image from "next/image";
import "./page.module.css";

import styles from "./page.module.css";
import dotGrid from "../../public/dotGrid.svg";
import { Flex } from "antd";
import custom from "./styles/custom.module.css";
import { useEffect, useRef } from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { Top } from "./components/navbar";

import SubscriptionForm from "./components/subscriptionForm";

import Switch from "./components/switch";
import AnimatedTextCharacter from "./components/animatedText";

import { motion } from "framer-motion";
const soundSrc = "/interstellar.mp3";

const links = ["Get Invite"];

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Top></Top>
      {/* <SoundButton soundSrc={soundSrc} /> */}
      <div className="xs:p-4 lg:p-7"></div>

      <main className={styles.main}>
        <div className={custom.bg_div}></div>
        <div className={styles.desc_container}>
          <div>
            <h1
              // data-aos="zoom-in"
              // data-aos-duration="2000"
              // data-aos-easing="ease-in-out"
              className={[
                "xs:text-4xl lg:text-[56px]",
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
          className={[
            styles.font_gradient,
            styles.font_size_108,
            styles.font_weight_400,
            styles.built_for,
            "leading-[120px] xs:text-7xl ",
          ].join(" ")}
        >
          built for
          <br />
          tomorrow.
        </span>
        <div className={styles.padding_32}></div>
        <h2
          className={[
            styles.color_grey,
            styles.font_weight_100,
            "text-2xl",
          ].join(" ")}
        >
          rect. is currently available by invitation only
        </h2>
        <div className={styles.padding_16}></div>
        <ul className="flex gap-4 list-none text-gray-200 mr-[78px]">
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
        <div id="section1" className="lg:p-14 xs:p-9"></div>
        <div className="lg:p-6"></div>
        <div className="lg:text-[56px]  xs:text-3xl  mb-4 ">
          Secure way to extend your runway
        </div>
        <h2
          style={{ color: "#d8dee6" }}
          className="lg:text-2xl  xs:text-xl pl-1 mb-10 font-thin"
        >
          Automatically put your funds to work with a competitive annual yield
          and move even closer to your goals
        </h2>
        <div className="lg:grid lg:gap-10  xs:grid xs:gap-6">
          <div>
            {" "}
            <Image
              height={1000}
              className="  xs:rounded-[8px] lg:block xs:hidden  lg:rounded-[36px] hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.2)] hover:-translate-y-4 transition-transform duration-300 ease-in-out"
              src={intro}
              alt="rectlogo"
            ></Image>
            <Image
              height={1000}
              className="  xs:rounded-[8px] lg:hidden   lg:rounded-[36px] hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.2)] hover:-translate-y-4 transition-transform duration-300 ease-in-out"
              src={mobile_intro}
              alt="rectlogo"
            ></Image>
          </div>

          <div className=" lg:flex xs:grid lg:gap-10 xs:gap-6 ">
            <Image
              className="basis-1/2 lg:w-[45%]  xs:w-[100%] xs:rounded-[8px]  lg:rounded-[36px] hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.2)] hover:-translate-y-4 transition-transform duration-300 ease-in-out"
              src={wealth}
              alt="rectlogo"
            ></Image>

            <Image
              className="basis-1/2 lg:w-[45%]  xs:w-[100%]     xs:rounded-[8px]  lg:rounded-[36px] hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.2)] hover:-translate-y-4 transition-transform duration-300 ease-in-out"
              src={treasury}
              alt="rectlogo"
            ></Image>
          </div>
        </div>
        <div className="lg:p-14 xs:p-7"></div>
        <div>
          <div className="lg:text-[56px] mb-4 xs:text-3xl">AutoPilot</div>
          <div
            style={{ color: "#d8dee6" }}
            className="lg:text-2xl  xs:text-xl  pl-1 lg:mb-10 font-thin"
          >
            Put your cash management strategy on autopilot. Start automating to
            start growing your money
          </div>

          <div className="h-[400px]   flex items-center justify-center ">
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="lg:h-[400px] lg:w-[500px] xs:h-[300px] xs:w-[374px]    flex items-center justify-center"
            >
              {" "}
              <Switch></Switch>
            </div>
          </div>
        </div>
        <div id="section2" className="lg:p-14 xs:p-2"></div>
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col  xs:mb-8 ">
            <div className="lg:text-[56px] mb-4  xs:text-3xl ">
              Returns with peace of mind
            </div>
            <h2
              style={{ color: "#d8dee6" }}
              className="lg:text-2xl xs:text-xl  pl-1  font-thin"
            >
              A cash management experience that grows with you
            </h2>
          </div>

          <div
            className="lg:relative lg:h-[600px]  bg-cover bg-center   "
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image
              src={dotGrid}
              alt="Your Image"
              className=" h-full xs:hidden lg:block ml-10 mt-4"
            />
            <div className="lg:absolute lg:top-0 lg:left-0 lg:h-full  bg-black bg-opacity-50 text-white">
              <div className="   xs:grid lg:grid  lg:gap-20 lg:p-20 xs:gap-10 bg-gradient-to-r lg:rounded-[16px] from-white/15 to-black xs:rounded-[16px] ">
                <div className="lg:flex xs:grid justify-between xs:justify-center  xs:bg-dot-pattern lg:bg-none  xs:pt-6   gap-10">
                  {" "}
                  <div className="flex flex-col lg:w-96 xs:w-64    text-justify ">
                    {" "}
                    <div>
                      <ShieldCheckIcon className="h-10  xs:opacity-50 lg:opacity-90"></ShieldCheckIcon>

                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Secure your runway
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      Protect your uninsured deposits with conservative debt
                      mutual funds and treasury bills.
                    </div>
                  </div>{" "}
                  <div className="flex flex-col lg:w-96 xs:w-64  text-justify  ">
                    {" "}
                    <div>
                      <CurrencyRupeeIcon className="h-10 xs:opacity-45 lg:opacity-70"></CurrencyRupeeIcon>{" "}
                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Unlock higher yields
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      Maximize yield by investing in Debt MFs and Treasury Bills
                      that earn up to 7.17% APY*.
                    </div>
                  </div>{" "}
                  <div className="flex flex-col lg:w-96 xs:w-64   text-justify ">
                    {" "}
                    <div>
                      <BoltIcon className="h-10 xs:opacity-45 lg:opacity-70"></BoltIcon>{" "}
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

                <div className="lg:flex xs:grid justify-between xs:justify-center xs:bg-dot-pattern lg:bg-none  xs:pb-6 gap-10">
                  {" "}
                  <div
                    // data-aos="zoom-out-left"
                    // data-aos-duration="2000"
                    // data-aos-delay="100"
                    // data-aos-easing="ease-in-out"
                    className="flex flex-col lg:w-96 xs:w-64 text-justify "
                  >
                    {" "}
                    <div>
                      {" "}
                      <WrenchIcon className="h-10 xs:opacity-45 lg:opacity-70"></WrenchIcon>
                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Manage with ease
                      </div>
                    </div>
                    {/* <AnimatedText
                      once
                      text="Set up auto-balancing rules to automatically move funds
                      between your rect. accounts to ensure you’re making the
                      most of uninvested cash."
                      className="text-base text-gray-500"
                    ></AnimatedText> */}
                    <div className="text-base text-gray-500">
                      Set up auto-balancing rules to automatically move funds
                      between your rect. accounts to ensure you’re making the
                      most of uninvested cash.
                    </div>
                  </div>{" "}
                  <div
                    // data-aos="zoom-out-left"
                    // data-aos-duration="2000"
                    // data-aos-delay="100"
                    // data-aos-easing="ease-in-out"
                    className="flex flex-col lg:w-96 xs:w-64 text-justify  "
                  >
                    {" "}
                    <div>
                      <Cog6ToothIcon className="h-10 xs:opacity-45 lg:opacity-70"></Cog6ToothIcon>
                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Seamless integrations
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      rect. integrates directly with top accounting services and
                      banks to provide a true self-serve onboarding experience.
                    </div>
                    {/* <AnimatedText
                      once
                      text="rect. integrates directly with top accounting services and
                      banks to provide a true self-serve onboarding experience."
                      className="text-base text-gray-500"
                    ></AnimatedText> */}
                  </div>{" "}
                  <div
                    // data-aos="zoom-out-left"
                    // data-aos-duration="2000"
                    // data-aos-delay="100"
                    // data-aos-easing="ease-in-out"
                    className="flex flex-col lg:w-96 xs:w-64 text-justify   "
                  >
                    {" "}
                    <div>
                      <UserGroupIcon className="h-10 xs:opacity-45 lg:opacity-70"></UserGroupIcon>
                      <div className="text-lg mt-5 mb-1 text-gray-400">
                        Feeling of togetherness
                      </div>
                    </div>
                    {/* <AnimatedText
                      once
                      text="Get access to exclusive community and resources to help
                      bring your vision to life."
                      className="text-base text-gray-500"
                    ></AnimatedText> */}
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
        <div id="section3" className="lg:p-14 xs:p-7"></div>
        <div className="flex flex-col gap-10">
          {" "}
          <div className="flex flex-col  ">
            <div className="lg:text-[56px]  xs:text-3xl mb-4">
              Simple and transparent pricing
            </div>

            <h2
              style={{ color: "#d8dee6" }}
              className="lg:text-2xl xs:text-xl  pl-1  font-thin"
            >
              rect. pricing accommodates your business, whether you are
              bootstrapped or supported by venture capital.
            </h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Example1></Example1>
          </div>
        </div>
        <div className="lg:p-14 xs:p-7"></div>
        <div style={{ padding: "none" }}>
          <div className="lg:text-[56px]  xs:text-3xl  mb-4">
            Unparalleled security and support
          </div>

          <h2
            style={{ color: "#d8dee6" }}
            className="lg:text-2xl  xs:text-xl  pl-1 mb-10 font-thin"
          >
            Securely manage your finances with dedicated white-glove support
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {" "}
            <Image
              className="xs:hidden lg:block"
              src={security}
              alt="frame"
              height={900}
            ></Image>
            <Image
              className="lg:hidden "
              src={mobile_bwf}
              alt="frame"
              height={900}
            ></Image>
          </div>
        </div>
        {/* <div className={styles.padding_56}></div> */}
        <div className="lg:h-[700px]  xs:h-[380px] flex items-center justify-center  relative ">
          {" "}
          {/* <SmoothScrollAnimation></SmoothScrollAnimation>  */}
          <Image
            className="lg:block xs:hidden "
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-easing="linear"
            src={frame}
            alt="frame"
            fill
          ></Image>
          <Image
            className="lg:hidden"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-easing="linear"
            src={mobile_rlogo}
            alt="frame"
            fill
          ></Image>
          <div className="absolute  grid lg:bottom-[208px]  xs:bottom-[22%] xs:m-auto lg:m-auto lg:text-5xl xs:text-xl  mr-5">
            <AnimatedTextCharacter text="Building future together."></AnimatedTextCharacter>
          </div>
        </div>
        <div className={[styles.hr, " opacity-70"].join(" ")}></div>
        <div className="p-[12px]"></div>{" "}
        <div className="  lg:flex ">
          <div className="basis-5/12  lg:h-[330px] xs:h-[300px]">
            {" "}
            <div className={styles.logo_image}>
              <Image src="/rect.svg" alt="Rect. Logo" fill={true} />
            </div>
            <SubscriptionForm></SubscriptionForm>
            <div className="lg:p-[33px] xs:p-4"></div>{" "}
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

          <div className="basis-7/12 flex flex-col  lg:p-[16px]   lg:h-[330px]">
            {" "}
            <div className="flex">
              <div className="basis-4/12 flex flex-col gap-4">
                <div>Product</div>{" "}
                <div className="flex  flex-col gap-2">
                  {" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    <a href="#section1">Features</a>
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    <a href="#section2">How rect. works?</a>
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    <a href="#section3">Pricing</a>
                  </div>
                </div>
              </div>{" "}
              <div className="basis-4/12 flex flex-col gap-4">
                <div>Company</div>{" "}
                <div className="flex flex-col gap-2">
                  {" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    About Us
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    <a
                      href="https://www.linkedin.com/company/rect-money/jobs/"
                      target="_blank"
                    >
                      Careers
                    </a>
                  </div>{" "}
                  <div className="cursor-pointer text-gray-500 hover:text-white">
                    <a href="mailto:hello@rect.money?subject=Get Invitation - Rect.">
                      Contact
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="basis-4/12 flex flex-col gap-4">
                <div>Resources</div>
                <div className="flex flex-col gap-2">
                  {" "}
                  <div className=" text-gray-500 ">Blogs</div>{" "}
                  <div className=" text-gray-500 ">Encyclopedia</div>{" "}
                  <div className=" text-gray-500 ">Events</div>{" "}
                  <div className=" text-gray-500 ">
                    Status
                    <span className="h-[6px] w-[6px] bg-green-400 rounded-[50%] inline-block mb-[1px] ml-2"></span>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
            <div className="lg:p-[52px] xs:p-0 "></div>
            <div className="flex justify-between">
              <div className="text-xs xs:basis-full lg:basis-9/12 ">
                {" "}
                <Flex
                  className={[styles.bounce, "cursor-pointer"].join(" ")}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <div>
                    {/* <ChevronDoubleUpIcon className="h-3"></ChevronDoubleUpIcon> */}
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
                  <div
                    className={styles.font_size_12}
                    style={{ marginLeft: 8 }}
                  >
                    Making cents out of dollars, and dollars out of dreams.
                  </div>
                </Flex>
              </div>{" "}
              {/* <div className="basis-3/12 text-xs opacity-70 text-center"> </div> */}
              {/* <div className="flex  text-xs basis-4/12 gap-4  ">
                {" "}
                <div className="text-gray-500  ">Terms of Use</div>{" "}
                <div className="text-gray-500   ">Privacy Policy</div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

{
  /* <div className={styles.hr}> © 2024 rect.money All rights reserved.</div> */
}



const Example1 = () => {
  return (
    <div className="grid w-full   ">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 22.5;
const HALF_ROTATION_RANGE = 22.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement>(null); // Explicitly type the ref

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className=" h-full w-full  "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className=" grid w-full  h-full "
      >
        <Image
          className="w-full h-full lg:block xs:hidden rounded-[16px] relative bg-gradient-to-l from-white/15 to-black   "
          src={fees}
          alt="fees "
        ></Image>
        <Image
          className="w-full h-full lg:hidden  rounded-[16px] relative bg-gradient-to-l from-white/15 to-black   "
          src={mobile_fees}
          alt="fees "
        ></Image>
        <div
          style={{
            transform: "translateZ(150px)",
            transformStyle: "preserve-3d",
          }}
          className={[
            styles.font_gradient,
            "absolute lg:bottom-[150px] lg:text-4xl backdrop-blur-3xl  opacity-90 bg-gradient-to-l from-white to-black  rounded-[8px]  p-2  lg:right-[72px] xs:text-xs xs:bottom-1 xs:right-1 ",
          ].join(" ")}
        >
          free to open, free to use. no fees, no minimums.
        </div>{" "}
      </div>
    </motion.div>
  );
};
