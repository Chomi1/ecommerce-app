import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type CompaniesDropdownComponentType = {
  className?: string;
  onClose?: () => void;
};

const CompaniesDropdownComponent: NextPage<CompaniesDropdownComponentType> = ({
  className = "",
  onClose,
}) => {
  const router = useRouter();

  const onBabaAgroContainerClick = useCallback(() => {
    router.push("/baba-agro-page");
  }, [router]);

  const onPrimePolyPackClick = useCallback(() => {
    router.push("/prime-polypack-page");
  }, [router]);

  const onPrimePartyPalaceClick = useCallback(() => {
    router.push("/prime-party-palace-page");
  }, [router]);

  const onPrimeComplexContainerClick = useCallback(() => {
    router.push("/prime-complex-page");
  }, [router]);

  return (
    <div
      className={`w-[179px] relative [backdrop-filter:blur(30px)] rounded-xl bg-gray-200 flex flex-col items-start justify-start p-1 box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto text-left text-base text-ghostwhite-400 font-helvetica-neue-lt ${className}`}
    >
      <div
        className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-4 gap-2 cursor-pointer"
        onClick={onBabaAgroContainerClick}
      >
        <img
          className="h-5 w-5 relative hidden"
          alt=""
          src="/subdirectory-arrow-right.svg"
        />
        <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[79px]">
          Baba Agro
        </a>
      </div>
      <div
        className="self-stretch rounded-lg bg-darkslategray flex flex-row items-start justify-start py-2 px-4 gap-2 whitespace-nowrap cursor-pointer text-ghostwhite-300"
        onClick={onPrimePolyPackClick}
      >
        <img
          className="h-5 w-5 relative hidden"
          alt=""
          src="/subdirectory-arrow-right.svg"
        />
        <a className="[text-decoration:none] w-[120px] relative leading-[24px] font-medium text-[inherit] inline-block">
          Prime poly pack
        </a>
      </div>
      <div
        className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-4 gap-2 cursor-pointer"
        onClick={onPrimePartyPalaceClick}
      >
        <img
          className="h-5 w-5 relative hidden"
          alt=""
          src="/subdirectory-arrow-right.svg"
        />
        <a className="[text-decoration:none] flex-1 relative leading-[24px] font-medium text-[inherit]">
          Prime party palace
        </a>
      </div>
      <div
        className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-4 gap-2 cursor-pointer"
        onClick={onPrimeComplexContainerClick}
      >
        <img
          className="h-5 w-5 relative hidden"
          alt=""
          src="/subdirectory-arrow-right.svg"
        />
        <a className="[text-decoration:none] w-[111px] relative leading-[24px] font-medium text-[inherit] inline-block">
          Prime complex
        </a>
      </div>
      <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-4 gap-2">
        <img
          className="h-5 w-5 relative hidden"
          alt=""
          src="/subdirectory-arrow-right.svg"
        />
        <a className="[text-decoration:none] w-[117px] relative leading-[24px] font-medium text-[inherit] inline-block">
          Bridhya ashram
        </a>
      </div>
    </div>
  );
};

export default CompaniesDropdownComponent;
