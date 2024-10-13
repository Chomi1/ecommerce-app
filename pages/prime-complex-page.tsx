import type { NextPage } from "next";
import HeaderComponent from "../components/header-component";
import SentenceComponent from "../components/sentence-component";
import EventServicesComponent from "../components/event-services-component";
import GalleryComponent from "../components/gallery-component";
import LocationComponent from "../components/location-component";
import RecentPostsComponent from "../components/recent-posts-component";
import FooterComponent from "../components/footer-component";

const PrimeComplexPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <HeaderComponent
        group2="/group-21@2x.png"
        headerComponentAlignSelf="stretch"
        headerComponentWidth="unset"
      />
      <img
        className="w-[1400px] relative rounded-3xl max-h-full object-cover hidden max-w-full"
        alt=""
        src="/rectangle-21@2x.png"
      />
      <section className="flex flex-row items-start justify-start relative max-w-full text-center text-45xl text-floralwhite font-aeonik">
        <h1 className="!m-[0] w-[1139px] absolute right-[150px] bottom-[253px] text-inherit leading-[64px] font-medium font-[inherit] inline-block z-[2] mq450:text-19xl mq450:leading-[38px] mq1050:text-32xl mq1050:leading-[51px]">
          Prime Complex: Where businesses flourish, connections thrive, and
          success stories unfold daily.
        </h1>
        <div className="w-[1440px] bg-white flex flex-col items-end justify-start pt-0 px-px pb-[25px] box-border gap-[25px] max-w-full">
          <div className="self-stretch h-[794px] relative bg-white hidden" />

          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[19px] box-border max-w-full">
            <img
              className="h-[648px] flex-1 relative rounded-3xl max-w-full overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/rectangle-42@2x.png"
            />
          </div>
        </div>
      </section>
      <SentenceComponent />
      <EventServicesComponent
        rectangle6="/rectangle-65@2x.png"
        rectangle61="/rectangle-66@2x.png"
        rectangle62="/rectangle-6-1@2x.png"
        rectangle63="/rectangle-7-11@2x.png"
        rectangle64="/rectangle-6-2@2x.png"
        title="Full Weddings Package"
        title1="Birthday Parties"
        title2="Conferences"
        title3="Team Building Events"
        title4="Other Events"
        title11="PrimePartyPalace provides full wedding packages with venue, catering, and decorations. Additionally, partial options and day-of coordination services are available."
        title12="Celebrate your loved one's special day in style with a party at PrimePartyPalace. We offer customizable packages to fit your budget and needs."
        title13="Host your next conference at PrimePartyPalace and impress your attendees with our modern facilities and exceptional service. We offer customizable packages to fit the needs of any conference."
        title14="Boost morale and strengthen your team with a team building event at PrimePartyPalace. Our event planners will work with you to create a customized experience that promotes teamwork and collaboration."
        title15="From baby showers to retirement parties, PrimePartyPalace is the perfect venue for any private event. Our event planners will work with you to create a customized experience that meets your needs and exceeds your expectations."
      />
      <GalleryComponent
        imageRow="/rectangle-2-1@2x.png"
        galleryImageOne="/rectangle-7-2@2x.png"
        imageRow1="/rectangle-6-3@2x.png"
        galleryImageTwo="/rectangle-32@2x.png"
        imageRow2="/rectangle-4@2x.png"
        imageRow3="/rectangle-51@2x.png"
      />
      <LocationComponent
        mapBackground="/rectangle-3-11@2x.png"
        image3="/image-3@2x.png"
        image4="/image-4@2x.png"
      />
      <RecentPostsComponent
        propHeight="unset"
        propAlignSelf="stretch"
        propFlex="unset"
        propDisplay="grid"
        propGridTemplateColumns="repeat(3, minmax(202px, 1fr))"
        propFlex1="unset"
        propOverflowX="unset"
        rectangle3="/rectangle-3-2@2x.png"
        rectangle31="/rectangle-4-1@2x.png"
        rectangle32="/rectangle-3-3@2x.png"
        howItWorks="This blog posts talks about opening of party palace."
        howItWorks1="This blog posts talks about opening of party palace."
        howItWorks2="This blog posts talks about opening of prime complex."
      />
      <FooterComponent propPadding="150px 150px 96px" />

    </div>
  );
};

export default PrimeComplexPage;
