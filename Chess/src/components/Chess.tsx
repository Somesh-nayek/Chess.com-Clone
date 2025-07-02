import { Chess, Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../Game";

export const ChessBoard = ({
  board,
  socket,
  chess,
  setBoard,
  color,
}: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
  setBoard: (
    board: ({
      square: Square;
      type: PieceSymbol;
      color: Color;
    } | null)[][]
  ) => void;
  chess: Chess;
  color: string;
}) => {
  const [from, setFrom] = useState<Square | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<Square[]>([]);

  return (
    <div className="text-gray-700">
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              const squareRepresentation = (
                String.fromCharCode(97 + (j % 8)) + "" + (8 - i)
              ) as Square;

              const piece = board[i][j];
              const playerTurn = chess.turn(); // 'w' or 'b'
              const isHighlighted = possibleMoves.includes(squareRepresentation);

              return (
                <div
                  key={j}
                  onClick={() => {
                    if (!from) {
                      // Selecting the first square (from)
                      if (
                        piece &&
                        piece.color === color &&
                        playerTurn === color
                      ) {
                        setFrom(squareRepresentation);
                        const moves = chess.moves({
                          square: squareRepresentation,
                          verbose: true,
                        });
                        const targets = moves.map((move) => move.to);
                        setPossibleMoves(targets);
                        console.log("Selected from:", squareRepresentation);
                      }
                    } else {
                      // Selecting the target square (to)
                      if (playerTurn === color) {
                        socket.send(
                          JSON.stringify({
                            type: MOVE,
                            payload: {
                              from: from,
                              to: squareRepresentation,
                            },
                          })
                        );
                        try {
                          chess.move({
                            from: from,
                            to: squareRepresentation,
                          });
                          setBoard(chess.board());
                        } catch (e) {
                          console.error("Invalid move:", e);
                        }
                      }
                      setFrom(null);
                      setPossibleMoves([]);
                    }
                  }}
                  className={`w-16 h-16 flex items-center justify-center relative 
                    ${(i + j) % 2 === 0 ? "bg-green-300" : "bg-green-500"} 
                    ${isHighlighted ? "outline outline-yellow-400 outline-4" : ""}
                  `}
                  style={{ color: square?.color === "b" ? "black" : "white" }}
                >
                  {square ? (
                    <img
                      className="w-14 h-14"
                      src={`/${
                        square?.color === "b"
                          ? `b${square.type}`
                          : `w${square.type}`
                      }.png`}
                    />
                  ) : null}
                  {isHighlighted && !square && (
                    <div className="w-4 h-4 bg-yellow-300 rounded-full absolute" />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
