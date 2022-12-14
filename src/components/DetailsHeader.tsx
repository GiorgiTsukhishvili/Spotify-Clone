import React from "react";
import { Link } from "react-router-dom";
import { TrackInterface } from "../pages/interfaces/trackInterface";

const DetailsHeader = ({
  artistId,
  songData,
  artistData,
}: {
  artistId: string;
  songData?: TrackInterface;
  artistData?: any;
}) => {
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"></div>
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId.length > 0
              ? artistData?.artists[artistId].attributes?.artwork?.url
              : songData && songData.images.coverart
          }
          alt="Art"
          className="sm:w-48 w-28 sm:h-48 h-28 roudned-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId.length > 0
              ? artistData?.artists[artistId].attributes.name
              : songData?.title}
          </p>
          {artistId === "" && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId.length > 0
              ? artistData?.artists[artistId].attributes.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24"></div>
    </div>
  );
};

export default DetailsHeader;
