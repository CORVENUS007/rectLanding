
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { TloginSchema, loginSchema } from "../lib/types";

function EmailBox() {
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

export default EmailBox;
