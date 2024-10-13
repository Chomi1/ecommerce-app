import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import ViewGallery from "./view-gallery";
import PortalPopup from "./portal-popup";

export type GalleryComponentType = {
  className?: string;
  imageRow?: string;
  galleryImageOne?: string;
  imageRow1?: string;
  galleryImageTwo?: string;
  imageRow2?: string;
  imageRow3?: string;
};

const GalleryComponent: NextPage<GalleryComponentType> = ({
  className = "",
  imageRow,
  galleryImageOne,
  imageRow1,
  galleryImageTwo,
  imageRow2,
  imageRow3,
}) => {
  const [isViewGalleryOpen, setViewGalleryOpen] = useState(false);

  const openViewGallery = useCallback(() => {
    setViewGalleryOpen(true);
  }, []);

  const closeViewGallery = useCallback(() => {
    setViewGalleryOpen(false);
  }, []);

  return (
    <>
      <section
        className={`self-stretch bg-linen-200 flex flex-row items-start justify-start p-[150px] box-border gap-[116px] max-w-full text-left text-17xl text-black font-helvetica-neue-lt lg:flex-wrap  mq450:pl-5 mq450:pr-5 mq450:box-border  mq750:py-[97px] mq750:px-[75px] mq750:box-border ${className}`}
      >
        <div className="h-[336.7px] flex-1 relative min-w-[428px] max-w-full mq1050:min-w-full">
          <img
            className="absolute top-[0px] left-[0px] rounded-t-3xl rounded-br-lg rounded-bl-3xl w-[121px] h-[135px] object-cover"
            loading="lazy"
            alt=""
            src={imageRow}
          />
          <img
            className="absolute top-[219.2px] left-[204px] rounded-t-lg rounded-b-3xl w-[168px] h-[117px] object-cover"
            alt=""
            src={galleryImageOne}
          />
          <img
            className="absolute top-[0.2px] left-[422px] rounded-t-3xl rounded-br-3xl rounded-bl-lg w-[236px] h-[135px] object-cover"
            alt=""
            src={imageRow1}
          />
          <img
            className="absolute top-[0.7px] left-[131.3px] rounded-3xl w-[280.8px] h-[208.2px] object-cover"
            alt=""
            src={galleryImageTwo}
          />
          <img
            className="absolute top-[146.7px] left-[382.1px] rounded-3xl w-[275.9px] h-[190px] object-cover z-[1]"
            alt=""
            src={imageRow2}
          />
          <img
            className="absolute top-[146.7px] left-[0px] rounded-3xl w-[193.5px] h-[190px] object-cover z-[1]"
            alt=""
            src={imageRow3}
          />
        </div>
        <div className="w-[366px] flex flex-col items-start justify-start pt-[100.3px] px-0 pb-0 box-border min-w-[366px] max-w-full lg:flex-1 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq450:text-3xl mq1050:text-10xl">
              Unforgettable Memories Captured
            </h1>
            <Button
              className="w-[161px] h-11 cursor-pointer"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#000",
                border: "#f8eee5 solid 1px",
                borderRadius: "8px",
                "&:hover": { background: "#000" },
                width: 161,
                height: 44,
              }}
              onClick={openViewGallery}
            >
              Discover our gallery
            </Button>
          </div>
        </div>
      </section>
      {isViewGalleryOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom center"
          onOutsideClick={closeViewGallery}
        >
          <ViewGallery onClose={closeViewGallery} />
        </PortalPopup>
      )}
    </>
  );
};

export default GalleryComponent;
