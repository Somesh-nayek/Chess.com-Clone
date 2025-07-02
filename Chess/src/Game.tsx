import { useEffect, useState } from "react";
import { ChessBoard } from "./components/Chess";
import { useSocket } from "./hooks/useSocket";
import { Chess } from "chess.js";
import { BlackButton } from "./components/uiComponents/Button";
import { useNavigate } from "react-router-dom";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

export const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const [waitings, setWaitings] = useState(false);
  const [color, setColor] = useState("w");
  const navigate = useNavigate();
  useEffect(() => {
    if(!socket){
        return;
    }
    socket.send(
              JSON.stringify({
                type: INIT_GAME,
              })
            );
            setWaitings(true);
    },[socket]);
  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case INIT_GAME: {
          setChess(new Chess());
          setBoard(chess.board());
          console.log("Game initialized");
          setColor(message.payload.color);
          setWaitings(false);
          break;
        }
        case MOVE: {
          // Update the board with the new move
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("Move made");
          break;
        }
        case GAME_OVER:
          // Game over, display a message
          console.log("Game over");
          break;
        default:
          console.error("Unknown message type:", message.type);
          break;
      }
    };
  }, [socket, chess]);
  if (!socket) return <div>Connecting...</div>;
  if (waitings) {
    return <div>Waiting for opponent...</div>;
  }
  return (
    <div className="bg-black text-white flex flex-col min-h-screen justify-center items-center">
      {color && <div
        className={`font-bold text-3xl px-6 py-3 rounded-xl shadow-md transition-all duration-300
    ${
      color === "w"
        ? "bg-white text-black border border-gray-300"
        : "bg-gray-800 text-white border border-gray-600"
    }`}
      >
        Your's is {color === "w" ? "White" : "Black"}
      </div>}

      <div className="flex justify-center items-center gap-[200px] px-[90px] py-[40px]">
        <ChessBoard
          color={color}
          board={board}
          setBoard={setBoard}
          chess={chess}
          socket={socket}
        />
        <BlackButton
          title="Quit"
          titleSize="text-4xl"
          styles="p-5"
          onClick={() => {
            socket.close();
            navigate("/wannaPlay");
          }}
        ></BlackButton>
      </div>
    </div>
  );
};
