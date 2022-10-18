export interface ControlsProps {
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: (value: boolean) => void;
  shuffle: boolean;
  setShuffle: (value: boolean) => void;
  currentSongs: {
    track: {
      title: string;
      images: {
        coverart: string;
      };
      subtitle: string;
    };
    title: string;
    images: {
      coverart: string;
    };
    subtitle: string;
  }[];
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
}
