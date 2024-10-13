import type { NextPage } from "next";
import SliderInnerFrame from "./slider-inner-frame";

export type SliderComponentType = {
  className?: string;
};

const SliderComponent: NextPage<SliderComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-end justify-start relative min-h-[850px] max-w-full text-left text-lg text-ivory font-helvetica-neue-lt ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <div className="flex-1 flex flex-col items-center justify-start pt-24 px-5 pb-12 box-border gap-24 max-w-full z-[1] mq450:pt-[62px] mq450:pb-[31px] mq450:box-border ">
        <SliderInnerFrame
          howItWorks="Baba Agro"
          howItWorks1="Packaging Nature's Bounty, Perfectly."
        />
        <div className="w-[1140px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-3.5">
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-gainsboro mix-blend-color-burn" />
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-white" />
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-gainsboro mix-blend-color-burn" />
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-gainsboro mix-blend-color-burn" />
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-gainsboro mix-blend-color-burn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
