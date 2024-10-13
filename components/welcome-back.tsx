import type { NextPage } from "next";
import ProductPopup from "./product-popup";

export type WelcomeBackType = {
  className?: string;
  onClose?: () => void;
};

const WelcomeBack: NextPage<WelcomeBackType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`w-[1140px] h-[604px] relative rounded-2xl bg-white leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq1050:h-auto mq1050:min-h-[604] ${className}`}
    >
      <section className="absolute top-[40px] left-[40px] w-[1060px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="w-[510px] flex flex-col items-center justify-start gap-7 min-w-[510px] max-w-full mq725:min-w-full mq1050:flex-1">
          <img
            className="self-stretch h-[405px] relative rounded-2xl max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-612@2x.png"
          />
          <div className="flex flex-row items-center justify-center py-0 px-5 box-border gap-3.5 max-w-full mq450:flex-wrap">
            <img
              className="h-16 w-16 relative rounded-md object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src="/rectangle-51@2x.png"
            />
            <img
              className="h-16 w-16 relative rounded-md object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src="/rectangle-9@2x.png"
            />
            <img
              className="h-16 w-16 relative rounded-md object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src="/rectangle-8@2x.png"
            />
            <img
              className="h-16 w-16 relative rounded-md object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src="/rectangle-10@2x.png"
            />
            <img
              className="h-16 w-16 relative rounded-md object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src="/rectangle-7@2x.png"
            />
          </div>
        </div>
        <ProductPopup />
      </section>
      <img
        className="absolute top-[30px] left-[1086px] w-6 h-6 z-[1]"
        loading="lazy"
        alt=""
        src="/close1.svg"
      />
    </div>
  );
};

export default WelcomeBack;
