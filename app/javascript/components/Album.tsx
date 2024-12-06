import { Link } from "@inertiajs/react";
import api from "~/api";

import { Album as AlbumType } from "~/serializers";

interface AlbumProps {
  album: AlbumType;
}

export default function Album({ album }: AlbumProps) {
  return (
    <div className="p-2 mx-1 mb-2 bg-opacity-10 rounded-md cursor-pointer w-40 flex-shrink-0">
      <div className="flex flex-col relative">
        <Link
          href={api.albums.show.path(album)}
          className="h-32 mb-1 relative hover:opacity-90 transition-opacity"
        >
          <div className="h-full w-full bg-gray-200">
            <img src={album.cover_url} className="w-full h-full object-cover" />
          </div>
        </Link>

        <Link
          href={api.albums.show.path(album)}
          className="text-small text-ellipsis whitespace-nowrap overflow-hidden hover:text-red-500 transition-colors"
        >
          {album.title}
        </Link>

        <Link
          href={api.artists.show.path(album.artist)}
          className="text-gray-500 text-xsmall text-ellipsis whitespace-nowrap overflow-hidden hover:text-red-500 transition-colors"
        >
          {album.artist.name}
        </Link>
      </div>
    </div>
  );
}
