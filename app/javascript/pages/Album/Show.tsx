import { Link } from "@inertiajs/react";
import api from "~/api";

import Header from "~/components/Header";
import Track from "~/components/Track";
import { Album } from "~/serializers";

interface AlbumProps {
  album: Album;
}

export default function Show({ album }: AlbumProps) {
  return (
    <div>
      <Header />

      <div className="py-4 flex justify-items-start">
        <div className="w-[170px] h-[170px] bg-gray-200 object-fill overflow-hidden mr-4">
          <img src={album.cover_url} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center">
            <h2 className="text-header-3">{album.title}</h2>
          </div>
          <Link
            href={api.artists.show.path(album.artist)}
            className="text-header-4 text-red-500 hover:text-black transition-color"
          >
            {album.artist.name}
          </Link>
        </div>
      </div>

      <hr className="my-4" />

      <ul className="mt-2">
        {album.tracks &&
          album.tracks.map((track, counter) => (
            <Track track={track} track_counter={counter} />
          ))}
      </ul>
    </div>
  );
}
