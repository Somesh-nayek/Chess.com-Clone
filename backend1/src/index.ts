import { WebSocketServer } from 'ws';
import { gameManager } from './gameManager';

const wss = new WebSocketServer({ port: 8080 });
const GameManager=new gameManager();
wss.on('connection', function connection(ws) {
    GameManager.addUser(ws);
    ws.on("disconnected",()=>GameManager.removeUser(ws))
});