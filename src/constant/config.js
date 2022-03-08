const apiVersion = "/api/v1";

const apiURL = ``;
const websocket =
  (window.location.protocol === "https:" ? "wss://" : "ws://") +
  window.location.host +
  "/ws";

export const config = {
  status: "staging",
  staging: {
    apiURL,
    apiVersion,
    websocket,
  },
  production: {
    apiURL,
    apiVersion,
    websocket,
  },
};
