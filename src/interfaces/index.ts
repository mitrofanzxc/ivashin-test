export interface IPATHS {
  main: string;
  any: string;
}

export interface IButton {
  icon: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export interface ITag {
  id: string;
  value: string;
}

export interface IFilterState {
  isOpen: boolean;
  tags: ITag[] | null;
}
