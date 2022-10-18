export interface TrackProps {
  activeSong: { title: string; images: { coverart: string }; subtitle: string };
  isActive: boolean;
  isPlaying: boolean;
}
