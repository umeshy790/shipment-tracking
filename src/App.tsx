import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShipmentList from "./components/Shipment-list";

import { ApolloProvider } from "@apollo/react-hooks";
import Auth from "./components/Auth/Auth";
import { client } from "./utilis/Client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      {/* <ShipmentList></ShipmentList> */}
      <Auth></Auth>
    </ApolloProvider>
  );
};

export default App;
