import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import FeatureIcons from "./feature-icons";

export type FooterColumnsType = {
  className?: string;
};

const FooterColumns: NextPage<FooterColumnsType> = ({ className = "" }) => {
  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='openPositionsFrame']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-6 max-w-full text-left text-45xl text-floralwhite font-aeonik ${className}`}
    >
      <div className="self-stretch h-[698px] relative max-w-full lg:h-auto lg:min-h-[698]">
        <Button
          className="absolute top-[264px] left-[130px] cursor-pointer z-[2]"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            borderColor: "#f8eee5",
            borderRadius: "8px",
            "&:hover": { borderColor: "#f8eee5" },
            width: 161,
            height: 52,
          }}
          onClick={onFrameButtonClick}
        >
          Open positions
        </Button>
        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start max-w-full h-full">
          <h1 className="!m-[0] w-[945px] absolute top-[84px] left-[130px] text-inherit leading-[64px] font-medium font-[inherit] inline-block z-[2] mq1050:text-32xl mq1050:leading-[51px] mq450:text-19xl mq450:leading-[38px]">
            <p className="m-0">Join us on our mission to </p>
            <p className="m-0">create a digital twin of the Earth</p>
          </h1>
          <div className="flex-1 rounded-3xl bg-floralwhite flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-6 max-w-full text-29xl text-gray-200">
            <div className="self-stretch h-[698px] relative rounded-3xl bg-floralwhite hidden" />
            <img
              className="self-stretch relative rounded-3xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/rectangle-5@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
              <div className="flex-1 rounded-3xl bg-white flex flex-row items-start justify-start py-[75px] px-[207px] box-border gap-[25px] max-w-full z-[1] lg:flex-wrap lg:pl-[103px] lg:pr-[103px] lg:box-border mq750:pl-[51px] mq750:pr-[51px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[250px] w-[1360px] relative rounded-3xl bg-white hidden max-w-full" />
                <h1 className="m-0 w-[361px] relative text-inherit leading-[50px] font-medium font-[inherit] inline-block shrink-0 min-w-[361px] max-w-full z-[1] lg:flex-1 mq1050:text-19xl mq1050:leading-[40px] mq1050:min-w-full mq450:text-10xl mq450:leading-[30px]">
                  Why Prime Group
                </h1>
                <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[364px] max-w-full text-xl mq1050:min-w-full">
                  <div className="self-stretch h-[72px] relative leading-[22.4px] inline-block z-[1] mq450:text-base">
                    As the Chairman of Prime Group and the wife of our late
                    founder, Ram Niwas Prasad Gupta, I am proud to carry forward
                    his legacy of excellence, innovation, and social
                    responsibility.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[1285px] rounded-3xl bg-black flex flex-col items-start justify-start pt-[907px] px-0 pb-[150px] box-border gap-[161px] max-w-full text-xl  lg:pt-[383px] lg:pb-[63px] lg:box-border mq750:h-auto  mq750:pt-[249px] mq750:pb-[41px] mq750:box-border ">
        <div className="mt-[-916px] self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[756px] flex flex-col items-start justify-start pt-[159px] px-0 pb-[150px] box-border relative gap-[0.2px] max-w-full mq750:pt-[103px] mq750:pb-[97px] mq750:box-border">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] max-h-full object-cover [mix-blend-mode:linear-dodge]"
              alt=""
              src="/logo1@2x.png"
            />
            <div className="w-[376px] absolute !m-[0] bottom-[-65px] left-[0px] tracking-[-0.11px] leading-[22.4px] inline-block min-h-[144px] z-[1] mq450:text-base">
              <p className="m-0">
                We believe best advice is rooted in real-world experience of the
                challenges our clients face.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                We’re comfortable saying sometimes that we don’t know. But, we
                will work it out.
              </p>
            </div>
            <div className="w-[371px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
              <div className="h-[219px] flex-1 flex flex-row items-start justify-start relative max-w-full z-[1]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute top-[0px] left-[193px] rounded-t-3xl rounded-br-3xl rounded-bl-lg w-[174px] h-[94px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/rectangle-41@2x.png"
                  />
                  <img
                    className="absolute h-[calc(100%_-_0.5px)] top-[0px] bottom-[0.5px] left-[0px] rounded-3xl max-h-full w-[180.8px] object-cover"
                    alt=""
                    src="/rectangle-81@2x.png"
                  />
                  <img
                    className="absolute top-[104px] left-[140px] rounded-3xl w-[227px] h-[115px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-67@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-45xl font-ageya mq750:flex-wrap">
              <div className="w-[270px] flex flex-col items-start justify-start pt-[61.8px] px-0 pb-0 box-border min-w-[270px] mq750:flex-1">
                <h1 className="m-0 self-stretch relative text-inherit leading-[70px] font-normal font-[inherit] z-[1] mq1050:text-32xl mq1050:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
                  Our Culture
                </h1>
              </div>
              <div className="h-[226.8px] w-[367px] flex flex-row items-start justify-start relative min-w-[367px] max-w-full z-[1] mq750:flex-1 mq750:min-w-full">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute top-[124.8px] left-[0px] rounded-tl-3xl rounded-tr-lg rounded-b-3xl w-[169px] h-[102px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/rectangle-22@2x.png"
                  />
                  <img
                    className="absolute h-[calc(100%_-_0.2px)] top-[0px] bottom-[0.2px] left-[180.8px] rounded-3xl max-h-full w-[186.2px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/rectangle-32@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] rounded-3xl w-[216.1px] h-[115px] object-cover z-[1]"
                    alt=""
                    src="/rectangle-5-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 gap-5 font-helvetica-neue-lt lg:flex-wrap lg:justify-center">
          <FeatureIcons
            whatshot="/whatshot.svg"
            howItWorks="Professional Growth"
            howItWorks1="Delighting taste buds with
Bhuja and Chiura"
          />
          <div className="w-[270px] rounded-2xl bg-gray-300 border-gray-100 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] pl-8 pr-5 gap-5">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/whatshot1.svg"
            />
            <b className="w-[195px] h-[52px] relative inline-block mq450:text-base">
              Collaborative Team Culture
            </b>
            <div className="w-[206px] relative text-base leading-[17.6px] text-gray-1000 inline-block min-h-[40px]">
              <p className="m-0">{`Your trusted source `}</p>
              <p className="m-0">{`for plastic cups & papers`}</p>
            </div>
          </div>
          <FeatureIcons
            whatshot="/whatshot2.svg"
            howItWorks="Mentorship and Guidance"
            propWidth="206px"
            howItWorks1="your premier venue for magical events"
            propHeight="40px"
          />
          <FeatureIcons
            whatshot="/whatshot3.svg"
            howItWorks="Recognition and Rewards"
            propWidth="206px"
            howItWorks1="Hub for your thriving business."
            propHeight="40px"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterColumns;
