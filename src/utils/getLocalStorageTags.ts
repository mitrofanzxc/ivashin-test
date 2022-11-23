import { ITag } from 'interfaces';

const getLocalStorageTags = (): ITag[] | null => {
  const data: string | null = localStorage.getItem('tags') || null;

  if (data) {
    const result = JSON.parse(data) as ITag[];
    return result;
  }

  return null;
};

export { getLocalStorageTags };
