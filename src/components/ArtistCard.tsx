import React from "react";
import { SongInterface } from "../pages/interfaces/songInterface";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }: { track: SongInterface }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/artists/${track.artists[0].adamid}`)}
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blud-sm animate-sideup rounded-lg cursor-pointer"
    >
      <img
        src={track.images.coverart}
        alt="artist"
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
