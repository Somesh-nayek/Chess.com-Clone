
import { useEffect, useState } from "react";
import { Button } from "./components/Button"
import { ChessBoard } from "./components/Chess"
import { useSocket } from "./hooks/useSocket"
import { Chess } from "chess.js";

export const INIT_GAME="init_game";
export const MOVE="move";
export const GAME_OVER="game_over";

export const Game=()=>{
    const socket=useSocket();
    const [chess,setChess]=useState(new Chess());
    const [board,setBoard]=useState(chess.board());
    const [start,setStart]=useState(false);
    const [waitings,setWaitings]=useState(true);
    useEffect(()=>{
        if(!socket){
            return;
        }
        socket.onmessage=(event)=>{
            const message=JSON.parse(event.data);
            switch (message.type){
                case INIT_GAME:
                    {setChess(new Chess());
                    setBoard(chess.board());
                    console.log("Game initialized");
                    setColor(message.payload.color);
                    setWaitings(false);
                    break;}
                case MOVE:
                    {// Update the board with the new move
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    console.log("Move made");
                    break;}
                case GAME_OVER:
                    // Game over, display a message
                    console.log("Game over");
                    break;
                default:
                    console.error("Unknown message type:", message.type);
                    break;
            }
        }
    },[socket,chess]);    
    if(!socket)return<div>Connecting...</div>
    if(start && waitings){
        return(
            <div>Waiting for opponent...</div>
        )
    }
    return(
        <div className="bg-black text-white flex min-h-screen justify-center gap-[200px] p-[90px] items-center">
            <ChessBoard board={board} setBoard={setBoard} chess={chess} socket={socket}/>
            {!start && <Button onClick={()=>{
                socket.send(JSON.stringify({
                    type:INIT_GAME
                }))
                setStart(!start);
                }}>Play</Button>}
        </div>
    )
}