import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type RecentPostsType = {
  className?: string;
  rectangle3?: string;
  howItWorks?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const RecentPosts: NextPage<RecentPostsType> = ({
  className = "",
  propHeight,
  propAlignSelf,
  propWidth,
  rectangle3,
  howItWorks,
  propTextDecoration,
}) => {
  const recentPosts1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propHeight, propAlignSelf, propWidth]);

  const howItWorks1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={`h-[281px] flex flex-col items-start justify-start gap-10 text-left text-xl text-gray-200 font-aeonik  ${className}`}
      style={recentPosts1Style}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={rectangle3}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        <div className="self-stretch relative mq450:text-base">
          {howItWorks}
        </div>
        <div className="w-[216px] flex flex-row items-center justify-center gap-[10.5px] text-base text-gray-800">
          <a
            className="[text-decoration:none] flex-1 relative text-[inherit] inline-block min-w-[92px]"
            style={howItWorks1Style}
          >
            Prime Group
          </a>
          <div className="flex flex-row items-end justify-center pt-[3px] px-0 pb-0">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-gray-800" />
          </div>
          <div className="flex-1 relative inline-block min-w-[97px]">
            13 April, 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
