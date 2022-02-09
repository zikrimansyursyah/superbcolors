export default function hexToRgb(color) {
  let hex = color.substring(1);
  if (hex.length != 6) {
    throw "Only six-digit hex colors are allowed.";
  }

  var aRgbHex = hex.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return `rgb(${aRgb[0]},${aRgb[1]},${aRgb[2]})`;
}
