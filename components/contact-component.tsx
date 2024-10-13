import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Examples from "./examples";

export type ContactComponentType = {
  className?: string;
};

const ContactComponent: NextPage<ContactComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full text-left text-13xl text-gray-200 font-aeonik ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center py-24 px-[247px] box-border gap-[167px] bg-[url('/contact-us-frame@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full  mq450:py-10 mq450:px-5 mq450:box-border mq800:pl-[61px] mq800:pr-[61px] mq800:box-border mq1150:pt-[62px] mq1150:pb-[62px] mq1150:box-border mq1350:flex-wrap  mq1350:pl-[123px] mq1350:pr-[123px] mq1350:box-border">
        <div className="w-[363px] flex flex-col items-start justify-start pt-[150px] px-0 pb-0 box-border min-w-[363px] max-w-full mq800:pt-[97px] mq800:box-border mq1150:min-w-full mq1350:flex-1">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[7.1px]">
            <div className="w-[221.4px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
              <div className="h-[125.2px] flex-1 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-[73.3px] h-[38.8px]"
                  alt=""
                  src="/group-1.svg"
                />
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[71.1px] max-h-full w-[105.6px] z-[1]"
                  alt=""
                  src="/group-23.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-[191.7px] relative">
              <div className="absolute h-[calc(100%_-_0.3px)] top-[0px] bottom-[0.3px] left-[54.6px] w-[250.8px]">
                <img
                  className="absolute top-[1.3px] left-[0px] w-full h-full"
                  alt=""
                  src="/group-3.svg"
                />
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[32.3px] max-h-full w-[172.7px] z-[1]"
                  alt=""
                  src="/group-4.svg"
                />
              </div>
              <img
                className="absolute top-[190.5px] left-[0px] w-[363px] h-[1.2px] z-[2]"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.6)] rounded-xl bg-white flex flex-col items-start justify-center p-10 box-border gap-10 min-w-[270px] max-w-full  mq800:pt-[26px] mq800:pb-[26px] mq800:box-border">
          <h1 className="m-0 self-stretch relative text-inherit leading-[36px] font-medium font-[inherit] inline-block min-h-[76px] mq450:text-lgi mq800:text-7xl">
            Contact us if you have any queries
          </h1>
          <form className="m-0 self-stretch flex flex-col items-start justify-center gap-6">
            <Examples name1="Name*" textPlaceholder="Enter Full Name" />
            <Examples name1="Email*" textPlaceholder="Enter Email Address" />
            <Examples name1="Phone*" textPlaceholder="Enter Phone Number" />
            <div className="self-stretch flex flex-col items-start justify-start gap-space-y-15">
              <div className="flex flex-row items-center justify-center">
                <div className="relative text-sm font-medium font-text-sm-medium text-zinc-950 text-left inline-block min-w-[69px]">
                  Message*
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-20 font-text-sm-medium text-sm text-gray-600"
                placeholder="Type your message here."
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#e4e4e7" },
                  "& .MuiInputBase-root": {
                    height: "80px",
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "rgba(35, 31, 32, 0.3)" },
                }}
              />
            </div>
            <Button
              className="w-full h-10 min-w-[320px] max-w-[740px] min-h-[40px] max-h-[40px] mq800:max-w-full"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#231f20",
                borderRadius: "6px",
                "&:hover": { background: "#231f20" },
                height: 40,
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
