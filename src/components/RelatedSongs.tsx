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
  handlePauseClick: () => void;
  handlePlayClick: (song: SongInterface, i: number) => void;
}

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}: RelatedSongsProps) => {
  return <div>RelatedSongs</div>;
};

export default RelatedSongs;
