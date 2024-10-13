import type { NextPage } from "next";
import { Button } from "@mui/material";

export type GroupOfCompaniesFrameType = {
  className?: string;
};

const GroupOfCompaniesFrame: NextPage<GroupOfCompaniesFrameType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-floralwhite flex flex-row items-start justify-center py-24 pl-[21px] pr-5 box-border max-w-full text-left text-21xl text-gray-200 font-aeonik mq800:pt-[62px] mq800:pb-[62px] mq800:box-border ${className}`}
    >
      <div className="w-[945px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.6)] rounded-xl bg-white flex flex-col items-center justify-center p-10 box-border gap-10 max-w-full mq450:pt-[26px] mq450:pb-[26px] mq450:box-border ">
        <h1 className="m-0 relative text-inherit leading-[55px] font-medium font-[inherit] text-center inline-block max-w-full mq450:text-5xl mq450:leading-[33px] mq800:text-13xl mq800:leading-[44px]">
          Group of companies
        </h1>
        <div className="w-[722px] flex flex-row flex-wrap items-start justify-center gap-4 max-w-full text-sm font-helvetica-neue-lt">
          <div className="w-[99px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white flex flex-row items-center justify-start py-2 px-4 box-border whitespace-nowrap">
            <div className="flex-1 relative leading-[24px]">Baba Agro</div>
          </div>
          <Button
            className="h-10 flex-1 min-w-[103px]"
            startIcon={
              <img
                width="20px"
                height="20px"
                src="/subdirectory-arrow-right.svg"
              />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#efeffa",
              fontSize: "14",
              background: "#231f20",
              borderRadius: "8px",
              "&:hover": { background: "#231f20" },
              height: 40,
            }}
          >
            Prime polypack
          </Button>
          <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white flex flex-row items-center justify-start py-2 px-4 box-border min-w-[97px] whitespace-nowrap">
            <div className="flex-1 relative leading-[24px]">
              Prime party palace
            </div>
          </div>
          <div className="w-[126px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white flex flex-row items-center justify-start py-2 px-4 box-border whitespace-nowrap">
            <div className="flex-1 relative leading-[24px]">Prime complex</div>
          </div>
          <div className="w-[125px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white flex flex-row items-center justify-start py-2 px-4 box-border whitespace-nowrap">
            <div className="flex-1 relative leading-[24px]">Bridya Ashram</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-between [row-gap:20px] max-w-full gap-0 text-13xl mq1150:justify-center">
          <Button
            className="h-[194px] w-[432.5px] max-w-full"
            disableElevation
            variant="text"
            sx={{
              textTransform: "none",
              color: "#231f20",
              fontSize: "20",
              borderRadius: "0px 0px 0px 0px",
              width: 432.5,
              height: 194,
            }}
          >
            Prime Polypack
          </Button>
          <div className="w-[432.5px] rounded-xl bg-ghostwhite-100 border-lavender-100 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] pl-6 pr-5 gap-6 max-w-full">
            <h1 className="m-0 w-[369px] relative text-inherit font-medium font-[inherit] inline-block max-w-full mq450:text-lgi mq800:text-7xl">
              Prime Polypack Pvt. Ltd.
            </h1>
            <div className="flex flex-col items-start justify-center gap-3 text-base">
              <div className="flex flex-row items-center justify-start gap-2.5">
                <img
                  className="h-5 w-5 relative min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/location-on1.svg"
                />
                <div className="relative inline-block min-w-[90px]">
                  Jitpur, Nepal
                </div>
              </div>
              <div className="flex flex-row items-start justify-center gap-1.5">
                <img
                  className="h-5 w-5 relative min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/alternate-email1.svg"
                />
                <div className="relative whitespace-nowrap">
                  mail@primegroup.com
                </div>
              </div>
              <div className="flex flex-row items-start justify-center gap-2.5">
                <img
                  className="h-5 w-5 relative min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/call.svg"
                />
                <div className="relative inline-block min-w-[127px] whitespace-nowrap">
                  +977-53-520226
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupOfCompaniesFrame;
