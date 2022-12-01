export interface IPATHS {
  main: string;
  note: string;
  any: string;
}

export interface IButton {
  icon: string;
  isInputOpen?: boolean;
  onClick?: () => void;
}

export interface ITag {
  id: string;
  value: string;
}

export interface ITagsState {
  isInputOpen: boolean;
  data: string[] | null;
  filterTagArray: string[] | null;
}

export interface INote {
  id: string;
  time: string;
  tags: string[];
  value: string;
}

export interface INotesState {
  data: INote[];
}

export interface ITextarea {
  note: INote | undefined;
}

export interface IFilterState {
  data: string[] | null;
}
