const getLocalStorage = (value: string): any => {
  const data: string | null = localStorage.getItem(value) || null;

  if (data) {
    return JSON.parse(data);
  }

  return null;
};

export { getLocalStorage };
