import type { NextPage } from "next";
import VerticalsCard from "./verticals-card";

export type BusinessVerticalsType = {
  className?: string;
};

const BusinessVerticals: NextPage<BusinessVerticalsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(#f4f3eb,_#f4f3eb),_#e6e6ee] flex flex-col items-center justify-start py-[150px] px-5 box-border gap-[72px] max-w-full text-left text-29xl text-gray-200 font-aeonik mq450:pt-[63px] mq450:pb-[63px] mq450:box-border  mq1125:pt-[97px] mq1125:pb-[97px] mq1125:box-border  ${className}`}
    >
      <div className="w-[1440px] hidden flex-row items-start justify-between py-0 px-[150px] box-border max-w-full gap-5 mq1300:flex-wrap">
        <div className="h-[116px] w-[295px] relative inline-block shrink-0 min-w-[295px] mq450:text-10xl mq800:text-19xl mq1300:flex-1">
          Our business verticals
        </div>
        <div className="w-[560px] relative text-5xl inline-block shrink-0 max-w-full mq450:text-lgi">
          Discover the potential in pioneering packaging solutions
        </div>
      </div>
      <div className="w-[1140px] flex flex-col items-center justify-start gap-6 max-w-full text-xl text-black font-helvetica-neue-lt">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-5">
          <div className="flex-1 rounded-2xl border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] pl-8 pr-5 gap-5 min-w-[226px] max-w-[270px]">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/category.svg"
            />
            <b className="w-[101px] relative inline-block mq450:text-base">
              Baba Agro
            </b>
            <div className="w-[206px] relative text-base leading-[17.6px] text-gray-800 inline-block min-h-[40px]">
              Delighting taste buds with Bhuja and Chiura
            </div>
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/arrow-forward.svg"
            />
          </div>
          <div className="flex-1 rounded-2xl border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] pl-8 pr-5 gap-5 min-w-[226px] max-w-[270px]">
            <img className="w-8 h-8 relative" alt="" src="/category.svg" />
            <b className="w-[150px] relative inline-block mq450:text-base">
              Prime Polypack
            </b>
            <div className="w-[206px] relative text-base leading-[17.6px] text-gray-800 inline-block min-h-[40px]">
              <p className="m-0">{`Your trusted source `}</p>
              <p className="m-0">{`for plastic cups & papers`}</p>
            </div>
            <img className="w-8 h-8 relative" alt="" src="/arrow-forward.svg" />
          </div>
          <div className="flex-1 rounded-2xl border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] pl-8 pr-5 gap-5 min-w-[226px] max-w-[270px]">
            <img className="w-8 h-8 relative" alt="" src="/category.svg" />
            <b className="w-[180px] relative inline-block mq450:text-base">
              Prime party palace
            </b>
            <div className="w-[206px] h-10 relative text-base leading-[17.6px] text-gray-800 inline-block min-h-[40px]">
              your premier venue for magical events
            </div>
            <img className="w-8 h-8 relative" alt="" src="/arrow-forward.svg" />
          </div>
          <div className="flex-1 rounded-2xl border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] pl-8 pr-5 gap-5 min-w-[226px] max-w-[270px]">
            <img className="w-8 h-8 relative" alt="" src="/category.svg" />
            <b className="w-[147px] relative inline-block mq450:text-base">
              Prime Complex
            </b>
            <div className="w-[206px] h-10 relative text-base leading-[17.6px] text-gray-800 inline-block min-h-[40px]">
              Hub for your thriving business.
            </div>
            <img className="w-8 h-8 relative" alt="" src="/arrow-forward.svg" />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-5 max-w-full text-5xl text-ghostwhite-300 font-aeonik">
          <VerticalsCard />
          <div className="w-[270px] rounded-2xl border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] pl-8 pr-5 gap-5 text-xl text-black font-helvetica-neue-lt">
            <img className="w-8 h-8 relative" alt="" src="/category.svg" />
            <b className="w-[141px] relative inline-block mq450:text-base">
              Bridya Ashram
            </b>
            <div className="w-[206px] h-10 relative text-base leading-[17.6px] text-gray-800 inline-block min-h-[40px]">
              Providing haven of care for elderly
            </div>
            <img className="w-8 h-8 relative" alt="" src="/arrow-forward.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;
