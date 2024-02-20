// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// // import logo from "../../../public/Logo.png";
// import { useRouter } from "next/navigation";
// import GppGoodIcon from "@mui/icons-material/GppGood";
// import Link from "next/link";
// import axios from "axios";
// import custom from "../styles/custom.module.css";
// import { TloginSchema, loginSchema } from "../lib/types";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
// import Cookies from "js-cookie";
// function LoginMain() {
//   const {
//     getValues,
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting, isValid },
//     reset,
//   } = useForm<TloginSchema>({
//     mode: "onSubmit",
//     resolver: zodResolver(loginSchema),
//   });

//   const [error, setError] = useState("");

//   const onSubmit = async (data: TloginSchema) => {
//     // TODO: submit to server
//     // ...
//     if (isValid) {
//       <div>Thank u suraj</div>;
//       if (error) {
//         reset();
//       }
//     }

//     // await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log("form submitted");
//   };

//   return (
//     <>

//         <form onSubmit={handleSubmit(onSubmit)} className="bg-black  w-[70%]">
//           <div>
//             {" "}
//             <label className="block mb-2 mt-4 pl-[2px]" htmlFor="username">
//               Stay in touch with the latest.
//             </label>
//             <div className="pt-3 pb-1 border-white/70 border-b flex justify-between  w-[60%]">
//               {" "}
//               <input
//                 {...register("email")}
//                 type="text"
//                 placeholder="your email"
//                 className=" bg-black  text-gray-500 w-[90%] py-2 px-1 focus:outline-none  rounded  placeholder-gray-500"
//               />
//               <button
//                 disabled={isSubmitting}
//                 className="  disabled:bg-gray-500   rounded"
//               >
//                 <ArrowLongRightIcon className="hover:text-gray-500  text-[#d8dee6]   h-5"></ArrowLongRightIcon>
//               </button>
//             </div>
//           </div>

//           <div>
//             {" "}
//             {errors.email && (
//               <p className="text-red-500 bg-black text-xs pt-1">{`${errors.email.message}`}</p>
//             )}
//           </div>
//         </form>

//     </>
//   );
// }

// export default LoginMain;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { TloginSchema, loginSchema } from "../lib/types";

function LoginMain() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TloginSchema>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });

  const [showForm, setShowForm] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async () => {
    // Simulating API request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowForm(false);
    setShowMessage(true);
  };

  return (
    <>
      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-black ">
          <div>
            <label className="block mb-2 mt-4 pl-[2px]" htmlFor="username">
              Stay in touch with the latest.
            </label>
            <div className="pt-3 pb-1 border-white/70 border-b flex justify-between w-[60%]">
              <input
                {...register("email")}
                type="text"
                placeholder="your email"
                className="bg-black text-gray-500 w-[90%] py-2 px-1 focus:outline-none rounded "
                autoComplete="off"
              />
              <button type="submit" className="rounded">
                <ArrowLongRightIcon className="hover:text-gray-500 text-[#d8dee6] h-5"></ArrowLongRightIcon>
              </button>
            </div>
          </div>
          <div>
            {errors.email && (
              <p className="text-red-600 bg-black text-xs pt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </form>
      )}

      {showMessage && (
        <div className=" text-base text-gray-500 lg:mt-10 xs:mt-0">
          <p>Thankyou for subscribing for rect. updates </p>
        </div>
      )}
    </>
  );
}

export default LoginMain;
