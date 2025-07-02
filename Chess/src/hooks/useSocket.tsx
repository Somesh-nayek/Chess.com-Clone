import { useEffect, useState } from "react";

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_WSS_SERVER;
    const ws = new WebSocket(apiUrl);
    ws.onopen = () => setSocket(ws);
    ws.onclose = () => setSocket(null);
    return () => {
      ws.close();
      setSocket(null);
    };
  }, []);
  return socket;
};
