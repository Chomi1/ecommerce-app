import type { NextPage } from "next";

import SentenceComponent from "../components/sentence-component";
import AgroProductsComponent from "../components/agro-products-component";

import FooterComponent from "../components/footer-component";
import Main from "../components/main";
import RecentPostsComponent from "../components/recent-posts-component";
const BabaAgroPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Main
        pageHeadingImage="/Rectangle 2.png" />
      <main className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <SentenceComponent />
          <AgroProductsComponent />
          <RecentPostsComponent
            propHeight="688px"
            propAlignSelf="stretch"
            propFlex="unset"
            propDisplay="flex"
            propGridTemplateColumns="unset"
            propFlex1="1"
            propOverflowX="auto"
            rectangle3="/rectangle-3@2x.png"
            rectangle31="/rectangle-31@2x.png"
            rectangle32="/rectangle-3-1@2x.png"
            howItWorks="This blog posts talks about opening of party palace."
            howItWorks1="This blog posts talks about opening of party palace."
            howItWorks2="This blog posts talks about opening of prime complex."
          />
          <FooterComponent propPadding="150px 150px 96px" />
        </section>

      </main>
    </div>

  );
};

export default BabaAgroPage;
