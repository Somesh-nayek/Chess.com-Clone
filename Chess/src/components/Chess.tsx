import { Chess, Color, PieceSymbol, Square } from "chess.js";
import {  useState } from "react";
import { MOVE } from "../Game";

export const ChessBoard=({board,socket,chess,setBoard}:{
    board:({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][],
    socket:WebSocket,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setBoard:any;
    chess:Chess,
    color:string
  })=>{
    const [from,setFrom]=useState<Square |null>(null);
    
    return(
        <div className="text-gray-700">
        {board.map((row, i) => {
          return <div key={i} className="flex">
            {row.map((square, j) => {
                const squareRepresentation=String.fromCharCode(97+(j%8))+""+(8-i) as Square
               return <div
                key={j}
                onClick={()=>{
                  // if(board[i][j]?.color==color){
                      if(!from){
                          setFrom(squareRepresentation);
                      }else{
                          // setTo(square?.square??null);
                          socket.send(JSON.stringify({
                              type:MOVE,
                              payload:{
                                      from:from,
                                      to:squareRepresentation
                              }
                          }))
                          setFrom(null);
                          chess.move({
                              from:from,
                              to:squareRepresentation
                          });
                          setBoard(chess.board());
                      }
                  // }
                }}
                className={`w-16 h-16 flex items-center justify-center ${
                  (i + j) % 2 === 0 ? 'bg-green-300' : 'bg-green-500'
                }`}
                style={{ color: square?.color === 'b' ? 'black' : 'white' }}
              >
                {square?<img className="w-14 h-14" src={`/${square?.color==='b'? `b${square.type}`:`w${square.type}`}.png`}/>:null}
              </div>
            })}
          </div>
})}
      </div>);
}