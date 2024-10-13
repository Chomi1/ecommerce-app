import type { NextPage } from "next";

export type VerticalsCardType = {
  className?: string;
};

const VerticalsCard: NextPage<VerticalsCardType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-2xl flex flex-row items-start justify-between py-[60px] px-16 box-border bg-[url('/verticals-card@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[552px] max-w-full gap-5 text-left text-5xl text-ghostwhite-300 font-aeonik mq800:pl-8 mq800:pr-8 mq800:box-border mq800:min-w-full mq1125:flex-wrap mq1125:justify-center ${className}`}
    >
      <h3 className="m-0 w-[191px] relative text-inherit font-normal font-[inherit] inline-block shrink-0 mq450:text-lgi">
        Our business verticals
      </h3>
      <div className="w-[449px] flex flex-row items-end justify-start pt-[58px] px-0 pb-0 box-border min-w-[449px] max-w-full text-13xl mq800:min-w-full mq1125:flex-1">
        <h1 className="m-0 h-[76px] flex-1 relative text-inherit leading-[36px] font-normal font-[inherit] inline-block max-w-full mq450:text-lgi mq800:text-7xl">
          Discover the potential in pioneering packaging solutions
        </h1>
      </div>
    </div>
  );
};

export default VerticalsCard;
