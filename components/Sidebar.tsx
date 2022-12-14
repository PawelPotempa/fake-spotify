import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { modalState } from "atoms/modalAtom";
import useSpotify from "hooks/useSpotify";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

const Sidebar = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [playlist, setPlaylist] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const [modal, setModal] = useRecoilState(modalState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylist(data.body.items);
      });
    }
  }, [spotifyApi, session]);

  const clickHandler = (id: string) => {
    setPlaylistId(id);
    if (modal) {
      setModal((prev) => !prev);
    }
  };

  return (
    <div
      className={`text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] ${
        !modal && "hidden"
      } ${
        modal &&
        "fixed h-full w-full z-10 bg-black text-lg animate-slidefromleft"
      } md:inline-flex pb-36`}
    >
      <XMarkIcon
        className="absolute top-4 right-4 text-gray-500 h-10 w-10"
        onClick={() => setModal((prev) => !prev)}
      />
      <div className="space-y-4">
        {/* First Section */}
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BuildingLibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="bordert-[0.1px] border-gray-900" />

        {/* Second Section  */}
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-[0.1px] border-gray-900" />

        {/* Playlists Section */}
        {playlist &&
          playlist.map((playlist) => (
            <p
              key={playlist.id}
              className="cursor-pointer hover:text-white"
              onClick={() => clickHandler(playlist.id)}
            >
              {playlist.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
