export interface VolumeBarProps {
  value: number;
  min: string;
  max: string;
  onChange: (value: any) => void;
  setVolume: (value: number) => void;
}
