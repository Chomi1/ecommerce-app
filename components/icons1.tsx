import type { NextPage } from "next";

export type Icons1Type = {
  className?: string;
};

const Icons1: NextPage<Icons1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-2xl border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-6 pl-6 pr-5 gap-[13.5px] min-w-[164px] min-h-[159px] text-left text-xl text-gray-200 font-helvetica-neue-lt mq800:min-h-[auto] ${className}`}
    >
      <img
        className="w-6 h-6 relative"
        loading="lazy"
        alt=""
        src="/package1.svg"
      />
      <b className="relative inline-block min-w-[69px] mq450:text-base">
        Founded
      </b>
      <div className="self-stretch relative text-sm lowercase">
        Over one decades ago
      </div>
    </div>
  );
};

export default Icons1;
