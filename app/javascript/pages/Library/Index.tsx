import React from 'react';
import Album from '~/components/Album';

export default function Index({ albums }) {
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
