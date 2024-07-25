"use client";
import Image from "next/image";
import { useMediaQuery } from "../hooks";
import { Button } from "@/components/Button";
import Meetups from "@/svgs/meetups";
import LookingForJob from "@/components/looking-for-job";
import TalkCard from "@/components/talk-card";
import { Filters } from "@/components/filter";

const filters = {
  location : ["goa" , "pune" ,"agra"],
  topics: ["js","ts","OS"],
  level:["begineer" , "medium" , "pro"]
}

const Page = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="">
      <div className="container lg:px-[8.75rem]">
        <div className="flex md:flex-row flex-col-reverse lg:gap-40 md:gap-16 gap-8 lg:items-start items-center justify-between">
          <div className="lg:flex-initial md:flex-1 flex flex-col md:items-start items-center">
            <Meetups className="lg:w-[22.18rem] lg:h-[5.5rem]  w-[15.375rem] h-14" />
            <p className="text-[#505050] md:text-base text-center md:text-left lg:w-96 leading-none">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Button
              size={"lg"}
              className="lg:text-xl text-[0.875rem] border-[3px] mt-5 border-black rounded-[10px] lg:gap-x-4 gap-x-11"
            >
              <span>See more</span>
              <Image
                src={"/assets/icons/right-arrow.svg"}
                width={17}
                height={13}
                alt="ff"
              />
            </Button>
          </div>
          {isDesktop && (
            <Image
              src="/assets/desktop-hero-meetup.svg"
              alt="world"
              width={541}
              height={311}
              className="lg:flex-initial md:flex-1"
            />
          )}
          {(isMobile || isTablet) && (
            <Image
              src="/assets/mob-meetups.svg"
              alt="world"
              width={260}
              height={150}
              className="lg:flex-initial md:flex-1"
            />
          )}
        </div>

        {/* filters */}
        <div className="mt-14">
          <p className="text-xl font-medium text-text mb-6">
            Filter the meetup results as per your need
          </p>
          <Filters filter={filters} />
          {/* cards */}
          <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-x-[2.44rem] gap-y-[3.75rem] mb-16">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <TalkCard key={index} />
            ))}
          </div>

          <Button size={"lg"} className="border-[3px] border-black bg-[#C1C1C1] rounded-md font-medium text-xl mx-auto" >
            Load more
          </Button>
        </div>
      </div>

      <LookingForJob />
    </div>
  );
};

export default Page;
