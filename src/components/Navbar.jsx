import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { ChevronRight } from "lucide-react";
import Feed from "./Feed";

const Navbar = () => {
  const storiesRef = useRef(null);

  const stories = [
    { image: assets.img_2, name: "Story 1" },
    { image: assets.img_1, name: "Story 2" },
    { image: assets.img_3, name: "Story 3" },
    { image: assets.img_6, name: "Story 4" },
    { image: assets.img_10, name: "Story 5" },
    { image: assets.img_11, name: "Story 6" },
  ];

  const scrollStories = () => {
    storiesRef.current?.scrollBy({
      left: 280,
      behavior: "smooth",
    });
  };

  return (
    <header className="flex w-full items-center gap-6">
      {/* Logo */}

      {/* Stories */}
      <div className="relative min-w-0 flex-1">
        <div
          ref={storiesRef}
          className="flex items-center gap-4 overflow-x-auto
            scroll-smooth py-2 [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden"
        >
          {stories.map((story) => (
            <button
              key={story.name}
              className="flex shrink-0 flex-col items-center gap-1"
              aria-label={story.name}
            >
              <div
                className="rounded-full bg-gradient-to-tr
                from-yellow-400 via-pink-500 to-purple-600 p-[3px]"
              >
                <img
                  src={story.image}
                  alt=""
                  className="h-20 w-20 rounded-full
                    border-2 border-white object-cover"
                />
              </div>
              <span className="max-w-[72px] truncate text-xs">
                {story.name}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={scrollStories}
          aria-label="Next stories"
          className="absolute ml-145 top-1/2 flex
            -translate-y-1/2 items-center justify-center
            rounded-full bg-white p-1 shadow-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
