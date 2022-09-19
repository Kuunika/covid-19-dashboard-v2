import { FillLayer, Layer, Popup, Source } from "react-map-gl";
import { useEffect, useState } from "react";
import { isPointInCoordinates } from "../../../helpers/geoCalculations";
import { Point } from "../../../interfaces";
import { Paper, Typography } from "@mui/material";
interface IProps {
  district: any;
  lngLtd: Point;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function MapLayer({ district, lngLtd }: IProps) {
  const [show, setShow] = useState(false);

  const polygon = district.geometry.coordinates[0].map((distr: any) => ({
    latitude: distr[1],
    longitude: distr[0],
  }));

  useEffect(() => {
    if (isPointInCoordinates(lngLtd, polygon)) {
      return setShow(true);
    }

    return setShow(false);
  }, [lngLtd]);

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
    <div>
      <Source
        id={district.id}
        type="geojson"
        //@ts-ignore
        data={featureCollection}
      >
        <Layer {...dataLayer} />
        {show && (
          <Popup
            longitude={district.geometry.coordinates[0][0][0]}
            latitude={district.geometry.coordinates[0][0][1]}
            style={{ width: 300, height: 3000 }}
          >
            <Typography variant="h5">
              {district.properties.districtName}
            </Typography>
          </Popup>
        )}
      </Source>
    </div>
  );
}
