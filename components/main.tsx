import type { NextPage } from "next";
import HeaderComponent from "./header-component";
import PageHeadingComponent from "./page-heading-component";

export type MainType = {
  className?: string;
  pageHeadingImage?: string;
};

const Main: NextPage<MainType> = ({ className = "", pageHeadingImage }) => {
  return (
    <div
      className={`self-stretch bg-white flex flex-col items-start justify-start relative gap-[146px] max-w-full text-left text-xl text-gray-200 font-helvetica-neue-lt  ${className}`}
    >
      <div className="self-stretch h-[794px] relative bg-white hidden z-[0]" />
      <HeaderComponent
        group2="/group-2@2x.png"
        headerComponentAlignSelf="stretch"
        headerComponentWidth="unset"
      />
      <img
        className="w-[694px] h-[658px] absolute !m-[0] right-[20px] bottom-[20px] rounded-3xl object-cover z-[2]"
        loading="lazy"
        alt=""
        src={pageHeadingImage}
      // src="/rectangle-2@2x.png"
      />
      <PageHeadingComponent />
    </div>
  );
};

export default Main;
