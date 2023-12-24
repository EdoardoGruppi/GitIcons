export type Clipboard = {
  copy: (valueToCopy: string) => void;
  reset: () => void;
  error: Error | null;
  copied: boolean;
};

export interface CopyCardProps {
  clipboard: Clipboard;
  icon: string;
  desc: string;
  color: string;
}

export interface cardObject {
  icon: string;
  desc: string;
  keys: string;
  color: string;
}

export interface cardsListObject {
  [key: string]: cardObject;
}

export interface AppType {
  filter: string;
  setFilter: (val: string) => void;
}
