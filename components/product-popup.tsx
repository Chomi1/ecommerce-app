import type { NextPage } from "next";

export type ProductPopupType = {
  className?: string;
};

const ProductPopup: NextPage<ProductPopupType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[516px] flex flex-col items-start justify-center p-10 box-border gap-6 min-w-[516px] max-w-full text-left text-base text-gray-200 font-helvetica-neue-lt mq725:min-w-full mq1050:flex-1 ${className}`}
    >
      <h1 className="m-0 self-stretch h-[82px] relative text-13xl font-bold font-[inherit] inline-block mq450:text-lgi mq1000:text-7xl">
        Tervis 16-Ounce Clear Tumbler Set
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-6 font-aeonik">
        <div className="self-stretch relative">
          Prime Group has grown from strength to strength, diversifying into
          agriculture, packaging, entertainment, and social welfare. Our success
          is a testament to the dedication of our talented team and our
          commitment to creating value for all stakeholders.
        </div>
        <div className="flex flex-row items-start justify-start text-sm text-gray-800">
          <div className="flex flex-row items-start justify-start gap-[21px]">
            <div className="h-[125px] relative leading-[180%] inline-block">
              <p className="m-0">Material:</p>
              <p className="m-0">Capacity:</p>
              <p className="m-0">Dishwasher Safe:</p>
              <p className="m-0">Number of Pieces:</p>
              <p className="m-0">Dimensions:</p>
            </div>
            <div className="h-[125px] relative leading-[180%] text-gray-200 inline-block">
              <p className="m-0">Plastic</p>
              <p className="m-0">16 ounces</p>
              <p className="m-0">Yes</p>
              <p className="m-0">4</p>
              <p className="m-0">6 x 3.4 x 2.6 inches</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[207px] flex flex-row items-center justify-start text-ghostwhite-300">
        <div className="flex-1 rounded-lg bg-gray-200 flex flex-row items-center justify-center p-4 gap-4">
          <div className="rounded-md bg-gray-400 flex flex-row items-center justify-center p-2.5">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/whatsappfill.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-center">
            <div className="self-stretch relative leading-[20px] font-medium">
              Contact supplier
            </div>
            <div className="w-[92px] relative text-xs leading-[18px] font-medium inline-block">
              Request a quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
