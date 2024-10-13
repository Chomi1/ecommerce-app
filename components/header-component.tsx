import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import CompaniesDropdownComponent from "./companies-dropdown-component";
import PortalPopup from "./portal-popup";
import Logo from "./logo";
import { useRouter } from "next/router";

export type HeaderComponentType = {
  className?: string;
  group2?: string;

  /** Style props */
  headerComponentAlignSelf?: CSSProperties["alignSelf"];
  headerComponentWidth?: CSSProperties["width"];
};

const HeaderComponent: NextPage<HeaderComponentType> = ({
  className = "",
  group2,
  headerComponentAlignSelf,
  headerComponentWidth,
}) => {
  const [isCompaniesDropdownComponentOpen, setCompaniesDropdownComponentOpen] =
    useState(false);
  const headerComponentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: headerComponentAlignSelf,
      width: headerComponentWidth,
    };
  }, [headerComponentAlignSelf, headerComponentWidth]);

  const router = useRouter();

  const openCompaniesDropdownComponent = useCallback(() => {
    setCompaniesDropdownComponentOpen(true);
  }, []);

  const closeCompaniesDropdownComponent = useCallback(() => {
    setCompaniesDropdownComponentOpen(false);
  }, []);

  const onCareersContainerClick = useCallback(() => {
    router.push("/careers-page");
  }, [router]);

  const onContactContainerClick = useCallback(() => {
    router.push("/contact-page");
  }, [router]);

  return (
    <>
      <header
        className={`self-stretch [backdrop-filter:blur(30px)] bg-white overflow-hidden flex flex-row items-start justify-center py-6 px-5 box-border gap-[407px] top-[0] z-[99] sticky max-w-full text-left text-base text-gray-200 font-helvetica-neue-lt  ${className}`}
        style={headerComponentStyle}
      >
        <div className="w-[197px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start">
            <Logo group2={group2} />
          </div>
        </div>
        <div className="w-[536px] flex flex-row items-center justify-end gap-[52px] max-w-full mq800:w-[154px] ">
          <nav className="m-0 flex-1 [backdrop-filter:blur(30px)] rounded-31xl bg-gray-200 flex flex-row items-center justify-center p-1 box-border max-w-full text-left text-base text-ghostwhite-300 font-helvetica-neue-lt mq800:hidden">
            <div className="w-[77px] rounded-21xl flex flex-row items-center justify-start py-2 px-4 box-border gap-2">
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/subdirectory-arrow-right.svg"
              />
              <a className="[text-decoration:none] flex-1 relative leading-[24px] font-medium text-[inherit]">
                About
              </a>
            </div>
            <div
              className="flex-1 rounded-21xl flex flex-row items-center justify-center py-2 px-4 gap-2 cursor-pointer"
              onClick={openCompaniesDropdownComponent}
            >
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/subdirectory-arrow-right.svg"
              />
              <a className="[text-decoration:none] flex-1 relative leading-[24px] font-medium text-[inherit]">
                Companies
              </a>
            </div>
            <div
              className="rounded-21xl flex flex-row items-center justify-center py-2 px-4 gap-2 cursor-pointer"
              onClick={onCareersContainerClick}
            >
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/subdirectory-arrow-right.svg"
              />
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[58px]">
                Careers
              </a>
            </div>
            <div
              className="rounded-21xl flex flex-row items-center justify-center py-2 px-4 gap-2 cursor-pointer"
              onClick={onContactContainerClick}
            >
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/subdirectory-arrow-right.svg"
              />
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[59px]">
                Contact
              </a>
            </div>
          </nav>
          <div className="flex flex-row items-center justify-end">
            <div className="rounded-21xl flex flex-row items-center justify-start py-3 px-3.5">
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[74px]">
                Facebook
              </a>
            </div>
            <div className="self-stretch rounded-21xl hidden flex-row items-center justify-start py-3 px-3.5">
              <div className="self-stretch relative leading-[24px] font-medium">
                LinkedIn
              </div>
            </div>
          </div>
        </div>
      </header>
      {isCompaniesDropdownComponentOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCompaniesDropdownComponent}
        >
          <CompaniesDropdownComponent
            onClose={closeCompaniesDropdownComponent}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default HeaderComponent;
