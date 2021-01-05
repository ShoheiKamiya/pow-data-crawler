// Dateオブジェクト => yyyy-mm-dd に変換
export const formatDate = (date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate(),
  ).padStart(2, '0')}`;
};

export const snowfallBlock = (num) => {
  const gray = '#bdc3c7';
  const black = '#111111';
  const yellow = '#f1c40f';
  const red = '#e74c3c';
  if (num === null) {
    return {
      type: 'text',
      text: '- cm',
      size: 'sm',
      color: black,
      align: 'end',
    };
  }
  if (num === 0) {
    return {
      type: 'text',
      text: '0 cm',
      size: 'sm',
      color: gray,
      align: 'end',
    };
  }
  if (num >= 15 && num < 30) {
    return {
      type: 'text',
      text: `+ ${num} cm`,
      size: 'sm',
      color: yellow,
      align: 'end',
      weight: 'bold',
    };
  }
  if (num >= 30) {
    return {
      type: 'text',
      text: `+ ${num} cm`,
      size: 'sm',
      color: red,
      align: 'end',
      weight: 'bold',
    };
  }
  return {
    type: 'text',
    text: '- cm',
    size: 'sm',
    color: black,
    align: 'end',
  };
};
