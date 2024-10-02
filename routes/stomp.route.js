export default (stompServer) => {
    stompServer.subscribe("/app/hb", (msg, headers) => {});
    stompServer.subscribe("/app/mm", (msg, headers) => {});
    stompServer.subscribe("/app/ping", (msg, headers) => {});
    stompServer.subscribe("/app/refresh", (msg, headers) => {});
    stompServer.subscribe("/app/session-start", (msg, headers) => {});
    stompServer.subscribe("/app/game/request", (msg, headers) => {});
}