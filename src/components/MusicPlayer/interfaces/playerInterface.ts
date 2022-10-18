export interface PlayerProps {
  activeSong: {
    title: string;
    images: {
      coverart: string;
    };
    subtitle: string;
    hub: { actions: { uri: string }[] };
  };
  isPlaying: boolean;
  repeat: boolean;
  volume: number;
  seekTime: number;
  currentIndex: number;
  onEnded: () => void;
  onTimeUpdate: (value: any) => void;
  onLoadedData: (value: any) => void;
}
