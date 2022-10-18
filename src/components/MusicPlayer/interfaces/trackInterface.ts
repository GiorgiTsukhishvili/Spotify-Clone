export interface TrackProps {
  activeSong: {
    title: string;
    images: { coverart: string };
    subtitle: string;
    hub: { actions: { uri: string }[] };
  };
  isActive: boolean;
  isPlaying: boolean;
}
