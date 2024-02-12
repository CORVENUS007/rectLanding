import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

interface CardComponentProps {
  H: string;
  W: string;
  ImageSrc: string;
}

export const Card: React.FC<CardComponentProps> = ({ H, W, ImageSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle: React.CSSProperties = {
    height: H,
    width: W,
    perspective: "10000px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    fontSmooth: "always",

    // backgroundColor: "#f9f9fb",
    // boxShadow: "inset 0 1px 9px rgba(157,157,176,.3)",
  };

  const innerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",

    // backfaceVisibility: isFlipped ? 'visible' : 'hidden',
    boxShadow: "inset 0 10px 10px  rgba(157,157,176,.3)",
    borderTop: ".5 solid",
    borderRadius: "32px",
    transformStyle: "preserve-3d",
    // transition: "all 0.7s ease",
    // transform: `rotateY(${isFlipped ? "180deg" : "0"}) `,

    willChange: "transform",
  };

  const faceStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    fontSize: "24px",

    // transform: 'translateZ(1px)',
    // imageRendering: 'pixelated',
    // backgroundColor: "#f9f9fb",

    //
  };

  return (
    <div
      className="rounded-[32px] hover:shadow-[10px_10px_60px_10px_rgba(255,255,255,0.1)] hover:-translate-y-4 transition-transform duration-300 ease-in-out "
      style={cardStyle}
      onClick={handleCardClick}
    >
      <div style={innerStyle}>
        {/* Front face of the card */}
        <div style={faceStyle}>
          <div className="h-[100%] relative border-black rounded-[32px]  flex justify-center items-center">
            <Image
              className="bg-black border-black rounded-[32px] overflow-hidden "
              width={500}
              height={500}
              src={ImageSrc}
              alt="rectlogo"
            ></Image>
            {/* < AddIcon className="absolute top-[8%] right-[20px] z-10 text-gray-600 text-[20px] p-1 rounded-full bg-gray-200"></AddIcon> */}
          </div>
          {/*   
            <div className="h-[35%] flex justify-center items-center">
              {" "}
              <div className=" text-xs w-10/12">
                
                  <p className="text-xs text-gray-400">rect.</p> 
                  <p className="text-base ">$5K Credits</p>
                
              </div>
            </div> */}
        </div>

        {/* Back face of the card */}
        <div
          style={{
            ...faceStyle,
            transform: "rotateY(180deg)",
            opacity: isFlipped ? 1 : 0,
            visibility: isFlipped ? "visible" : "hidden",
            transition: "opacity 0.6s, visibility 0.6s",
          }}
        >
          <div className="h-[65%] relative  flex justify-center items-center  ">
            <CloseIcon className="absolute top-[8%] right-[20px] z-10 text-gray-600 text-[20px] p-1 rounded-full bg-gray-200"></CloseIcon>
            <div className=" text-xs w-10/12 pb-20">
              <p className="text-sm  text-gray-400">rect.</p>
              <p className="text-base ">Revolution</p>
            </div>
          </div>
          <div className="h-[35%] flex justify-center items-center">
            {" "}
            <div className=" text-xs w-10/12">
              <p className="text-xs text-gray-400">Standard</p>
              <p className="text-base ">$5K Credits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card1: React.FC<CardComponentProps> = ({ H, W, ImageSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle: React.CSSProperties = {
    height: H,
    width: W,
    perspective: "10000px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    fontSmooth: "always",

    // backgroundColor: "#f9f9fb",
    // boxShadow: "inset 0 1px 9px rgba(157,157,176,.3)",
  };

  const innerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",

    // backfaceVisibility: isFlipped ? 'visible' : 'hidden',
    boxShadow: "inset 0 10px 10px  rgba(157,157,176,.3)",
    borderTop: ".5 solid",
    borderRadius: "32px",
    transformStyle: "preserve-3d",
    transition: "all 0.7s ease",
    transform: `rotateY(${isFlipped ? "180deg" : "0"}) `,

    willChange: "transform",
  };

  const faceStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    fontSize: "24px",

    // transform: 'translateZ(1px)',
    // imageRendering: 'pixelated',
    // backgroundColor: "#f9f9fb",

    //
  };

  return (
    <div className="" style={cardStyle} onClick={handleCardClick}>
      <div style={innerStyle}>
        {/* Front face of the card */}
        <div style={faceStyle}>
          <div className="h-[100%] relative border-black rounded-[32px]  flex justify-center items-center">
            <Image
              className="bg-black border-black rounded-[32px] overflow-hidden "
              width={400}
              height={400}
              src={ImageSrc}
              alt="rectlogo"
            ></Image>
            {/* < AddIcon className="absolute top-[8%] right-[20px] z-10 text-gray-600 text-[20px] p-1 rounded-full bg-gray-200"></AddIcon> */}
          </div>
          {/*   
            <div className="h-[35%] flex justify-center items-center">
              {" "}
              <div className=" text-xs w-10/12">
                
                  <p className="text-xs text-gray-400">rect.</p> 
                  <p className="text-base ">$5K Credits</p>
                
              </div>
            </div> */}
        </div>

        {/* Back face of the card */}
        <div
          style={{
            ...faceStyle,
            transform: "rotateY(180deg)",
            opacity: isFlipped ? 1 : 0,
            visibility: isFlipped ? "visible" : "hidden",
            transition: "opacity 0.6s, visibility 0.6s",
          }}
        >
          <div className="h-[65%] relative  flex justify-center items-center  ">
            <CloseIcon className="absolute top-[8%] right-[20px] z-10 text-gray-600 text-[20px] p-1 rounded-full bg-gray-200"></CloseIcon>
            <div className=" text-xs w-10/12 pb-20">
              <p className="text-sm  text-gray-400">rect.</p>
              <p className="text-base ">Revolution</p>
            </div>
          </div>
          <div className="h-[35%] flex justify-center items-center">
            {" "}
            <div className=" text-xs w-10/12">
              <p className="text-xs text-gray-400">Standard</p>
              <p className="text-base ">$5K Credits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
