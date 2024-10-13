import type { NextPage } from "next";
import Icons from "./icons";
import Icons1 from "./icons1";

export type DescriptionComponentType = {
  className?: string;
  logo?: string;
};

const DescriptionComponent: NextPage<DescriptionComponentType> = ({
  className = "",
  logo,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center py-0 pl-0 pr-[149px] box-border gap-[19px] max-w-full text-left text-lg text-gray-200 font-aeonik mq450:pr-5 mq450:box-border mq800:pr-[74px] mq800:box-border mq1300:flex-wrap ${className}`}
    >
      <img
        className="w-[613px] relative max-h-full object-cover max-w-full mq1300:flex-1"
        loading="lazy"
        alt=""
        src={logo}
      />
      <div className="flex-1 flex flex-col items-start justify-start py-24 px-0 box-border gap-20 min-w-[428px] max-w-full  mq450:pt-10 mq450:pb-10 mq450:box-border  mq800:min-w-full mq1125:pt-[62px] mq1125:pb-[62px] mq1125:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[37.7px] ">
          <h1 className="m-0 relative text-13xl font-bold font-helvetica-neue-lt mq450:text-lgi mq800:text-7xl">
            Prime Polypack Ltd.
          </h1>
          <div className="self-stretch relative leading-[20.8px] inline-block min-h-[88px]">
            Prime Group has grown from strength to strength, diversifying into
            agriculture, packaging, entertainment, and social welfare. Our
            success is a testament to the dedication of our talented team and
            our commitment to creating value for all stakeholders.
          </div>
          <div className="self-stretch relative">
            Our success is a testament to the dedication of our talented team
            and our commitment to creating value for all stakeholders.
          </div>
          <div className="self-stretch relative leading-[20.8px] inline-block min-h-[88px]">
            Prime Group has grown from strength to strength, diversifying into
            agriculture, packaging, entertainment, and social welfare. Our
            success is a testament to the dedication of our talented team and
            our commitment to creating value for all stakeholders.
          </div>
        </div>
        <div className="w-[526px] flex flex-row items-start justify-start gap-5 max-w-full text-xl font-helvetica-neue-lt mq800:flex-wrap">
          <Icons />
          <Icons1 />
        </div>
      </div>
    </div>
  );
};

export default DescriptionComponent;
