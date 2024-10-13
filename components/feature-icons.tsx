import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FeatureIconsType = {
  className?: string;
  whatshot?: string;
  howItWorks?: string;
  howItWorks1?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const FeatureIcons: NextPage<FeatureIconsType> = ({
  className = "",
  whatshot,
  howItWorks,
  propWidth,
  howItWorks1,
  propHeight,
}) => {
  const howItWorks2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const howItWorks3Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`w-[270px] rounded-2xl bg-gray-300 border-gray-100 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] pl-8 pr-5 gap-5 text-left text-xl text-floralwhite font-helvetica-neue-lt ${className}`}
    >
      <img className="w-8 h-8 relative" loading="lazy" alt="" src={whatshot} />
      <b
        className="w-[179px] relative inline-block min-h-[52px] mq450:text-base"
        style={howItWorks2Style}
      >
        {howItWorks}
      </b>
      <div
        className="w-[206px] relative text-base leading-[17.6px] text-gray-1000 inline-block min-h-[40px]"
        style={howItWorks3Style}
      >
        {howItWorks1}
      </div>
    </div>
  );
};

export default FeatureIcons;
