import type { NextPage } from "next";

export type ExamplesType = {
  className?: string;
  name1?: string;
  textPlaceholder?: string;
};

const Examples: NextPage<ExamplesType> = ({
  className = "",
  name1,
  textPlaceholder,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-space-y-15 text-left text-sm text-zinc-950 font-text-sm-medium ${className}`}
    >
      <div className="flex flex-row items-center justify-center">
        <div className="relative font-medium inline-block min-w-[47px]">
          {name1}
        </div>
      </div>
      <div className="w-full rounded-rounded-md bg-white border-zinc-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2.5 px-[11px] min-w-[320px] max-w-[740px] min-h-[40px] max-h-[40px] gap-8 mq800:max-w-full">
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-[17px] flex-1 flex flex-row items-center justify-start font-text-sm-medium text-sm text-gray-600 min-w-[187px]"
          placeholder={textPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default Examples;
