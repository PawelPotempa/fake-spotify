import useSpotify from "@/hooks/useSpotify";
import { millisToMinutesAndSeconds } from "@/lib/time";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";

interface IProps {
  track: SpotifyApi.PlaylistTrackObject;
  order: number;
}

const Song = ({ track, order }: IProps) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const { id, uri, album, artists, name, duration_ms } = track.track!;

  const playSong = () => {
    setCurrentTrackId(id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [uri],
    });
  };

  return (
    <div
      className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={album.images[0].url}
          alt="album image"
        />
        <div>
          <p className="w-36 lg:w-64 text-white truncate">{name}</p>
          <p className="w-40">{artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{album.name}</p>
        <p>{millisToMinutesAndSeconds(duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
