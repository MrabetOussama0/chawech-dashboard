export const formatString = (value, length) => {
  const text = value || "";
  return text.length > length ? `${text.substring(0, length)}...` : text;
};
