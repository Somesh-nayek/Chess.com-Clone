import { Chess } from "chess.js";
import { WebSocket } from "ws";
import { GAME_OVER, INIT_GAME, MOVE } from "./message";

export class Game{
    public player1:WebSocket;
    public player2:WebSocket;
    public board:Chess;
    public moves:{
        from:string,
        to:string
    }[];
    public startTime:Date;
    constructor(player1:WebSocket,player2:WebSocket){
        this.player1=player1;
        this.player2=player2;
        this.board=new Chess();
        this.moves=[];
        this.startTime=new Date();
        this.player1.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color:"w"
            }
        }))
        this.player2.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color:"b"
            }
        }))
    }

    makeMove(socket:WebSocket,move:{
        from:string,
        to:string
    }){
        try{
            this.board.move(move);
        }catch(e){
            console.log(e);
            return;
        }

        this.moves.push(move);
        if(this.board.isGameOver()){
            this.player1.send(JSON.stringify({
                type:GAME_OVER,
                payload:{
                    winner:this.board.turn()==="w"?"White":"Black"
                }
            }))
            this.player2.send(JSON.stringify({
                type:GAME_OVER,
                payload:{
                    winner:this.board.turn()==="w"?"White":"Black"
                }
            }))
            return;
        } 
        if(socket===this.player1){
            this.player2.send(JSON.stringify({
                type:MOVE,
                payload:move
            }))
            return;
        }else{
            this.player1.send(JSON.stringify({
                type:MOVE,
                payload:move
            }))
            return;
        }
    }
}