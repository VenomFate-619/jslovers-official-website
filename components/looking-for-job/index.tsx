import React from 'react'
import Image from "next/image";
import { Button } from "@/components/Button";

const LookingForJob = () => {
  return (
    <div className="flex flex-col items-center py-10 px-6 bg-[#F3F6E6] mt-24">
      <p className="lg:text-[2.5rem] text-2xl font-semibold lg:mb-2 mb-5">
        Looking for a job ?
      </p>
      <p className="text-center text-paragraph mb-5 lg:text-sm">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <Button
        size={"lg"}
        className="lg:text-xl text-[0.875rem] border-[3px] mt-5 border-black rounded-[10px] lg:gap-x-4 gap-x-11"
      >
        <span>Get started</span>
        <Image
          src={"/assets/icons/right-arrow.svg"}
          width={17}
          height={13}
          alt="ff"
        />
      </Button>
    </div>
  );
}

export default LookingForJob