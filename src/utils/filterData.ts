import { INote } from 'interfaces';

const filterData = (arr: string[] | null, data: INote[]) => {
  const tempData: INote[] = [];

  for (let i = 0; i < data.length; i += 1) {
    const tags = Object.values(data[i].tags);

    for (let j = 0; j < tags.length; j += 1) {
      if (arr) {
        if (arr.indexOf(tags[j]) !== -1) {
          tempData.push(data[i]);
        }
      }
    }
  }

  // Because there are duplicates, only unique elements must be left.
  return tempData.reduce((accumulator: INote[], currentValue: INote) => {
    if (accumulator.every((item) => item.id !== currentValue.id)) {
      accumulator.push(currentValue);
    }

    return accumulator;
  }, []);
};

export { filterData };
