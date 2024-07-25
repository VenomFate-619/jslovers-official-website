import React from 'react'

const TalkCard = () => {
  return (
    <div className="p-[1.06rem] border-[3px] border-black rounded-[0.625rem] w-[16.125rem] justify-self-center">
      <div className="w-[14rem] h-[12.18rem] bg-[#E0719E] border-[3px] border-black rounded-[0.312rem]"></div>
      <div className="mt-4">
        <p className="text-xl font-medium">20 May 2021</p>
        <p className="text-[1.75rem] font-bold leading-none">
          Introduction to Android Development
        </p>
        <p className="text-[1.125rem] font-semibold text-text-label">
          by Neha Sharma
        </p>
      </div>
    </div>
  );
}

export default TalkCard