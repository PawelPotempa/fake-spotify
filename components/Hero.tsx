import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { randomColor } from "@/lib/utils";

const Hero = () => {
  const { data: session } = useSession();
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(randomColor());
  }, []);

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt="profile picture"
          />
          <h1>{session?.user.name}</h1>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}
      >
        <img src="" alt="" />
      </section>
    </div>
  );
};

export default Hero;
