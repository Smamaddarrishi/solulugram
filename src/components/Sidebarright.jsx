import React from "react";
import { assets } from "../assets/assets";

const Sidebarright = () => {
  return (
    <aside className="w-full max-w-[280px] space-y-5">
      {/* Logged-in account */}
      <div className="flex items-center gap-3">
        <img
          className="h-11 w-11 shrink-0 rounded-full object-cover"
          src={assets.rishi}
          alt="Rishi Samaddar"
        />

        <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
          <div className="min-w-0 text-[13px]">
            <p className="truncate font-semibold">rishi.samaddar</p>
            <p className="truncate text-gray-500">Rishi Samaddar</p>
          </div>

          <button
            className="shrink-0 text-xs font-semibold
            text-blue-600 hover:text-gray-900"
          >
            Switch
          </button>
        </div>
      </div>

      {/* Suggestions heading */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-500">
          Account holder kuchupuchu
        </p>
        <button className="text-xs font-semibold hover:text-gray-500">
          See All
        </button>
      </div>

      {/* Suggested account */}
      <div className="flex items-center gap-3">
        <img
          className="h-11 w-11 shrink-0 rounded-full object-cover"
          src={assets.arpita}
          alt="Arpita"
        />

        <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
          <div className="min-w-0 text-[13px]">
            <p className="truncate font-semibold">_arpi_tttaaa</p>
            <p className="truncate text-gray-500">arpi.ta</p>
          </div>

          <button
            className="shrink-0 text-xs font-semibold
            text-blue-600 hover:text-gray-900"
          >
            Follow
          </button>
        </div>
      </div>

      <p className="pt-5 text-xs leading-5 text-gray-400">
        About · Help · Press · API · Jobs · Privacy · Terms
      </p>

      <p className="text-xs text-gray-400">© 2026 SOULULUGRAM</p>
    </aside>
  );
};

export default Sidebarright;
