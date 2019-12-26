import React, { useEffect } from "react";
import ShipmentCard from "./Shipment-card";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { getShipments } from "./services/Shipment-tracking.service";

const LATEST_SHIPMENTS = gql`
  {
    shipments {
      shipmentNo
      origin {
        address
      }
    }
  }
`;

const ShipmentList: React.FC = () => {
  const { data } = useQuery(LATEST_SHIPMENTS);
  const shipments: string[] = ["xyz", "abd"];

  console.log(data);
  return (
    <div>
      {shipments.map(sh => (
        <ShipmentCard key={sh} shipment={sh}></ShipmentCard>
      ))}
    </div>
  );
};

export default ShipmentList;
