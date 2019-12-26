import axios from "axios";

export async function getShipments() {
  let config = {
    proxy: {
      host: "127.0.0.1:8080",
      port: 8080
    }
  };

  await fetch("/function/callme", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  //   return await axios.get("http://127.0.0.1:8080/function/callme", config);
}
