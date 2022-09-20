import { FillLayer, Layer, Popup, Source } from "react-map-gl";
import { FC, useContext, useEffect, useState } from "react";
import { isPointInCoordinates } from "../../../helpers/geoCalculations";
import { DistrictAggregate, Point } from "../../../interfaces";
import { Paper, Typography } from "@mui/material";
import {
  DistrictAggregateContext,
  DistrictAggregateContextType,
} from "../../../contexts/aggregates";
import { Box, Stack } from "@mui/system";
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
  const [districtAggregate, setDistrictAggregate] = useState<DistrictAggregate>(
    {} as DistrictAggregate
  );
  const { districtsAggregates } = useContext(
    DistrictAggregateContext
  ) as DistrictAggregateContextType;

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

  useEffect(() => {
    const aggregate = districtsAggregates.find(
      (districtAggregate) =>
        districtAggregate.districtName.toLowerCase().replace(" ", "") ===
        district.properties.districtName.toLowerCase().replace(" ", "")
    );

    if (aggregate) setDistrictAggregate(aggregate);
  }, []);

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
            style={{ width: 300 }}
          >
            <DisplayDistrictDetails {...districtAggregate} />
          </Popup>
        )}
      </Source>
    </div>
  );
}

const DisplayDistrictDetails: FC<DistrictAggregate> = ({
  districtName,
  numberOfConfirmedCases,
  numberOfConfirmedDeaths,
  numberOfRecoveredPatients,
  numberOfLostToFollowUp,
  numberOfActiveCases,
}) => {
  return (
    <>
      <Typography variant="h4">{districtName}</Typography>
      <Stack>
        <DetailsContent
          keyValue="total confirmed cases"
          value={numberOfConfirmedCases}
        />
        <DetailsContent
          keyValue="total confirmed deaths"
          value={numberOfConfirmedDeaths}
        />
        <DetailsContent
          keyValue="total recovered patients"
          value={numberOfRecoveredPatients}
        />
        <DetailsContent
          keyValue="lost during follow-up"
          value={numberOfLostToFollowUp}
        />
        <DetailsContent
          keyValue="total active patients"
          value={numberOfActiveCases}
        />
      </Stack>
    </>
  );
};

const DetailsContent: FC<{ value: number; keyValue: string }> = ({
  value,
  keyValue,
}) => {
  return (
    <Typography variant="subtitle2" sx={{ textTransform: "capitalize" }}>
      {keyValue}: {value}
    </Typography>
  );
};
