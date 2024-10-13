import type { NextPage } from "next";

export type ViewGalleryType = {
  className?: string;
  onClose?: () => void;
};

const ViewGallery: NextPage<ViewGalleryType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`w-[1440px] relative bg-black flex flex-col items-end justify-start pt-10 px-0 pb-5 box-border gap-[223px] leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto  ${className}`}
    >
      <img
        className="w-[1400px] h-[648px] absolute !m-[0] top-[20px] left-[calc(50%_-_700px)] rounded-3xl object-cover"
        alt=""
        src="/content@2x.png"
      />
      <div className="flex flex-row items-start justify-end py-0 px-[34px]">
        <div className="h-10 w-10 rounded-31xl bg-gray-500 flex flex-row items-center justify-center p-[5px] box-border z-[1]">
          <img
            className="h-3 w-3 relative"
            loading="lazy"
            alt=""
            src="/close.svg"
          />
        </div>
      </div>
      <section className="self-stretch h-[527px] relative">
        <img
          className="absolute top-[385px] left-[0px] w-[1440px] h-[142px] object-cover"
          alt=""
          src="/frame-1410125654@2x.png"
        />
        <div className="absolute top-[0px] left-[1366px] rounded-31xl bg-gray-500 w-10 h-20 flex flex-row items-center justify-center p-[5px] box-border z-[1]">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src="/arrow-forward-ios.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[40px] rounded-31xl bg-gray-500 w-10 h-20 flex flex-row items-center justify-center p-[5px] box-border z-[1]">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src="/arrow-back-ios.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default ViewGallery;
