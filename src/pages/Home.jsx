import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Sidebarright from "../components/Sidebarright";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <main className="ml-60 min-h-screen">
        <div className="mx-auto flex max-w-[1100px] gap-8 px-6">
          <section className="min-w-0 flex-1">
            <Navbar />

            <div className="mx-auto mt-6 max-w-[470px]">
              <Feed />
            </div>
          </section>

          <aside className="hidden w-[300px] shrink-0 pt-8 lg:block">
            <Sidebarright />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
