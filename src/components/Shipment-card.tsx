import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader } from "@material-ui/core";

const ShipmentCard: React.FC<{ shipment: string }> = props => {
  const { shipment } = props;
  return (
    <Card style={{ color: "gray" }}>
      <CardHeader title="Hello" />
      <CardContent>
        <div>{shipment}</div>
      </CardContent>
    </Card>
  );
};

export default ShipmentCard;
