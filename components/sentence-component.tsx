import type { NextPage } from "next";

export type SentenceComponentType = {
  className?: string;
};

const SentenceComponent: NextPage<SentenceComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-lavender-200 flex flex-row items-start justify-center py-24 px-5 box-border max-w-full text-center text-21xl text-gray-200 font-aeonik ${className}`}
    >
      <h1 className="m-0 w-[946px] relative text-inherit leading-[48px] font-medium font-[inherit] inline-block shrink-0 max-w-full mq450:text-5xl mq450:leading-[29px] mq800:text-13xl mq800:leading-[38px]">
        Our experts transform data into strategic information to serve your
        business strategy.
      </h1>
    </div>
  );
};

export default SentenceComponent;
