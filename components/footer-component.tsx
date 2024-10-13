import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";

export type FooterComponentType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FooterComponent: NextPage<FooterComponentType> = ({
  className = "",
  propPadding,
}) => {
  const footerComponentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const router = useRouter();

  const onHowItWorksClick = useCallback(() => {
    router.push("/baba-agro-page");
  }, [router]);

  const onHowItWorksClick1 = useCallback(() => {
    router.push("/prime-party-palace-page");
  }, [router]);

  return (
    <footer
      className={`self-stretch bg-black flex flex-col items-start justify-center pt-[103.5px] px-[150px] pb-[49.5px] box-border max-w-full text-center text-5xl text-white font-aeonik gap-6 mq450:pt-[67px] mq450:px-5 mq450:pb-8 mq450:box-border  mq800:pl-[75px] mq800:pr-[75px] mq800:box-border ${className}`}
      style={footerComponentStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[109px] box-border max-w-full gap-5 mq800:pr-[27px] mq800:box-border mq1300:flex-wrap mq1300:pr-[54px] mq1300:box-border">
        <div className="w-[738px] flex flex-row items-start justify-start gap-24 max-w-full mq1125:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-3">
            <img
              className="h-5 w-5 relative"
              loading="lazy"
              alt=""
              src="/subdirectory-arrow-right.svg"
            />
            <h3 className="m-0 h-[29px] relative text-inherit font-normal font-[inherit] inline-block min-w-[102px] mq450:text-lgi">
              About Us
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[330px] max-w-full text-left">
            <h3 className="m-0 self-stretch h-[116px] relative text-inherit font-normal font-[inherit] inline-block mq450:text-lgi">
              Prime Group is a growing enterprise founded by the late Ram Niwas
              Prasad Gupta, dedicated to delivering excellence and innovation
              across diverse sectors.
            </h3>
            <div className="flex flex-row items-center justify-start gap-[14.5px] max-w-full text-base text-gray-1000 mq800:flex-wrap">
              <div className="relative inline-block min-w-[127px] whitespace-nowrap">
                +977-53-520226
              </div>
              <div className="relative inline-block min-w-[90px]">
                Jitpur, Nepal
              </div>
              <div className="relative whitespace-nowrap">
                mail@primenepal.com
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-10 text-center text-sm">
              <div className="self-stretch h-px relative border-gray-900 border-t-[1px] border-solid box-border" />
              <div className="h-[17px] relative inline-block">
                © 2024 Prime Group Pvt. Ltd. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-8 text-base text-gray-1000">
          <div className="relative font-medium inline-block min-w-[87px]">
            Companies:
          </div>
          <div className="flex flex-col items-start justify-center gap-3.5 text-left text-white">
            <div
              className="relative text-center inline-block min-w-[77px] cursor-pointer"
              onClick={onHowItWorksClick}
            >
              Baba Agro
            </div>
            <div className="relative inline-block min-w-[113px]">
              Prime polypack
            </div>
            <div
              className="relative whitespace-nowrap cursor-pointer"
              onClick={onHowItWorksClick1}
            >
              Prime party palace
            </div>
            <div className="relative inline-block min-w-[109px]">
              Prime complex
            </div>
            <div className="relative inline-block min-w-[106px]">
              Bridya Ashram
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
