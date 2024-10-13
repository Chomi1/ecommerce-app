import type { NextPage } from "next";

export type CardsType = {
  className?: string;
  images?: string;
  rectangle5?: string;
  rectangle9?: string;
  rectangle8?: string;
  rectangle7?: string;
  bhujaPuffedRiceWeight?: string;
  lBS200Grams?: string;
};

const Cards: NextPage<CardsType> = ({
  className = "",
  images,
  rectangle5,
  rectangle9,
  rectangle8,
  rectangle7,
  bhujaPuffedRiceWeight,
  lBS200Grams,
}) => {
  return (
    <div
      className={`h-[308px] flex-1 rounded-2xl border-lightgray-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-2.5 px-[9px] gap-2.5 min-w-[108px] text-center text-base text-gray-200 font-helvetica-neue-lt ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-3.5">
        <img
          className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={images}
        />
        <div className="hidden flex-row items-center justify-center gap-2">
          <img
            className="h-9 w-9 relative rounded-md object-cover min-h-[36px]"
            alt=""
            src={rectangle5}
          />
          <img
            className="h-9 w-9 relative rounded-md object-cover min-h-[36px]"
            alt=""
            src={rectangle9}
          />
          <img
            className="h-9 w-9 relative rounded-md object-cover min-h-[36px]"
            alt=""
            src={rectangle8}
          />
          <img
            className="h-9 w-9 relative rounded-md object-cover min-h-[36px]"
            alt=""
            src={rectangle7}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-4 px-0">
        <div className="flex-1 relative leading-[24px] font-medium">
          <p className="m-0">{bhujaPuffedRiceWeight}</p>
          <p className="m-0">{lBS200Grams}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
