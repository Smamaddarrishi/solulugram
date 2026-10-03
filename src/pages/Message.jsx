import React, { useState } from "react";
import {
  Search,
  Edit,
  Info,
  Phone,
  Video,
  Image as ImageIcon,
  Smile,
  Heart,
  Send,
  CheckCheck,
  ArrowLeft,
} from "lucide-react";

import { assets } from "../assets/assets";

// Initial conversation data
const initialChats = [
  {
    id: 1,
    name: "Arpita",
    username: "arpita_",
    avatar: assets.arpita,
    online: true,
    unread: 0,
    time: "10:36 AM",
    messages: [
      {
        id: 1,
        text: "Hey! My love ❤️",
        sender: "me",
        time: "10:32 AM",
      },
      {
        id: 2,
        text: "Hey!",
        sender: "them",
        time: "10:33 AM",
      },
      {
        id: 3,
        text: "I want to tell you something on our one year completion.",
        sender: "me",
        time: "10:34 AM",
      },
      {
        id: 4,
        text: "Okay say.",
        sender: "them",
        time: "10:35 AM",
      },
      {
        id: 5,
        text: "Happy One Year Anniversary, my love, ❤️🥹❤️ I still can’t believe we’ve completed one beautiful year together. This year has given me some of the happiest moments of my life, and every memory with you is something I’ll always treasure. You have become such an important part of my life, my happiness, my peace, and my favorite person in this entire world. But today, along with celebrating our love, I also want to say I’m truly sorry for all the mistakes I’ve made, for the times I’ve hurt you, made you upset, or made you feel like you weren’t loved enough. I know that just saying sorry cannot erase the pain I may have caused, but I genuinely regret my faults, and I wish I could take back every moment that made you cry because of me. Please forgive me, my jaan. I never want my mistakes to make you doubt how precious you are to me. You deserve all the love, respect, care, honesty, and happiness in the world, and I want to become a better person for you and for our relationship. I know I’m not perfect, but my love for you is real, and I’m willing to learn from my mistakes and show you through my actions how much you mean to me. I love you more than words could ever explain, more than you can imagine, and more than I could ever put into a single message. You’re not just my girlfriend; you’re the person with whom I want to share my dreams, my struggles, my little moments, and my entire future. I want to keep choosing you every single day, even when things get difficult, and keep building a love that becomes stronger with time. Thank you for being in my life, for loving me, and for giving us this beautiful first year together. On our first anniversary, all I wish for is your forgiveness, your beautiful smile, and many more years of holding your hand and calling you mine. I’m sorry for my mistakes, my love, and I hope you can forgive me and give us the chance to make even more beautiful memories together. Happy one year to us, my Shona. You have my heart, today, tomorrow, and always. I love you endlessly. ❤️🫂💋",
        sender: "me",
        time: "10:36 AM",
      },
    ],
  },
];

// Automatically generate the latest-message preview
const chatsWithLatestMessage = initialChats.map((chat) => {
  const lastMessage = chat.messages[chat.messages.length - 1];

  return {
    ...chat,
    lastMessage: lastMessage
      ? `${lastMessage.sender === "me" ? "You: " : ""}${lastMessage.text}`
      : "",
  };
});

const Messages = () => {
  const [chats, setChats] = useState(chatsWithLatestMessage);
  const [selectedId, setSelectedId] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("");
  const [mobileChatOpen, setMobileChatOpen] = useState(false);

  const selectedChat = chats.find((chat) => chat.id === selectedId);

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Select a conversation
  const selectChat = (chat) => {
    setSelectedId(chat.id);
    setMobileChatOpen(true);

    setChats((prev) =>
      prev.map((item) => (item.id === chat.id ? { ...item, unread: 0 } : item)),
    );
  };

  // Send a new message and update the conversation preview
  const sendMessage = (e) => {
    e.preventDefault();

    const text = message.trim();

    if (!text || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      text,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChats((prev) =>
      prev
        .map((chat) =>
          chat.id === selectedId
            ? {
                ...chat,
                messages: [...chat.messages, newMessage],
                lastMessage: `You: ${text}`,
                time: "now",
              }
            : chat,
        )
        // Move the conversation with the newest message to the top
        .sort((a, b) => {
          if (a.id === selectedId) return -1;
          if (b.id === selectedId) return 1;
          return 0;
        }),
    );

    setMessage("");
  };

  return (
    <div className="h-screen min-h-[550px] w-full overflow-hidden bg-white text-[#262626]">
      <div className="flex h-full w-full">
        {/* LEFT: CONVERSATION LIST */}
        <section
          className={`w-full shrink-0 flex-col border-r border-gray-200 sm:w-[350px] lg:w-[398px] ${
            mobileChatOpen ? "hidden sm:flex" : "flex"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 pb-5 pt-8">
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                rishi.samaddar
              </h1>
              <p className="mt-1 text-sm text-gray-500">Messages</p>
            </div>

            <button
              type="button"
              title="New message"
              className="rounded-full p-2 transition hover:bg-gray-100"
            >
              <Edit size={22} strokeWidth={1.8} />
            </button>
          </div>

          {/* Search */}
          <div className="px-5 pb-4">
            <div className="flex items-center gap-3 rounded-xl bg-[#efefef] px-3.5 py-2.5">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search messages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Conversation heading */}
          <div className="flex items-center justify-between px-5 pb-2 pt-1">
            <h2 className="text-sm font-bold">Messages</h2>
            <button
              type="button"
              className="text-xs font-semibold text-gray-500 hover:text-gray-900"
            >
              Requests
            </button>
          </div>

          {/* Conversation list */}
          <div className="flex-1 overflow-y-auto">
            {filteredChats.length === 0 ? (
              <p className="px-5 py-8 text-center text-sm text-gray-500">
                No conversations found.
              </p>
            ) : (
              filteredChats.map((chat) => (
                <button
                  type="button"
                  key={chat.id}
                  onClick={() => selectChat(chat)}
                  className={`flex w-full items-center gap-3 px-5 py-3 text-left transition hover:bg-gray-50 ${
                    selectedId === chat.id ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="h-[54px] w-[54px] rounded-full object-cover"
                    />

                    {chat.online && (
                      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                    )}
                  </div>

                  {/* Name and latest message */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium">
                        {chat.name}
                      </p>

                      <span className="shrink-0 text-xs text-gray-400">
                        {chat.time}
                      </span>
                    </div>

                    <div className="mt-1 flex items-center gap-2">
                      <p
                        className={`min-w-0 flex-1 truncate text-xs ${
                          chat.unread
                            ? "font-semibold text-gray-900"
                            : "text-gray-500"
                        }`}
                        title={chat.lastMessage}
                      >
                        {chat.lastMessage}
                      </p>

                      {chat.unread > 0 && (
                        <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 px-1.5 text-[10px] font-bold text-white">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </section>

        {/* RIGHT: CHAT WINDOW */}
        <section
          className={`min-w-0 flex-1 flex-col ${
            mobileChatOpen ? "flex" : "hidden sm:flex"
          }`}
        >
          {selectedChat ? (
            <>
              {/* Chat header */}
              <header className="flex h-[76px] shrink-0 items-center justify-between border-b border-gray-200 px-4 sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setMobileChatOpen(false)}
                    className="rounded-full p-1 hover:bg-gray-100 sm:hidden"
                    aria-label="Back to conversations"
                  >
                    <ArrowLeft size={21} />
                  </button>

                  <img
                    src={selectedChat.avatar}
                    alt={selectedChat.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold">
                      {selectedChat.name}
                    </h2>
                    <p className="mt-0.5 text-xs text-gray-500">
                      {selectedChat.online
                        ? "Active now"
                        : selectedChat.username}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3 sm:gap-5">
                  <button
                    type="button"
                    title="Voice call"
                    className="hidden rounded-full p-1.5 hover:bg-gray-100 sm:block"
                  >
                    <Phone size={22} strokeWidth={1.8} />
                  </button>

                  <button
                    type="button"
                    title="Video call"
                    className="rounded-full p-1.5 hover:bg-gray-100"
                  >
                    <Video size={23} strokeWidth={1.8} />
                  </button>

                  <button
                    type="button"
                    title="Conversation information"
                    className="rounded-full p-1.5 hover:bg-gray-100"
                  >
                    <Info size={23} strokeWidth={1.8} />
                  </button>
                </div>
              </header>

              {/* Message history */}
              <div className="flex flex-1 flex-col overflow-y-auto px-4 py-5 sm:px-8">
                {/* Profile introduction */}
                <div className="flex flex-col items-center pb-8 pt-4 text-center">
                  <img
                    src={selectedChat.avatar}
                    alt={selectedChat.name}
                    className="h-24 w-24 rounded-full object-cover"
                  />

                  <h3 className="mt-3 text-base font-semibold">
                    {selectedChat.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    @{selectedChat.username}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Soululugram · Personal conversation
                  </p>
                </div>

                <div className="mb-5 flex justify-center">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] text-gray-500">
                    TODAY
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedChat.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-end gap-2 ${
                        msg.sender === "me" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.sender === "them" && (
                        <img
                          src={selectedChat.avatar}
                          alt={selectedChat.name}
                          className="h-7 w-7 shrink-0 rounded-full object-cover"
                        />
                      )}

                      <div
                        className={`flex max-w-[85%] flex-col ${
                          msg.sender === "me" ? "items-end" : "items-start"
                        }`}
                      >
                        <div
                          className={`whitespace-pre-wrap break-words rounded-[22px] px-4 py-2.5 text-sm leading-relaxed ${
                            msg.sender === "me"
                              ? "bg-gradient-to-br from-[#8338ec] to-[#e1306c] text-white"
                              : "border border-gray-200 bg-white text-gray-900"
                          }`}
                        >
                          {msg.text}
                        </div>

                        {msg.sender === "me" && (
                          <span className="mr-1 mt-1 flex items-center gap-1 text-[10px] text-gray-400">
                            <CheckCheck size={12} />
                            Sent
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message composer */}
              <div className="shrink-0 px-3 pb-4 pt-2 sm:px-6 sm:pb-6">
                <form
                  onSubmit={sendMessage}
                  className="flex min-h-[50px] items-center gap-3 rounded-full border border-gray-300 px-4 py-2 focus-within:border-gray-400"
                >
                  <button
                    type="button"
                    title="Emoji"
                    className="shrink-0 hover:text-gray-500"
                  >
                    <Smile size={25} strokeWidth={1.8} />
                  </button>

                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message..."
                    className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                  />

                  {message.trim() ? (
                    <button
                      type="submit"
                      className="shrink-0 text-sm font-semibold text-[#0095f6] hover:text-[#00376b]"
                    >
                      Send
                    </button>
                  ) : (
                    <div className="flex shrink-0 items-center gap-3">
                      <button
                        type="button"
                        title="Add a photo"
                        className="hover:text-gray-500"
                      >
                        <ImageIcon size={23} strokeWidth={1.8} />
                      </button>

                      <button
                        type="button"
                        title="Send a like"
                        onClick={() => setMessage("❤️")}
                        className="hover:text-gray-500"
                      >
                        <Heart size={23} strokeWidth={1.8} />
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-900">
                <Send size={43} strokeWidth={1.3} />
              </div>

              <h2 className="mt-5 text-xl font-light">Your messages</h2>

              <p className="mt-2 text-sm text-gray-500">
                Send a message to start a conversation.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Messages;
