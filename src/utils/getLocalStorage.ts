import { ITag } from 'interfaces';

const getLocalStorageTags = (value: string): ITag[] | null => {
  const data: string | null = localStorage.getItem(value) || null;

  if (data) {
    return JSON.parse(data);
  }

  return null;
};

export { getLocalStorageTags };
