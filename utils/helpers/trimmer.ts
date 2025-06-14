export const shortenUrl = (url: string, maxLength = 50) => {
  return url.length > maxLength ? url.substring(0, maxLength) + "..." : url;
};
