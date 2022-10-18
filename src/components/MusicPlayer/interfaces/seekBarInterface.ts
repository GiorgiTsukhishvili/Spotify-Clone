export interface SeekBarProps {
  value: number;
  min: string;
  max: number;
  setSeekTime: (value: number) => void;
  onInput: (value: any) => void;
  appTime: number;
}
