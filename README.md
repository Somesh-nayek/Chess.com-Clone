# Real-Time Chess App

A web-based chess application that allows players to compete in real-time. This app leverages modern web technologies to deliver a seamless and interactive chess-playing experience.

## Features

- **Real-Time Gameplay**: Play chess with friends or random opponents in real-time using WebSocket technology.
- **Valid Move Detection**: Powered by `chess.js`, ensuring all moves adhere to chess rules.
- **Interactive UI**: Built with React and styled with Tailwind CSS for a modern and responsive interface.
- **Dynamic Routing**: Manage game states and navigation using `react-router-dom`.
- **TypeScript Support**: Both backend and frontend are developed with TypeScript for type safety and better maintainability.
- **Game Manager**: A `gameManager` class to manage user connections, game initialization, and move handling.
- **Chess Board UI**: A chessboard component to render the board and handle user moves.

## Installation and Setup

### Backend

1. Clone the repository and navigate to the backend directory:

    ```bash
    git clone https://github.com/Somesh-nayek/Real-time-Chess-.git
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Compile TypeScript (if applicable):

    ```bash
    tsc
    ```

4. Start the server:

    ```bash
    node dist/index.js
    ```

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## WebSocket Integration

The backend uses `ws` to manage real-time communication between players. Ensure your frontend connects to the WebSocket server when initiating a game.

### WebSocket Messages

- **`INIT_GAME`**: Sent when a new game starts, notifying each player of their color.
  - Payload: `{"color": "w"}` for white, `{"color": "b"}` for black.
- **`MOVE`**: Sent after each valid move to update the opponent’s game state.
  - Payload: `{"from": "e2", "to": "e4"}` (example move from e2 to e4).
- **`GAME_OVER`**: Sent when the game ends, announcing the winner.
  - Payload: `{"winner": "White"}` or `{"winner": "Black"}`.

## Game Manager

The `gameManager` class handles the management of active games and user connections. It performs the following:

- **Add User**: Adds a user to the list and assigns a game handler to the WebSocket connection.
- **Remove User**: Removes a user from the list when they disconnect.
- **Game Initialization**: If there is a pending user looking for an opponent, a new game is started. Otherwise, the user is added to the waiting list.
- **Move Handling**: When a player makes a move, it is processed by the `gameManager`, which validates the move and updates both players about the new board state.

## Chess Board Component

The `ChessBoard` component is responsible for rendering the chessboard UI and handling user moves. It uses `chess.js` for game logic and updates the board in real-time.

- **Board State**: Represents the chessboard with pieces and their positions.
- **User Interaction**: Players can click on squares to make moves.
- **Move Handling**: Sends moves to the backend via WebSocket, updates the board after each move.

## Technologies Used

### Backend

- **Node.js** and **TypeScript** for server-side logic.
- **`chess.js`** for game logic and move validation.
- **`ws`** for WebSocket communication.

### Frontend

- **React** for the user interface.
- **`react-router-dom`** for navigation.
- **Tailwind CSS** for styling.
- **Vite** for a fast development build process.

## Deployment

If deploying the application, configure the environment variables and ensure the backend and frontend communicate over the correct WebSocket URLs.

## Future Plans

- **AI Opponent**: Integrate a chess AI for single-player mode.
- **Leaderboards**: Add player rankings and match history.
- **Replays**: Allow players to view and analyze past games.

## Contribution

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.
