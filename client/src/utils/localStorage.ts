

export const getKey = (key: string): string | null => {
    return localStorage.getItem(key);
  };
  
  export const setKey = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };
  