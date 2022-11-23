import { INote } from 'interfaces';

const getLocalStorageNotes = (): INote[] | null => {
  const data: string | null = localStorage.getItem('notes') || null;

  if (data) {
    const result = JSON.parse(data) as INote[];
    return result;
  }

  return null;
};

export { getLocalStorageNotes };
