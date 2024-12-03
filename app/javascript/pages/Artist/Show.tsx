import React from 'react';
import { Link } from '@inertiajs/react';

import Header from '~/components/Header';
import Album from '~/components/Album';
import Track from '~/components/Track';
import Analytics from '~/components/Analytics';

import api from '~/api'

export default function Show({ artist, sort_tracks }) {
  return (
    <div>
      <Header/>

      <div className="py-4 flex justify-between items-center">
        <div className="flex justify-items-start">
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mr-4">
            <img src={artist.cover_url} className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center flex-col align-middle">
              <h1 className="text-header-2">{artist.name}</h1>
              {artist.current_listeners > 0 ? (
                <span className="text-red-500 text-small animate-pulse">{artist.current_listeners} listening now</span>
              ) : (
                <span className="text-red-500 text-small">&nbsp;</span>
              )}
            </div>
          </div>
        </div>
        <Analytics artist={artist}/>
      </div>

      <hr className="my-4"/>

      <div className=" -mx-3 pt-2 overflow-x-scroll flex-row flex relative">
        {artist.albums.map((album) => (<Album album={album} />))}
      </div>

      <hr className="my-4"/>

      <div>
        <h2 className="mt-4 text-header-3">Tracks</h2>
        <ul className="w-full border-b border-gray-200 flex text-plain mt-4">
          <li className={"inline-block px-4 text-plain border-b-2 border-white transition-colors" + (sort_tracks == "a-z" && "text-red-500")}>
            <Link href={api.artists.show.path({...artist, query: {sort_tracks: 'a-z'}})} className="hover:text-red-700 text-small pb-[2px]" preserveState preserveScroll>A→Z</Link>
          </li>
          <li className={"inline-block px-4 text-plain border-b-2 border-white transition-colors" + (sort_tracks == "z-a" && "text-red-500")}>
            <Link href={api.artists.show.path({...artist, query: {sort_tracks: 'z-a'}})} className="hover:text-red-700 text-small pb-[2px]" preserveState preserveScroll>Z→Y</Link>
          </li>
          <li className={"inline-block px-4 text-plain border-b-2 border-white transition-colors" + (sort_tracks == "old-new" && "text-red-500")}>
            <Link href={api.artists.show.path({...artist, query: {sort_tracks: 'new-old'}})} className="hover:text-red-700 text-small pb-[2px]" preserveState preserveScroll>Old→New</Link>
          </li>
          <li className={"inline-block px-4 text-plain border-b-2 border-white transition-colors" + (sort_tracks == "new-old" && "text-red-500")}>
            <Link href={api.artists.show.path({...artist, query: {sort_tracks: 'old-new'}})} className="hover:text-red-700 text-small pb-[2px]" preserveState preserveScroll>New→Old</Link>
          </li>
        </ul>
      </div>
      <ul className="mt-2">
        {artist.tracks.map((track, counter) => (<Track track={track} track_counter={counter} />))}
      </ul>
    </div>
  );
}
