import colorScale from "../fixtures/scale.json";
import { IColor, IScale } from "../interfaces";

export default function getColor(
  colors: IColor,
  value: number,
  scale: IScale[] = colorScale
): string {
  const scaleLength = scale.length;
  if (value >= scale[scaleLength - 1].lower) return colors[scaleLength - 1];

  for (let i = 0; i < scale.length; i++) {
    if (value >= scale[i].lower && value <= scale[i].upper) return colors[i];
  }
  return "#fafafa";
}
