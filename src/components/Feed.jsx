import { useState } from "react";

import { assets } from "../assets/assets";
import {
  BadgeCheck,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Smile,
  Music2,
  Infinity,
} from "lucide-react";

const Feed = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCaption, setShowCaption] = useState(true);
  const [activeSoundVideo, setActiveSoundVideo] = useState(null);

  return (
    <article className="mx-auto w-full max-w-[470px] border-b border-gray-200 pb-5">
      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_1}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “In a world
        full of temporary things, you are my forever. ♾️❤️”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1"></p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <video
          src={assets.video_1}
          autoPlay
          loop
          muted={activeSoundVideo !== "video_1"}
          playsInline
          onClick={() =>
            setActiveSoundVideo((prev) =>
              prev === "video_1" ? null : "video_1",
            )
          }
          className="block max-h-[600px] w-full cursor-pointer object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “My favourite
        place in the world is right next to you. 🫶🏻”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_3}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “Two souls, one
        story, countless memories. ❤️✨”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_4}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “If I had to
        choose again, I'd still choose you. Every single time. 💍”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_5}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “You, me, and a
        lifetime of little moments. 🥹❤️”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_6}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “My favourite
        human, my biggest weakness, my happiest place. 🧿❤️”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_7}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “Officially
        stealing her fries and her heart. 🍟🤍”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_8}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “She's my
        peace, my chaos, and my favourite notification. 🦋”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_9}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “Just two
        idiots in love, creating our own little world. 🫂💕”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>
      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_10}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “Life feels a
        little more magical when I'm holding your hand. ✨🤝”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_11}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “Somewhere
        between hello and forever, I fell in love with you. 🌙”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_12}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “You became my
        favourite chapter in a story I never want to end. 📖❤️”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <video
          src={assets.video_2}
          autoPlay
          loop
          muted={activeSoundVideo !== "video_2"}
          playsInline
          onClick={() =>
            setActiveSoundVideo((prev) =>
              prev === "video_2" ? null : "video_2",
            )
          }
          className="block max-h-[600px] w-full cursor-pointer object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “Not a perfect
        love story, just a real one—and that's my favourite kind. 🥀”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      {/* Post header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={assets.img_2}
          alt="Post"
          className="block max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “If home were a
        person, it would always be you. 🏡🤍”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>

      <div className="flex items-center justify-between py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <img
              src={assets.img_11}
              alt="Wethekuchupucuhus"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-1">
            <span className="truncate text-sm font-semibold">
              wethekuchupucuhus
            </span>

            <BadgeCheck
              size={15}
              fill="#3897F0"
              color="white"
              strokeWidth={2.5}
              className="shrink-0"
            />

            <span className="text-gray-500">·</span>
            <Infinity />
          </div>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={23} />
        </button>
      </div>

      {/* Post image */}
      <div className="overflow-hidden rounded-sm bg-gray-100">
        <video
          src={assets.video_3}
          autoPlay
          loop
          muted={activeSoundVideo !== "video_3"}
          playsInline
          onClick={() =>
            setActiveSoundVideo((prev) =>
              prev === "video_3" ? null : "video_3",
            )
          }
          className="block max-h-[600px] w-full cursor-pointer object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : "text-black"}
          >
            <Heart size={25} fill={liked ? "currentColor" : "none"} />
          </button>

          <button aria-label="Comment">
            <MessageCircle size={25} />
          </button>

          <button aria-label="Share post">
            <Send size={24} />
          </button>
        </div>

        <button aria-label="Save post" onClick={() => setSaved(!saved)}>
          <Bookmark size={25} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">{liked ? "1,251" : "1,250"} likes</p>

      {/* Caption */}
      <div className="mt-1 text-sm">
        <span className="font-semibold">wethekuchupucuhus</span> “Among billions
        of people, my heart somehow found its way to you. 🌍❤️”
        <button
          onClick={() => setShowCaption(!showCaption)}
          className="ml-1 text-gray-500"
        >
          {showCaption ? "less" : "more"}
        </button>
        {showCaption && <p className="mt-1">Memories that stay forever 🫶</p>}
      </div>

      {/* Comments */}
      <button className="mt-2 text-sm text-gray-500">
        View all 24 comments
      </button>

      {/* Add comment */}
      <div className="mt-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button aria-label="Add emoji">
          <Smile size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Post time */}
      <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
        2 hours ago
      </p>
    </article>
  );
};

export default Feed;
