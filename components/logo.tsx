import type { NextPage } from "next";
import { useRouter } from "next/router";

interface LogoProps {
  className?: string;
  group2?: string;
}

export type LogoType = {
  className?: string;
  group2?: string;
};

const Logo: NextPage<LogoProps> = ({ className, group2 }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div onClick={handleClick}>
      <div
        className={`w-[131.9px] flex flex-row items-start justify-start gap-[4.4px] ${className}`}
      >
        <img
          className="h-11 w-11 relative object-cover"
          loading="lazy"
          alt=""
          src={group2}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img
            className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;