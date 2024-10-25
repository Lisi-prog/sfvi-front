import React, { useEffect, useState } from 'react';

interface Message {
    message: string;
}

const EventStream: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:5000/stream');

        eventSource.onmessage = (event: MessageEvent) => {
            const newMessage: Message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div>
            <h1>Mensajes del Servidor</h1>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventStream;
