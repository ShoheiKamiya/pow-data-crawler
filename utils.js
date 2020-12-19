// Dateオブジェクト => yyyy-mm-dd に変換
export const formatDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
