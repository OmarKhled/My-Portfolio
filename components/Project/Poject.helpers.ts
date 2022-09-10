import { rgb } from "wcag-contrast";
import convert from "color-convert";

type hsl = `hsl(${number}, ${number}%, ${number}%)`;
const TEXT_COLORS: { [text: string]: [number, number, number] } = {
  WHITE: [255, 255, 255],
  BLACK: [0, 0, 0],
};

const getTextColor = (hslBg: string): hsl => {
  const toHslArray = (hslStr: string): [number, number, number] => {
    return hslStr.match(/\d+/g)?.map(Number) as [number, number, number];
  };
  const rgbBg = convert.hsl.rgb(toHslArray(hslBg));
  const whiteTextRatio = rgb(TEXT_COLORS.WHITE, rgbBg);
  const blackTextRatio = rgb(TEXT_COLORS.BLACK, rgbBg);

  let hslColor;
  if (whiteTextRatio > blackTextRatio) {
    hslColor = convert.rgb.hsl(TEXT_COLORS.WHITE);
  } else {
    hslColor = convert.rgb.hsl(TEXT_COLORS.BLACK);
  }

  return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${hslColor[2]}%)`;
};

export default getTextColor;
