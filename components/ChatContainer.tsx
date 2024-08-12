
'use client';
import React, { useState, KeyboardEvent } from 'react';
interface ChatContainerProps {
  children: React.ReactNode;
  onSendMessage: (text: string) => void;
};

const ChatContainer: React.FC<ChatContainerProps> = ({ children, onSendMessage }) => {
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      handleSend();
    }
  };

  return (
    <div className="flex flex-col items-center p-11">
      <div className="w-[850px] h-[650px] bg-black/30 border border-gray-700 rounded-lg overflow-hidden flex flex-col">
        <div className="flex-grow p-4 bg-black/1 overflow-y-auto">
          {children}
        </div>
        <div className="bg-black/50 p-4 flex">
          <textarea
            placeholder="Type here..."
            className="flex-grow p-2 bg-black/40 border border-gray-600 rounded text-white resize-none h-12"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <button
            className="bg-black/60 hover:bg-black/20 text-white p-2 rounded ml-2 transition-transform transform hover:scale-105"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
