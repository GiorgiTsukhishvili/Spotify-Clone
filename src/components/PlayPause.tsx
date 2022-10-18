import React from "react";
import { SongInterface } from "./../pages/interfaces/songInterface";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

interface PlayPauseProps {
  isPlaying: boolean;
  activeSong: { title: string };
  song: SongInterface;
  handlePause: () => void;
  handlePlay: () => void;
}

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}: PlayPauseProps) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle onClick={handlePause} size={35} className="text-gray-300" />
  ) : (
    <FaPlayCircle onClick={handlePlay} size={35} className="text-gray-300" />
  );

export default PlayPause;
