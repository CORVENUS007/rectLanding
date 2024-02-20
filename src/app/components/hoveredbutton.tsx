import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Example = () => {
  return (
    <div className="flex  justify-center  ">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <span className="text-gray-500">Pricing</span>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      {/* link can be set for the pricing */}
      <a href={href} className="relative text-gray-500 hover:text-white">
        {children}

        {/* <span className="text-gray-500">Pricing</span> */}
        {/* <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-[2px] origin-left scale-x-0  bg-zinc-300 transition-transform duration-300 ease-out"
        /> */}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{
              translateX: "-50%",
              boxShadow:
                "inset 3px 3px 15px  rgba(157,157,176,.3) ,0px 0px 00px 0px #737373",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-10  rounded-[16px]  bg-gradient-to-l   "
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-b from-zinc-300/60 to-zinc-900    backdrop-blur-3xl" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div
      style={{
        boxShadow:
          "inset 3px 3px 15px  rgba(157,157,176,.3) ,0px 0px 800px 0px #737373",
      }}
      className="w-64  rounded-[16px] p-6 bg-transparent shadow-xl text-white/95"
    >
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold  text-sm ">For Individuals</h3>
        <a href="#" className="block text-xs hover:underline">
          Suraj
        </a>
        <a href="#" className="block text-xs hover:underline">
          Saksham
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold text-sm ">For Companies</h3>
        <a href="#" className="block text-xs hover:underline">
          Infosys
        </a>
        <a href="#" className="block text-xs hover:underline">
          Microsoft
        </a>
        <a href="#" className="block text-xs hover:underline">
          Sales Force
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-white hover:text-black">
        Contact sales
      </button>
    </div>
  );
};

export default Example;

export const Example2 = () => {
  return (
    <div className="flex  justify-center  ">
      <FlyoutLink2 href="#" FlyoutContent={PricingContent2}>
        <span className="text-gray-500">Resources</span>
      </FlyoutLink2>
    </div>
  );
};

const FlyoutLink2 = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      {/* link can be set for the pricing */}
      <a href={href} className="relative text-gray-500 hover:text-white">
        {children}

        {/* <span className="text-gray-500">Pricing</span> */}
        {/* <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-[2px] origin-left scale-x-0  bg-zinc-300 transition-transform duration-300 ease-out"
        /> */}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{
              translateX: "-50%",
              boxShadow:
                "inset 3px 3px 15px  rgba(157,157,176,.3) ,0px 0px 0px 0px #737373",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-10  rounded-[16px]  bg-gradient-to-l   "
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-b from-zinc-300/60 to-zinc-900    backdrop-blur-3xl" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent2 = () => {
  return (
    <div
      style={{
        boxShadow:
          "inset 3px 3px 15px  rgba(157,157,176,.3) ,0px 0px 800px 0px #737373",
      }}
      className="w-64  rounded-[16px]  bg-transparent p-6 shadow-xl text-white/95"
    >
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold  text-sm ">Socials</h3>
        <a href="#" className="block text-xs hover:underline">
          Blogs
        </a>
        <a href="#" className="block text-xs hover:underline">
          Events
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold text-sm ">Insights</h3>
        <a href="#" className="block text-xs hover:underline">
          Status{" "}
          <span className="h-[6px] w-[6px] bg-green-400 rounded-[50%] inline-block mb-[1px] ml-[3px]"></span>
        </a>
        <a href="#" className="block text-xs hover:underline">
          Encyclopedia
        </a>
        {/* <a href="#" className="block text-xs hover:underline">
          Sales Force
        </a> */}
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-white hover:text-black">
        About Us
      </button>
    </div>
  );
};
