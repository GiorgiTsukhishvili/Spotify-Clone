import React from "react";
import { SongInterface } from "../pages/interfaces/songInterface";
import SongBar from "./SongBar";

interface RelatedSongsProps {
  data: SongInterface[];
  isPlaying: boolean;
  activeSong: {
    title: string;
    images: {
      coverart: string;
    };
    subtitle: string;
    hub: {
      actions: {
        uri: string;
      }[];
    };
  };
  handlePauseClick?: () => void;
  handlePlayClick?: (song: SongInterface, i: number) => void;
  artistId: string;
}

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}: RelatedSongsProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

      <div className="mt-6 w-full flex flex-col">
        {data?.map((song: SongInterface, i: number) => (
          <SongBar
            key={`${song.key}-${artistId}` + Math.random()}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
