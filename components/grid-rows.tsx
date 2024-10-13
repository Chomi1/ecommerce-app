import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GridRowsType = {
  className?: string;
  rectangle6?: string;
  title?: string;
  title1?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propMinHeight1?: CSSProperties["minHeight"];
};

const GridRows: NextPage<GridRowsType> = ({
  className = "",
  propMinHeight,
  rectangle6,
  propHeight,
  title,
  title1,
  propHeight1,
  propMinHeight1,
}) => {
  const gridRowsStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      minHeight: propMinHeight1,
    };
  }, [propHeight1, propMinHeight1]);

  return (
    <div
      className={`w-[367px] rounded-2xl border-lightgray-100 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[19px] gap-8 max-w-full text-left text-sm text-gray-200 font-helvetica-neue-lt  ${className}`}
      style={gridRowsStyle}
    >
      <img
        className="self-stretch h-[158px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={rectangle6}
        style={rectangleIconStyle}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        <div className="w-[220px] relative text-xl leading-[24px] font-medium inline-block mq450:text-base mq450:leading-[19px]">
          {title}
        </div>
        <div
          className="self-stretch h-[72px] relative leading-[15.2px] inline-block"
          style={title1Style}
        >
          {title1}
        </div>
        <div className="self-stretch rounded-lg bg-linen-100 hidden flex-row items-center justify-center p-3 whitespace-nowrap text-black">
          <div className="relative leading-[20px] font-medium">
            Book a Consultation
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridRows;
