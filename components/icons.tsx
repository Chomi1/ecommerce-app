import type { NextPage } from "next";

export type IconsType = {
  className?: string;
};

const Icons: NextPage<IconsType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-2xl border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] pl-6 pr-5 gap-[13.5px] min-w-[164px] text-left text-xl text-gray-200 font-helvetica-neue-lt ${className}`}
    >
      <img
        className="w-6 h-6 relative"
        loading="lazy"
        alt=""
        src="/package.svg"
      />
      <b className="relative inline-block min-w-[53px] mq450:text-base">
        46,000
      </b>
      <div className="self-stretch h-9 relative text-sm leading-[15.2px] lowercase inline-block min-h-[36px]">
        5 PLY CARTON BOX PRODUCTION CAPACITY
      </div>
    </div>
  );
};

export default Icons;
