import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import {
  setActiveSong,
  playPause,
  playerReducer,
} from "../redux/features/playerSlice";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(playerReducer);

  const { songId } = useParams();

  return (
    <div className="flex flex-col">
      {/* <DetailsHeader artistId={artistId} songData={songData} /> */}

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>

        <div className="mt-5"></div>
      </div>
    </div>
  );
};

export default SongDetails;
