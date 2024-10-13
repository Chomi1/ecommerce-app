import type { NextPage } from "next";
import HeaderComponent from "../components/header-component";
import SliderComponent from "../components/slider-component";
import SliderInnerFrame from "../components/slider-inner-frame";
import BusinessVerticals from "../components/business-verticals";
import RecentPostsComponent from "../components/recent-posts-component";
import FooterComponent from "../components/footer-component";

const Homepage: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <HeaderComponent group2="/group-2@2x.png" />
      <SliderComponent />
      <div className="self-stretch h-[850px] relative hidden max-w-full mq1125:h-auto mq1125:min-h-[850]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover"
          alt=""
          src="/rectangle-1@2x.png"
        />
        <div className="absolute top-[325px] left-[0px] w-full flex flex-col items-center justify-center pt-24 px-5 pb-12 box-border gap-24 max-w-full">
          <SliderInnerFrame
            propWidth="unset"
            propWidth1="138px"
            howItWorks="Polypack Ind."
            howItWorks1="Pioneering packaging solutions, crafting tomorrow's success together."
            propMargin="unset"
            propAlignSelf="unset"
            propWidth2="879px"
            propHeight="192px"
            propDisplay="inline-block"
          />
          <div className="flex flex-row items-center justify-center gap-3.5">
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-gainsboro mix-blend-color-burn" />
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-white" />
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-gainsboro mix-blend-color-burn" />
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-gainsboro mix-blend-color-burn" />
            <div className="h-2.5 w-2.5 relative rounded-[50%] bg-gainsboro mix-blend-color-burn" />
          </div>
        </div>
      </div>
      <BusinessVerticals />
      <section className="self-stretch bg-white flex flex-row items-start justify-start gap-[117px] max-w-full text-left text-29xl text-gray-200 font-aeonik  mq1300:flex-wrap">
        <img
          className="w-[613px] relative max-h-full object-cover max-w-full mq1300:flex-1"
          loading="lazy"
          alt=""
          src="/avatar-image@2x.png"
        />
        <div className="w-[560px] flex flex-col items-start justify-start pt-[155.5px] px-0 pb-0 box-border min-w-[560px] max-w-full mq800:pt-[101px] mq800:box-border mq800:min-w-full mq1300:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[52px] max-w-full ">
            <h1 className="m-0 relative text-inherit leading-[55px] font-medium font-[inherit] inline-block max-w-full mq450:text-10xl mq450:leading-[33px] mq800:text-19xl mq800:leading-[44px]">
              Chairman Message
            </h1>
            <div className="self-stretch h-[374px] relative text-lg leading-[20.8px] inline-block">
              <p className="m-0">
                As the Chairman of Prime Group and the wife of our late founder,
                Ram Niwas Prasad Gupta, I am proud to carry forward his legacy
                of excellence, innovation, and social responsibility.
              </p>
              <p className="m-0">{`
Prime Group has grown from strength to strength, diversifying into agriculture, packaging, entertainment, and social welfare. Our success is a testament to the dedication of our talented team and our
commitment to creating value for all stakeholders.`}</p>
              <p className="m-0">{`
We remain rooted in our core values of integrity, quality, and customer-centricity. Through our philanthropic initiative, Bridhya Ashram, we provide a safe and nurturing environment
for the elderly, ensuring they receive the care, respect, and dignity they deserve.`}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                I am excited about the opportunities that lie ahead and
                confident that Prime Group will continue to make a positive
                impact on the world. Thank you for your trust and support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <RecentPostsComponent
        rectangle3="/rectangle-3@2x.png"
        rectangle31="/rectangle-31@2x.png"
        rectangle32="/rectangle-3-1@2x.png"
        howItWorks="This blog posts talks about opening of party palace."
        howItWorks1="This blog posts talks about opening of party palace."
        howItWorks2="This blog posts talks about opening of prime complex."
      />
      <FooterComponent />
    </div>
  );
};

export default Homepage;
