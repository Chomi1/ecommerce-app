import type { NextPage } from "next";
import { Button } from "@mui/material";
import DescriptionComponent from "./description-component";
import Cards from "./cards";

export type AgroProductsComponentType = {
  className?: string;
};

const AgroProductsComponent: NextPage<AgroProductsComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border max-w-full text-left text-13xl text-gray-200 font-helvetica-neue-lt ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start max-w-[101%] shrink-0">
        <DescriptionComponent logo="/logo1@2x.png" />
        <div className="self-stretch flex flex-col items-center justify-start py-24 px-5 box-border gap-10 max-w-full  mq800:pt-[62px] mq800:pb-[62px] mq800:box-border">
          <h1 className="m-0 w-[204px] relative text-inherit font-bold font-[inherit] inline-block mq800:text-7xl mq450:text-lgi">
            Our Products
          </h1>
          <div className="w-[523px] [backdrop-filter:blur(30px)] rounded-31xl flex flex-row flex-wrap items-center justify-start p-1 box-border max-w-full [row-gap:20px] text-base">
            <div className="rounded-21xl flex flex-row items-center justify-start py-2 px-4 gap-2">
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/subdirectory-arrow-right.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[81px]">
                All product
              </div>
            </div>
            <div className="w-[133px] rounded-21xl flex flex-row items-center justify-center py-2 px-4 box-border gap-2">
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/subdirectory-arrow-right.svg"
              />
              <div className="flex-1 relative leading-[24px] font-medium">
                Highest seller
              </div>
            </div>
            <Button
              className="h-10 flex-1 min-w-[125px]"
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
                fontSize: "16",
                background: "#5553fb",
                borderRadius: "40px",
                "&:hover": { background: "#5553fb" },
                height: 40,
              }}
            >
              Sona (sano bhuja)
            </Button>
            <div className="rounded-21xl flex flex-row items-center justify-start py-2 px-4 gap-2">
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/subdirectory-arrow-right.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                Ratna
              </div>
            </div>
          </div>
          <div className="w-[1140px] flex flex-row flex-wrap items-center justify-center py-0 pl-0 pr-1 box-border gap-x-[19px] gap-y-[18.7px] max-w-full text-center text-xl">
            <Cards
              images="/rectangle-68@2x.png"
              rectangle5="/rectangle-5@2x.png"
              rectangle9="/rectangle-9@2x.png"
              rectangle8="/rectangle-8@2x.png"
              rectangle7="/rectangle-7@2x.png"
              bhujaPuffedRiceWeight="Bhuja (Puffed Rice) Weight: "
              lBS200Grams="LBS 200 Grams"
            />
            <Cards
              images="/rectangle-69@2x.png"
              rectangle5="/rectangle-5@2x.png"
              rectangle9="/rectangle-9@2x.png"
              rectangle8="/rectangle-8@2x.png"
              rectangle7="/rectangle-7-1@2x.png"
              bhujaPuffedRiceWeight="Bhuja Chip Mix on Packaging"
              lBS200Grams="of the World - 10 kg"
            />
            <Cards
              images="/rectangle-610@2x.png"
              rectangle5="/rectangle-5-2@2x.png"
              rectangle9="/rectangle-9-2@2x.png"
              rectangle8="/rectangle-8-2@2x.png"
              rectangle7="/rectangle-7-1@2x.png"
              bhujaPuffedRiceWeight="Nepali Bhuja"
              lBS200Grams="(Puffed Rice) - 5 kg"
            />
            <Cards
              images="/rectangle-611@2x.png"
              rectangle5="/rectangle-5-3@2x.png"
              rectangle9="/rectangle-7-3@2x.png"
              rectangle8="/rectangle-9-3@2x.png"
              rectangle7="/rectangle-8-3@2x.png"
              bhujaPuffedRiceWeight="Bhuja (Puffed Rice) Weight: "
              lBS200Grams="LBS 20 kg"
            />
            <div className="h-[270px] w-[270px] hidden flex-row flex-wrap items-center justify-center z-[7]">
              <div className="h-[198px] w-[270px] relative rounded-2xl bg-gainsboro" />
              <div className="h-[72px] flex-1 flex flex-row items-center justify-center py-6 px-0 box-border">
                <div className="self-stretch flex-1 relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
                  Thal/plate
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
            <div className="h-[334px] w-[270px] rounded-2xl border-lightgray-200 border-[1px] border-solid box-border hidden flex-col items-center justify-center py-2.5 px-[9px] gap-2.5 z-[5]">
              <div className="self-stretch flex flex-col items-center justify-center gap-3.5">
                <img
                  className="self-stretch h-[198px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgroProductsComponent;
