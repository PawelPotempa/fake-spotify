import useSpotify from "@/hooks/useSpotify";
import { ChevronDownIcon, Bars4Icon } from "@heroicons/react/24/outline";
import { modalState } from "atoms/modalAtom";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import Songs from "./Songs";

export const colors = [
  "from-slate-500",
  "from-gray-500",
  "from-zinc-500",
  "from-neutral-500",
  "from-stone-500",
  "from-red-500",
  "from-orange-500",
  "from-amber-500",
  "from-yellow-500",
  "from-lime-500",
  "from-green-500",
  "from-emerald-500",
  "from-teal-500",
  "from-cyan-500",
  "from-sky-500",
  "from-blue-500",
  "from-indigo-500",
  "from-violet-500",
  "from-purple-500",
  "from-fuchsia-500",
  "from-pink-500",
  "from-rose-500",
];

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const Hero = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState("");
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const [modal, setModal] = useRecoilState(modalState);

  useEffect(() => {
    setColor(randomColor());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => console.log("something went wrong!", err));
  }, [spotifyApi, playlistId]);

  return (
    <div className="relative flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute flex justify-between top-2 px-2 w-full md:hidden">
        <Bars4Icon
          className="h-10 w-10 text-white"
          onClick={() => setModal((prev) => !prev)}
        />
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt="profile picture"
          />
          <h1 className="text-white">{session?.user.name}</h1>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b  ${color} to-black h-80 text-white p-8`}
      >
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[0]?.url}
          alt=""
        />
        <div>
          <p>PLAYLIST</p>
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {playlist?.name}
          </h2>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
};

export default Hero;
