export const truncTxt = (txt: string | undefined, length: number = 20): string => {
    return txt && txt.length > length ? `${txt.substring(0, length)}...` : txt || '';
  };
  