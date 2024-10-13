import type { NextPage } from "next";
import JobLinks from "./job-links";

export type OpenPositionsFrameType = {
  className?: string;
};

const OpenPositionsFrame: NextPage<OpenPositionsFrameType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-center justify-center p-[150px] box-border gap-[22px] max-w-full text-left text-29xl text-gray-200 font-aeonik lg:flex-wrap mq750:py-[97px] mq750:px-[75px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      data-scroll-to="openPositionsFrame"
    >
      <div className="flex-[0.8247] flex flex-col items-start justify-start py-0 pl-0 pr-[98px] box-border min-w-[363px] max-w-full lg:flex-1  mq750:pr-[49px] mq750:box-border mq750:min-w-full gap-6 mq450:pr-5 mq450:box-border">
        <div className="w-[367px] flex flex-col items-start justify-start  max-w-full gap-5">
          <h1 className="m-0 relative text-inherit leading-[55px] font-medium font-[inherit] mq1050:text-19xl mq1050:leading-[44px] mq450:text-10xl mq450:leading-[33px]">
            <p className="m-0">Beyond</p>
            <p className="m-0">Opportunities</p>
          </h1>
          <div className="self-stretch relative text-base">
            We are always looking for talent, if you think you are ready to go
            Beyond please get in touch
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-6 text-xl">
          <div className="relative font-medium mq450:text-base">
            Got other ideas?
          </div>
          <div className="self-stretch relative mq450:text-base">
            <p className="m-0">Send us your portfolio and CV to</p>
            <p className="m-0 [text-decoration:underline]">
              jobs@primarygroup.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[363px] max-w-full text-5xl lg:flex-1 mq750:min-w-full">
        <JobLinks howItWorks="Senior Salesforce developer" />
        <JobLinks
          howItWorks="Executive Secretary to Managing Director"
          propDisplay="inline-block"
          propMinHeight="unset"
        />
        <JobLinks
          howItWorks="Senior Salesforce developer"
          propDisplay="unset"
          propMinHeight="32px"
        />
      </div>
    </section>
  );
};

export default OpenPositionsFrame;
