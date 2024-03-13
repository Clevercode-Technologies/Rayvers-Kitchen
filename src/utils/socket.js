import { io } from "socket.io-client";
const socket = io.connect("http://localhost:4000", {
    auth: { serverOffset: 0 },
    timeout: 300000,
    reconnectionAttempts: 50
});
export default socket;