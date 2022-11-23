export interface ITag {
  id: string;
  value: string;
}

export interface IFilterState {
  isOpen: boolean;
  tags: ITag[];
}
