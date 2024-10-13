import type { NextPage } from "next";
import HeaderComponent from "../components/header-component";
import FooterColumns from "../components/footer-columns";
import OpenPositionsFrame from "../components/open-positions-frame";
import FooterComponent from "../components/footer-component";

const CareersPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border leading-[normal] tracking-[normal]">

      <img
        className="w-[1400px] relative rounded-3xl max-h-full object-cover hidden max-w-full"
        alt=""
        src="/rectangle-21@2x.png"
      />
      <HeaderComponent
        group2="/group-21@2x.png"
        headerComponentAlignSelf="stretch"
        headerComponentWidth="unset"
      />
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start py-0 pl-[18px] pr-5 box-border max-w-full">
          <FooterColumns />
        </section>
        <OpenPositionsFrame />
      </main>
      <FooterComponent propPadding="150px 150px 96px" />
    </div>
  );
};

export default CareersPage;
