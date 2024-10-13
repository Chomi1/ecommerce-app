import type { NextPage } from "next";
import { Button } from "@mui/material";
import GridRows from "./grid-rows";

export type EventServicesComponentType = {
  className?: string;
  rectangle6?: string;
  rectangle61?: string;
  rectangle62?: string;
  rectangle63?: string;
  rectangle64?: string;
  title?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  title11?: string;
  title12?: string;
  title13?: string;
  title14?: string;
  title15?: string;
};

const EventServicesComponent: NextPage<EventServicesComponentType> = ({
  className = "",
  rectangle6,
  rectangle61,
  rectangle62,
  rectangle63,
  rectangle64,
  title,
  title1,
  title2,
  title3,
  title4,
  title11,
  title12,
  title13,
  title14,
  title15,
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start py-24 px-5 box-border gap-[45px] max-w-full text-left text-13xl text-gray-200 font-helvetica-neue-lt  mq750:pt-10 mq750:pb-10 mq750:box-border mq1050:pt-[62px] mq1050:pb-[62px] mq1050:box-border ${className}`}
    >
      <h1 className="m-0 relative text-inherit font-bold font-[inherit] mq450:text-lgi mq1050:text-7xl">
        Our Products
      </h1>

      <div className="w-[1139px] flex flex-row flex-wrap items-start justify-start gap-x-5 gap-y-[17px] min-h-[745px] max-w-full text-xl text-white">

        <div className="h-[350px] w-[367px] rounded-2xl bg-darkkhaki flex flex-col items-start justify-start py-10 pl-10 pr-[45px] box-border max-w-full gap-4 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="self-stretch flex-1 flex flex-col items-start justify-between">
            <div className="self-stretch flex flex-col items-start justify-start gap-6">
              <div className="w-[220px] relative leading-[24px] font-medium inline-block mq450:text-base mq450:leading-[19px]">
                Our event service
              </div>
              <h1 className="m-0 self-stretch h-[62px] relative text-13xl leading-[37.6px] font-bold font-[inherit] inline-block mq450:text-lgi mq1050:text-7xl">
                Create Unforgettable Memories
              </h1>
            </div>
            <Button
              className="self-stretch h-11"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                borderColor: "#f8eee5",
                borderRadius: "8px",
                "&:hover": { borderColor: "#f8eee5" },
                height: 44,
              }}
            >
              Book a Consultation
            </Button>
          </div>
        </div>

        <GridRows rectangle6={rectangle6} title={title} title1={title11} />
        <GridRows
          propMinHeight="350px"
          rectangle6={rectangle61}
          propHeight="164.7px"
          title={title1}
          title1={title12}
          propHeight1="54px"
          propMinHeight1="54px"
        />
        <GridRows
          propMinHeight="375px"
          rectangle6={rectangle62}
          propHeight="164.7px"
          title={title2}
          title1={title13}
          propHeight1="72px"
          propMinHeight1="unset"
        />
        <GridRows
          propMinHeight="unset"
          rectangle6={rectangle63}
          propHeight="165.2px"
          title={title3}
          title1={title14}
          propHeight1="90px"
          propMinHeight1="unset"
        />
        <GridRows
          propMinHeight="unset"
          rectangle6={rectangle64}
          propHeight="164.7px"
          title={title4}
          title1={title15}
          propHeight1="90px"
          propMinHeight1="unset"
        />
      </div>
    </section>
  );
};

export default EventServicesComponent;
