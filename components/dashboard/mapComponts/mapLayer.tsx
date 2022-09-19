import { FillLayer, Layer, Source } from "react-map-gl";

interface IProps {
  district: any;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function MapLayer({ district }: IProps) {
  const dataLayer: FillLayer = {
    id: district.id,
    type: "fill",
    paint: {
      "fill-color": `${getRandomColor()}`,
    },
  };
  const featureCollection = {
    type: "FeatureCollection",
    features: [district],
  };
  return (
    <Source
      id={district.id}
      type="geojson"
      //@ts-ignore
      data={featureCollection}
    >
      <Layer {...dataLayer} />
    </Source>
  );
}
