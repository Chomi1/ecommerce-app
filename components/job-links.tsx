import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type JobLinksType = {
  className?: string;
  howItWorks?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinHeight?: CSSProperties["minHeight"];
};

const JobLinks: NextPage<JobLinksType> = ({
  className = "",
  howItWorks,
  propDisplay,
  propMinHeight,
}) => {
  const howItWorks4Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const arrowOutwardIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={`self-stretch rounded-2xl bg-floralwhite flex flex-col items-start justify-start pt-6 px-6 pb-[25.3px] box-border gap-4 max-w-full text-left text-5xl text-gray-200 font-aeonik ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[156px] gap-4 mq750:flex-wrap mq750:pr-[78px] mq750:box-border mq450:pr-5 mq450:box-border">
        <h3
          className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-lgi"
          style={howItWorks4Style}
        >
          {howItWorks}
        </h3>
        <img
          className="h-8 w-8 relative min-h-[32px]"
          loading="lazy"
          alt=""
          src="/arrow-outward.svg"
          style={arrowOutwardIconStyle}
        />
      </div>
      <div className="w-[461px] relative text-xl inline-block max-w-full mq450:text-base">
        Jitpur/Remotly · Full Time
      </div>
    </div>
  );
};

export default JobLinks;
