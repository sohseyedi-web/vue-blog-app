export default function toTruncateText(str, len) {
  if (str.length > len) {
    return str.slice(0, len) + "...";
  } else {
    return str;
  }
}
