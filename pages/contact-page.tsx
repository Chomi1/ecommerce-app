import type { NextPage } from "next";
import HeaderComponent from "../components/header-component";
import GroupOfCompaniesFrame from "../components/group-of-companies-frame";
import ContactComponent from "../components/contact-component";
import RecentPostsParent from "../components/recent-posts-parent";
import FooterComponent from "../components/footer-component";

const ContactPage: NextPage = () => {
  return (
    <div className="w-full relative bg-floralwhite overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeaderComponent
        group2="/group-22@2x.png"
        headerComponentAlignSelf="stretch"
        headerComponentWidth="unset"
      />
      <section className="self-stretch [background:linear-gradient(90deg,_rgba(85,_83,_251,_0.6),_rgba(254,_69,_65,_0.6)_30%,_rgba(255,_207,_3,_0.6)_70%,_rgba(85,_83,_251,_0.6)),_#5553fb] flex flex-row items-start justify-between py-24 px-[150px] box-border max-w-full gap-5 text-left text-45xl text-white font-aeonik mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[75px] mq800:pr-[75px] mq800:box-border mq1350:flex-wrap mq1350:justify-center">
        <div className="w-[523px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[64px] font-medium font-[inherit] mq450:text-19xl mq450:leading-[38px] mq800:text-32xl mq800:leading-[51px]">
            Contact
          </h1>
        </div>
        <h3 className="m-0 h-[93px] w-[500px] relative text-5xl leading-[26.4px] font-normal font-helvetica-neue-lt inline-block shrink-0 max-w-full mq450:text-lgi">
          Our mission is to transform vehicle inspections forever. Get in touch
          to learn more about how we may assist you.
        </h3>
      </section>
      <GroupOfCompaniesFrame />
      <ContactComponent />
      <RecentPostsParent />
      <FooterComponent propPadding="150px 150px 96px" />
    </div>
  );
};

export default ContactPage;
