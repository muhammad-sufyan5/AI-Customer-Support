"use client";
import { useState } from "react";
import Head from "next/head";
import ChatContainer from "@/components/ChatContainer";
import ChatMessage from "@/components/ChatMessage";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useUser } from "@/context/userContext";
import Link from "next/link";
import { ChatResponse, Message } from "@/types/page";

export default function Home() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey, How can I assist you today?", sender: "assistant" },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  async function sendMessage(message: string): Promise<string> {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data: ChatResponse = await response.json();
    return data.message;
  }

  const clearChat = () => {
    setMessages([
      { text: "Hey, How can I assist you today?", sender: "assistant" },
    ]);
  };

  const handleSendMessage = async (text: string) => {
    const newMessages = [...messages, { text, sender: "user" as "user" }];
    setMessages(newMessages);

    const aiResponse = await sendMessage(text);
    setMessages([...newMessages, { text: aiResponse, sender: "assistant" }]);
  };

  const { user, loading, logout } = useUser();

  const handleLogout = async () => {
    try {
      await logout();
      clearChat();
      toast.success("Logout Successfully!");
      router.push("/auth");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white">
        <Link href={"/auth"}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg transition-transform transform hover:scale-105">
            Please login
          </button>
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white flex flex-col">
      <Head>
        <title>Chat AI</title>
      </Head>
      <header className="flex justify-between p-4 bg-black/30 relative">
        <h1 className="text-lg font-bold">Chat AI</h1>
        <span>Logged in as {user.email}</span>
        <div className="relative">
          <FaUserCircle
            className="text-3xl cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black/70 rounded-md shadow-lg z-10">
              <button
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-black/50"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center p-4 bg-white bg-opacity-20 rounded-lg shadow-lg">
        <ChatContainer onSendMessage={handleSendMessage}>
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              text={message.text}
              sender={message.sender}
            />
          ))}
        </ChatContainer>
      </main>

      <footer className="p-4 bg-gray-800 flex justify-between bg-opacity-30">
        <button
          className="bg-black/30 hover:bg-black/60 p-3 rounded-full text-white font-bold bg-opacity-60"
          onClick={clearChat}
        >
          Clear Chat
        </button>
        <button
          className="bg-black/30 hover:bg-black/60 p-3 rounded-full text-white font-bold bg-opacity-60"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </footer>
    </div>
  );
}
