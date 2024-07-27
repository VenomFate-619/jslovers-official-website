import React, { useRef, useState } from "react";
import { Button } from "../Button";
import { FilterInfo } from "@/types";

type SelectedOptions = {
 [key:string] : string
};

export const Filters = ({ filter }: { filter: FilterInfo }) => {
  const [selectedOption, setselectedOptions] = useState<SelectedOptions>({});
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilter = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    filterName: string
  ) => {
    // const childElement = event.currentTarget.querySelector("svg")
    // childElement?.classList.toggle("rotate-180");
    if(selectedFilter === filterName) {
      setSelectedFilter("")
      return;
    }
    setSelectedFilter(filterName);
  };

  const handleClickOnOption = (
    filterName: string,
    optionName: string
  ) => {
    let newSelectedOptions = { ...selectedOption };
    if (newSelectedOptions[optionName] == undefined) {
      newSelectedOptions[optionName] = filterName;
      setselectedOptions(newSelectedOptions);
    }
  };

  const returnActiveFilterClass = (option:string) => {
    return selectedOption[option] != undefined ? " active-filter" : ""
  }

  const returnRotateClass = (filterName:string) =>{
    return selectedFilter === filterName ? "rotate-180" : "";
  }

  const handleDelete = (option:string) =>{
    let newSelectedOptions = { ...selectedOption };
    delete newSelectedOptions[option]
    setselectedOptions(newSelectedOptions);
  }

  return (
    <div>
      {/* filter_title*/}
      <div className="flex flex-wrap gap-x-8">
        {Object.keys(filter).map((filterName) => (
          <Button
            className="border-[3px] border-black rounded-full bg-[#E0719E] py-[14px] px-[29px] text-xl capitalize font-medium h-[51px]"
            key={filterName}
            onClick={(event) => {
              handleFilter(event ,filterName);
            }}
          >
            {filterName}
            <svg
              width={28}
              height={15}
              viewBox="0 0 28 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"ml-[22px] transition-transform duration-500" + returnRotateClass(filterName)}
            >
              <path
                d="M2 1.5L14 13.5L26 1.5"
                stroke="black"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        ))}
      </div>
      {/* filter_options */}
      {selectedFilter && (
        <div className="flex flex-wrap gap-x-4 gap-y-5 mt-11">
          {filter[selectedFilter].map((option: string) => (
            <Button
              className={
                "rounded-full bg-[#F3F6E7] py-[14px] px-[29px] text-sm font-medium h-[51px]" +
                returnActiveFilterClass(option)
              }
              key={option}
              onClick={() => handleClickOnOption(selectedFilter, option)}
            >
              {option}
            </Button>
          ))}
        </div>
      )}
      <hr className="border-[3px] border-[#C4C4C4] mb-8 mt-5" />
      {/* selected_options */}
      <div className="flex flex-wrap gap-x-4 gap-y-5 mb-11">
        {Object.keys(selectedOption).map((item) => (
          <Button
            className="rounded-full bg-white border border-[#696969] text-[#696969] py-[14px] px-[29px] text-sm font-medium h-[51px] gap-[22px]"
            key={item}
          >
            {item} <span onClick={() => handleDelete(item)}>X</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
