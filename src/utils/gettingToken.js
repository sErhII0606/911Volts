const gettingToken = (url) => {
  if (url.includes("#") & url.includes("&")) {
    return url.slice(url.indexOf("#") + 10, url.indexOf("&"));
  }
  return "";
};
export default gettingToken;
