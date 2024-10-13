import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SliderInnerFrameType = {
  className?: string;
  howItWorks?: string;
  howItWorks1?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const SliderInnerFrame: NextPage<SliderInnerFrameType> = ({
  className = "",
  propWidth,
  propWidth1,
  howItWorks,
  howItWorks1,
  propMargin,
  propAlignSelf,
  propWidth2,
  propHeight,
  propDisplay,
}) => {
  const sliderTextsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const sliderHeadingTextStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const howItWorksStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      alignSelf: propAlignSelf,
      width: propWidth2,
      height: propHeight,
      display: propDisplay,
    };
  }, [propMargin, propAlignSelf, propWidth2, propHeight, propDisplay]);

  return (
    <div
      className={`w-[1140px] flex flex-row items-end justify-between max-w-full gap-5 text-left text-lg text-ivory font-helvetica-neue-lt mq1125:flex-wrap ${className}`}
    >
      <div
        className="w-[879px] flex flex-col items-start justify-start gap-10 max-w-full "
        style={sliderTextsStyle}
      >
        <div
          className="w-[114px] [backdrop-filter:blur(30px)] rounded-31xl bg-gray-700 border-gray-900 border-[1px] border-solid box-border flex flex-row items-end justify-start py-2 px-[13px] whitespace-nowrap"
          style={sliderHeadingTextStyle}
        >
          <div className="flex-1 relative">{howItWorks}</div>
        </div>
        <h1
          className="m-0 self-stretch relative text-45xl leading-[64px] font-medium font-aeonik text-floralwhite mq450:text-19xl mq450:leading-[38px] mq800:text-32xl mq800:leading-[51px]"
          style={howItWorksStyle}
        >
          {howItWorks1}
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="h-11 w-11 [backdrop-filter:blur(30px)] rounded-31xl bg-gray-700 border-gray-900 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 px-[9px]">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src="/arrow-left-alt.svg"
          />
        </div>
        <div className="h-11 w-11 [backdrop-filter:blur(30px)] rounded-31xl bg-gray-700 border-gray-900 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 px-[9px]">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src="/arrow-right-alt.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderInnerFrame;
