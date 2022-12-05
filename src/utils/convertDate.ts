const convertDate = (time: string) => {
  return new Intl.DateTimeFormat('en-US').format(new Date(time));
};

export { convertDate };
