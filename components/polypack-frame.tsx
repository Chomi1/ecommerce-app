import type { NextPage } from "next";
import DescriptionComponent from "./description-component";
import OurProductsComponent from "./our-products-component";
import RecentPostsComponent from "./recent-posts-component";

export type PolypackFrameType = {
  className?: string;
};

const PolypackFrame: NextPage<PolypackFrameType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start max-w-full text-left text-lg text-gray-200 font-aeonik ${className}`}
    >
      <DescriptionComponent logo="/logo@2x.png" />
      <OurProductsComponent />
      <RecentPostsComponent
        propHeight="unset"
        propAlignSelf="stretch"
        propFlex="unset"
        propDisplay="grid"
        propGridTemplateColumns="repeat(3, minmax(202px, 1fr))"
        propFlex1="unset"
        propOverflowX="unset"
        rectangle3="/rectangle-3@2x.png"
        rectangle31="/rectangle-31@2x.png"
        rectangle32="/rectangle-3-1@2x.png"
        howItWorks="This blog posts talks about opening of party palace."
        howItWorks1="This blog posts talks about opening of party palace."
        howItWorks2="This blog posts talks about opening of prime complex."
      />
    </div>
  );
};

export default PolypackFrame;
