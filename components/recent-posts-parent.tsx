import type { NextPage } from "next";
import RecentPostsComponent from "./recent-posts-component";

export type RecentPostsParentType = {
  className?: string;
};

const RecentPostsParent: NextPage<RecentPostsParentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full ${className}`}
    >
      <RecentPostsComponent
        propHeight="unset"
        propAlignSelf="unset"
        propFlex="1"
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
    </section>
  );
};

export default RecentPostsParent;
