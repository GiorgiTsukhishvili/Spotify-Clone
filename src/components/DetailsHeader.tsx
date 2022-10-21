import React from "react";
import { TrackInterface } from "../pages/interfaces/trackInterface";

const DetailsHeader = ({
  artistId,
  songData,
  artistData,
}: {
  artistId: string;
  songData: TrackInterface;
  artistData?: any;
}) => {
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transpatent to-black sm:h-48 h-28"></div>
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId.length > 0
              ? artistData?.artists[artistId].attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : songData && songData.images.coverart
          }
          alt="Art"
          className="sm:w-48 w-28 sm:h-48 h-28 roudned-full object-cover border-2 shadow-xl shadow-black"
        />
      </div>
    </div>
  );
};

export default DetailsHeader;
