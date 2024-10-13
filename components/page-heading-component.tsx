import type { NextPage } from "next";

export type PageHeadingComponentType = {
  className?: string;
};

const PageHeadingComponent: NextPage<PageHeadingComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[843px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border max-w-full z-[1] text-left text-xl text-gray-200 font-helvetica-neue-lt ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-24 px-[150px] pb-48 box-border min-h-[552px] max-w-full gap-6 mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pt-[62px] mq800:pb-[125px] mq800:box-border  mq1125:pl-[75px] mq1125:pr-[75px] mq1125:box-border">
        <div className="self-stretch flex flex-row items-end justify-start max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full ">
            <div className="flex flex-row items-center justify-start gap-4">
              <img
                className="h-8 w-8 relative"
                loading="lazy"
                alt=""
                src="/category1.svg"
              />
              <b className="h-[19px] relative inline-block min-w-[124px] mq450:text-base">
                Prime Polypack
              </b>
            </div>
            <h1 className="m-0 self-stretch relative text-45xl leading-[64px] font-medium font-aeonik mq450:text-19xl mq450:leading-[38px] mq800:text-32xl mq800:leading-[51px]">{`Your trusted source for plastic cups & papers`}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeadingComponent;
