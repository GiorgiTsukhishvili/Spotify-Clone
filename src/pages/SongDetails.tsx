import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Loader, RelatedSongs, Error } from "../components";

import {
  setActiveSong,
  playPause,
  playerReducer,
} from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";
import { SongInterface } from "./interfaces/songInterface";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(playerReducer);

  const { songid } = useParams();

  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error,
  } = useGetSongDetailsQuery(songid!);

  const {
    data: relatedSongs,
    isFetching: isFetchingRelatedSongs,
    error: relatedError,
  } = useGetSongRelatedQuery(songid!);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song: SongInterface, i: number) => {
    dispatch(setActiveSong({ song, relatedSongs, i }));
    dispatch(playPause(true));
  };

  if (isFetchingRelatedSongs || isFetchingSongDetails) {
    return <Loader title="Searching song details" />;
  }

  if (error || relatedError) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>

        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line: string, i: number) => (
              <p className="text-gray-400 text-base my-1">{line} </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, no lyrics found
            </p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={relatedSongs}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
        artistId={songData.artistId}
      />
    </div>
  );
};

export default SongDetails;
