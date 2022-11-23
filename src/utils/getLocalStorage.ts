import { ITag } from 'interfaces';

const getLocalStorageTags = (value: string): ITag[] | null => {
  const data: string | null = localStorage.getItem(value) || null;

  if (data) {
    const result = JSON.parse(data) as ITag[];
    return result;
  }

  return null;
};

export { getLocalStorageTags };
