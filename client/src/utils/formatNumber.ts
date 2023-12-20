function formatNumber(val: number) {
  let result;
  if (val > 1000) {
    result = `${val / 1000}k`;
    return result;
  } else return val.toString();
}
export default formatNumber;
