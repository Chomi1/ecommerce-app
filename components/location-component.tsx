import type { NextPage } from "next";

export type LocationComponentType = {
  className?: string;
  mapBackground?: string;
  image3?: string;
  image4?: string;
};

const LocationComponent: NextPage<LocationComponentType> = ({
  className = "",
  mapBackground,
  image3,
  image4,
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-24 px-5 box-border gap-5 max-w-full text-left text-xl text-black font-helvetica-neue-lt lg:flex-wrap mq750:pt-[62px] mq750:pb-[62px] mq750:box-border ${className}`}
    >
      <div className="w-[367px] rounded-2xl bg-white border-lightgray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[30px] pb-[52px] pl-[31px] pr-32 gap-8 min-w-[367px] max-w-full lg:flex-1  mq450:pt-5 mq450:pr-5 mq450:pb-[34px] mq450:box-border mq450:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13.5px]">
          <img
            className="w-8 h-8 relative"
            loading="lazy"
            alt=""
            src="/category.svg"
          />
          <b className="relative mq450:text-base">Prime party palace</b>
          <div className="self-stretch h-10 relative text-base leading-[17.6px] text-gray-800 inline-block min-h-[40px]">
            your premier venue for magical events
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2.5 text-sm text-gray-200 font-aeonik">
          <div className="flex flex-row items-center justify-start gap-[7px]">
            <img
              className="h-4 w-4 relative"
              loading="lazy"
              alt=""
              src="/location-on.svg"
            />
            <div className="relative">Jitpur-3, Bara Nepal 44400</div>
          </div>
          <div className="flex flex-row items-start justify-center gap-2.5">
            <img
              className="h-4 w-4 relative"
              loading="lazy"
              alt=""
              src="/alternate-email.svg"
            />
            <div className="relative whitespace-nowrap">
              hi@primepartypalace.com
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-2.5">
            <img className="h-4 w-4 relative" alt="" src="/call.svg" />
            <div className="relative inline-block min-w-[117px] whitespace-nowrap">
              +977-9855027426
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-base text-gray-800">
          <div className="self-stretch relative">Get in touch</div>
          <div className="flex flex-row items-start justify-start gap-4">
            <img
              className="h-5 w-5 relative object-cover min-h-[20px]"
              loading="lazy"
              alt=""
              src="/instagram-icon-1@2x.png"
            />
            <img
              className="h-5 w-[19.9px] relative overflow-hidden shrink-0 min-h-[20px]"
              loading="lazy"
              alt=""
              src="/digital-glyph-green-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[753px] relative min-w-[753px] max-w-full lg:flex-1 mq1050:min-w-full">
        <img
          className="absolute top-[0px] right-[0px] rounded-3xl w-full h-full object-cover"
          alt=""
          src={mapBackground}
        />
        <div className="absolute top-[27px] left-[688px] w-12 h-[349px] z-[1]">
          <img
            className="absolute top-[0px] left-[0px] w-12 h-[50px] object-cover"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <img
            className="absolute top-[179px] left-[0px] w-12 h-[170px] object-cover"
            loading="lazy"
            alt=""
            src={image3}
          />
        </div>
        <img
          className="absolute top-[27px] left-[22px] w-[171px] h-[53px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src={image4}
        />
      </div>
    </section>
  );
};

export default LocationComponent;
