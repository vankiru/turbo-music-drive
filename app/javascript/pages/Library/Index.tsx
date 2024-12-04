import React from 'react';
import Album from '~/components/Album';
import { Album as AlbumType } from '~/serializers';

interface AlbumProps {
  albums: Array<AlbumType>;
}

export default function Index({ albums }: AlbumProps) {
  return (
    <div>
      <h2 className="mt-4 text-header-2">
        Turbo <span className="text-red-500 font-bold">Music</span> Drive
      </h2>
      <hr className="my-4" />

      <div className="-mx-3 pt-2 flex flex-wrap relative">
        {albums.map((album) => (<Album album={album} />))}
      </div>
    </div>
  );
}
