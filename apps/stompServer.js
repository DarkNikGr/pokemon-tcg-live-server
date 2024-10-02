import StompServer from "stomp-broker-js";
import StompRoute from "../routes/stomp.route.js";

export default (server) => {
    const stompServer = new StompServer({
        server: server,
        path: '/websocket/v1/external/stomp',
        heartbeat: [1000,1000]
    });

    console.log('StompServer init');

    stompServer.subscribe("/**", (msg, headers) => {
        const topic = headers.destination;
        if (topic!== "/app/hb") console.log("Stomp", topic, "-> {" + (typeof msg) + "}", msg);
    });

    StompRoute(stompServer);

    return stompServer
}