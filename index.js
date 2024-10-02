import WebServer from "./apps/webServer.js";
import StompServer from "./apps/stompServer.js";

const webServer = WebServer();
StompServer(webServer);