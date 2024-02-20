import classNames from "classnames";
import React, { useState, useEffect } from "react";

const on = "/on.mp3";
const off = "/off.mp3";

const onSound =
  typeof window !== "undefined" ? (new Audio(on) as HTMLAudioElement) : null;
const offSound =
  typeof window !== "undefined" ? (new Audio(off) as HTMLAudioElement) : null;

const Switch: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);

  function play() {
    // isSelected === true ? onSound.play() : offSound.play();
    // audio.play();
    if (isSelected) {
      if (onSound !== null) {
        onSound.play();
      }
    } else {
      if (offSound !== null) {
        offSound.play();
      }
    }
  }

  useEffect(() => {
    play();
  }, [isSelected]);
  return (
    <div
      style={{
        boxShadow:
          "inset 0 15px 15px  rgba(157,157,176,.3) ,0px 0px 800px 0px #737373",
      }}
      // onClick={() => {
      //   setIsSelected2(!isSelected2);
      // }}
      className={classNames(
        "flex lg:w-[390px]  lg:h-[216px] xs:w-64 xs:h-32 bg-gradient-to-l from-black to-black m-10  items-center rounded-full transition duration-1000 ease-out delay-300 ",
        {
          "bg-gradient-to-l from-zinc-300/70 to-black": isSelected,
        }
      )}
    >
      <span
        onClick={() => {
          setIsSelected(!isSelected);
        }}
        style={{
          boxShadow: "inset 0px  5px 5px  rgba(157,157,176,.3) ",
        }}
        className={classNames(
          "lg:h-[158px] lg:w-[158px] xs:h-24  xs:w-24 bg-zinc-900  hover:cursor-pointer rounded-full transition-all duration-[1000ms]  ease-in-out  ml-6",
          {
            "lg:ml-[210px] xs:ml-[140px]": isSelected,
            "bg-zinc-800": isSelected,
          }
        )}
      ></span>
    </div>
  );
};

export default Switch;
