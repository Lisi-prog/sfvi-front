import React, {useState, useContext}from "react";
import useWebSocket, { SendMessage } from "react-use-websocket";

const LastMessageContext = React.createContext<MessageEvent<any>|null>(null);
const SendMessageContext = React.createContext<SendMessage>(() => {});

export const useLastMessageContext = () => {
    return useContext(LastMessageContext);
};

export const useSendMessageContext = () => {
    return useContext(SendMessageContext);
}

export const WebSocketProvider = ({children}:{children: React.ReactNode}) => {
  const [socketUrl, setSocketUrl] = useState(`${import.meta.env.VITE_URL_WEBSOCKET}:${import.meta.env.VITE_PUERTO_WEBSOCKET}`);
  const { sendMessage, lastMessage, readyState, getWebSocket} = useWebSocket(socketUrl);

    return (
        <LastMessageContext.Provider value={lastMessage}>
          <SendMessageContext.Provider value={sendMessage}>
            {children}
          </SendMessageContext.Provider>
        </LastMessageContext.Provider>
    );
};














