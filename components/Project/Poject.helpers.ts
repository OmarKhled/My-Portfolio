import { rgb } from "wcag-contrast";
import { RGB } from "color-convert/conversions";
import convert from "color-convert";
import { sRGBtoY, APCAcontrast } from "apca-w3";

import COLORS from "@constants/colors";

type hsl = `hsl(${number}, ${number}%, ${number}%)`;
const TEXT_COLORS: RGB[] = [
  [255, 255, 255],
  [19, 0, 56],
];
const GREY_COLORS: RGB[] = Object.keys(COLORS.mobester).map((key) => {
  return convert.hsl.rgb(
    COLORS.mobester[key as "50"].match(/\d+/g)?.map(Number) as [
      number,
      number,
      number
    ]
  );
});

const getAppropriateColor = (
  hslBg: string,
  mode: "primary" | "secondary" = "primary"
): hsl => {
  const toHslArray = (hslStr: string): [number, number, number] => {
    return hslStr.match(/\d+/g)?.map(Number) as [number, number, number];
  };
  const rgbBg = convert.hsl.rgb(toHslArray(hslBg)) as RGB;

  const COLORS_ARRAY = mode === "primary" ? TEXT_COLORS : GREY_COLORS;

  let chosenColor = [0, 0, 0];
  let contrastRatio: string | number = 0;
  COLORS_ARRAY.forEach((color) => {
    // const colorRatio = rgb(color, rgbBg);
    const colorRatio = APCAcontrast(sRGBtoY(color), sRGBtoY(rgbBg));
    // if (mode === "primary") console.log(colorRatio);

    if (Math.abs(colorRatio as number) > Math.abs(contrastRatio as number)) {
      contrastRatio = colorRatio;
      chosenColor = convert.rgb.hsl(color);
    }
  });

  return `hsl(${chosenColor[0]}, ${chosenColor[1]}%, ${chosenColor[2]}%)`;
};

export default getAppropriateColor;
