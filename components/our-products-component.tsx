import type { NextPage } from "next";
import { Button } from "@mui/material";
import FrameComponent from "./frame-component";

export type OurProductsComponentType = {
  className?: string;
};

const OurProductsComponent: NextPage<OurProductsComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-white flex flex-col items-center justify-start py-24 px-5 box-border gap-[36.5px] max-w-full text-left text-13xl text-gray-200 font-helvetica-neue-lt  mq800:pt-[62px] mq800:pb-[62px] mq800:box-border ${className}`}
    >
      <h1 className="m-0 relative text-inherit font-bold font-[inherit] mq450:text-lgi mq800:text-7xl">
        Our Products
      </h1>
      <div className="w-[998px] [backdrop-filter:blur(30px)] rounded-31xl flex flex-row flex-wrap items-center justify-start p-1 box-border gap-2 max-w-full text-sm">
        <div className="rounded-21xl flex flex-row items-center justify-start py-2 px-4 gap-2">
          <img
            className="h-5 w-5 relative hidden"
            alt=""
            src="/subdirectory-arrow-right.svg"
          />
          <div className="relative leading-[24px] font-medium inline-block min-w-[71px]">
            All product
          </div>
        </div>
        <div className="flex-1 rounded-21xl bg-tomato-200 flex flex-row items-center justify-center py-2 px-4 box-border gap-2 min-w-[101px] whitespace-nowrap text-tomato-100">
          <img
            className="h-5 w-5 relative hidden"
            alt=""
            src="/subdirectory-arrow-right.svg"
          />
          <div className="flex-1 relative leading-[24px] font-medium">
            Highest Best Seller
          </div>
        </div>
        <Button
          className="h-10 w-28"
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
            color: "#fff",
            fontSize: "14",
            background: "#5553fb",
            borderRadius: "40px",
            "&:hover": { background: "#5553fb" },
            width: 112,
            height: 40,
          }}
        >
          Glasses
        </Button>
        <div className="rounded-21xl flex flex-row items-center justify-start py-2 px-4 gap-2">
          <img
            className="h-5 w-5 relative hidden"
            alt=""
            src="/subdirectory-arrow-right.svg"
          />
          <div className="relative leading-[24px] font-medium inline-block min-w-[68px]">
            Bati series
          </div>
        </div>
        <div className="w-[123px] rounded-21xl flex flex-row items-center justify-start py-2 px-4 box-border gap-2">
          <img
            className="h-5 w-5 relative hidden"
            alt=""
            src="/subdirectory-arrow-right.svg"
          />
          <div className="flex-1 relative leading-[24px] font-medium">
            Ice cup series
          </div>
        </div>
        <div className="rounded-21xl flex flex-row items-center justify-center py-2 px-4 gap-2">
          <img
            className="h-5 w-5 relative hidden"
            alt=""
            src="/subdirectory-arrow-right.svg"
          />
          <div className="relative leading-[24px] font-medium inline-block min-w-[65px]">
            Thal/plate
          </div>
        </div>
        <div className="w-[138px] rounded-21xl flex flex-row items-center justify-center py-2 px-4 box-border gap-2">
          <img
            className="h-5 w-5 relative hidden"
            alt=""
            src="/subdirectory-arrow-right.svg"
          />
          <div className="flex-1 relative leading-[24px] font-medium">
            Container Bottle
          </div>
        </div>
        <div className="rounded-21xl flex flex-row items-center justify-center py-2 px-4 gap-2">
          <img
            className="h-5 w-5 relative hidden"
            alt=""
            src="/subdirectory-arrow-right.svg"
          />
          <div className="relative leading-[24px] font-medium inline-block min-w-[73px]">
            Spoon/fork
          </div>
        </div>
      </div>
      <div className="w-[1140px] flex flex-row flex-wrap items-center justify-center py-0 pl-0 pr-1 box-border gap-x-[19px] gap-y-[18.7px] max-w-full text-center text-xl">
        <FrameComponent
          cardImages="/rectangle-6@2x.png"
          rectangle5="/rectangle-5@2x.png"
          rectangle9="/rectangle-9@2x.png"
          rectangle8="/rectangle-8@2x.png"
          rectangle7="/rectangle-7@2x.png"
          title="Plastic 300 ML Anticware Unbreakable Elite Glass"
        />
        <FrameComponent
          cardImages="/rectangle-61@2x.png"
          rectangle5="/rectangle-5@2x.png"
          rectangle9="/rectangle-9@2x.png"
          rectangle8="/rectangle-8@2x.png"
          rectangle7="/rectangle-7-1@2x.png"
          title="Tervis 16-Ounce Clear Tumbler Set"
          propDisplay="inline-block"
          propMinHeight="48px"
        />
        <FrameComponent
          cardImages="/rectangle-62@2x.png"
          rectangle5="/rectangle-5-2@2x.png"
          rectangle9="/rectangle-9-2@2x.png"
          rectangle8="/rectangle-8-2@2x.png"
          rectangle7="/rectangle-7-1@2x.png"
          title="Hard Plastic 1oz Shot Glasses, Assorted Neon"
          propDisplay="unset"
          propMinHeight="unset"
        />
        <FrameComponent
          cardImages="/rectangle-63@2x.png"
          rectangle5="/rectangle-5-3@2x.png"
          rectangle9="/rectangle-7-3@2x.png"
          rectangle8="/rectangle-9-3@2x.png"
          rectangle7="/rectangle-8-3@2x.png"
          title="Lawei 6-Pack Unbreakable Plastic Drinking Glasses"
          propDisplay="unset"
          propMinHeight="unset"
        />
        <div className="h-[284px] w-[270px] rounded-2xl border-lightgray-200 border-[1px] border-solid box-border hidden flex-col items-center justify-center py-2.5 px-[9px] gap-2.5">
          <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-3.5">
            <img
              className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-64@2x.png"
            />
            <div className="hidden flex-row items-center justify-center gap-2">
              <img
                className="h-9 w-9 relative rounded-md object-cover min-h-[36px]"
                alt=""
                src="/rectangle-5@2x.png"
              />
              <img
                className="h-9 w-9 relative rounded-md object-cover min-h-[36px]"
                alt=""
                src="/rectangle-9@2x.png"
              />
              <img
                className="h-9 w-9 relative rounded-md object-cover min-h-[36px]"
                alt=""
                src="/rectangle-8@2x.png"
              />
              <img
                className="h-9 w-9 relative rounded-md object-cover min-h-[36px]"
                alt=""
                src="/rectangle-7-1@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-4 px-0">
            <div className="flex-1 relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
              Highest seller
            </div>
          </div>
        </div>
        <div className="h-[284px] w-[270px] rounded-2xl border-lightgray-200 border-[1px] border-solid box-border hidden flex-col items-center justify-center py-2.5 px-[9px]">
          <div className="self-stretch flex flex-row items-center justify-center py-4 px-0">
            <div className="flex-1 relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
              View all Products
            </div>
          </div>
        </div>
        <div className="h-[270px] w-[270px] hidden flex-row flex-wrap items-center justify-center">
          <div className="h-[198px] w-[270px] relative rounded-2xl bg-gainsboro" />
          <div className="h-[72px] flex-1 flex flex-row items-center justify-center py-6 px-0 box-border">
            <div className="self-stretch flex-1 relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
              Thal/plate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductsComponent;
