import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import RecentPosts from "./recent-posts";

export type RecentPostsComponentType = {
  className?: string;
  rectangle3?: string;
  rectangle31?: string;
  rectangle32?: string;
  howItWorks?: string;
  howItWorks1?: string;
  howItWorks2?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propGridTemplateColumns?: CSSProperties["gridTemplateColumns"];
  propFlex1?: CSSProperties["flex"];
  propOverflowX?: CSSProperties["overflowX"];
};

const RecentPostsComponent: NextPage<RecentPostsComponentType> = ({
  className = "",
  propHeight,
  propAlignSelf,
  propFlex,
  propDisplay,
  propGridTemplateColumns,
  propFlex1,
  propOverflowX,
  rectangle3,
  rectangle31,
  rectangle32,
  howItWorks,
  howItWorks1,
  howItWorks2,
}) => {
  const recentPostsComponentStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propHeight, propAlignSelf, propFlex]);

  const recentPostsStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      gridTemplateColumns: propGridTemplateColumns,
      flex: propFlex1,
      overflowX: propOverflowX,
    };
  }, [propDisplay, propGridTemplateColumns, propFlex1, propOverflowX]);

  return (
    <section
      className={`self-stretch bg-ghostwhite-200 flex flex-col items-center justify-center py-[150px] px-5 box-border gap-[52px] max-w-full text-center text-29xl text-gray-200 font-aeonik  mq800:pt-[97px] mq800:pb-[97px] mq800:box-border ${className}`}
      style={recentPostsComponentStyle}
    >
      <h1 className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-10xl mq800:text-19xl">
        Recent Posts
      </h1>
      <div
        className="w-[858px] grid flex-row items-center justify-center gap-6 max-w-full grid-cols-[repeat(3,_minmax(202px,_1fr))] text-left text-xl mq450:grid-cols-[minmax(202px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(202px,_351px))]"
        style={recentPostsStyle}
      >
        <RecentPosts rectangle3={rectangle3} howItWorks={howItWorks} />
        <RecentPosts
          propHeight="281px"
          propAlignSelf="unset"
          propWidth="unset"
          rectangle3={rectangle31}
          howItWorks={howItWorks1}
          propTextDecoration="none"
        />
        <RecentPosts
          propHeight="281px"
          propAlignSelf="unset"
          propWidth="unset"
          rectangle3={rectangle32}
          howItWorks={howItWorks2}
          propTextDecoration="none"
        />
      </div>
    </section>
  );
};

export default RecentPostsComponent;
