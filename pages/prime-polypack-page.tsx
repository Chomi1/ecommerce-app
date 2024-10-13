import type { NextPage } from "next";
import Main from "../components/main";
import SentenceComponent from "../components/sentence-component";
import PolypackFrame from "../components/polypack-frame";
import FooterComponent from "../components/footer-component";

const PrimePolypackPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Main
        pageHeadingImage="/rectangle-2@2x.png" />
      <main className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <SentenceComponent />
          <PolypackFrame />
        </section>
        <FooterComponent propPadding="150px 150px 96px" />
      </main>
    </div>
  );
};

export default PrimePolypackPage;
