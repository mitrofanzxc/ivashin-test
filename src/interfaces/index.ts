export interface IPATHS {
  main: string;
  note: string;
  any: string;
}

export interface IButton {
  icon?: string;
  textContent?: string;
  className?: string;
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
  currentData: INote[];
}

export interface ITextarea {
  note: INote | undefined;
  handleInitialTextareaValue: (value: string) => void;
  handleCurrentTextareaValue: (value: string) => void;
}

export interface IFilterState {
  data: string[] | null;
}

export interface IModalData {
  type: string;
  value: string;
}

export interface IModalState {
  isModalOpen: boolean;
  data: IModalData;
}
