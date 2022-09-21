import { isPointInPolygon } from "geolib";
import { Point } from "../interfaces";
export function isPointInCoordinates(
  point: Point,
  coordinates: Array<any>
): Boolean {
  return isPointInPolygon(point, coordinates);
}
