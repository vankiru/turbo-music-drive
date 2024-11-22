import React from 'react';
import { Link } from '@inertiajs/react'
import api from '~/api'

export default function Analytics({ artist, analytics, sort_tracks }) {
  return (
    <div>
      <div className="flex justify-end items-center">
        <div className="flex flex-col items-center mr-2">
          <div className="text-7xl tabular-nums">
            {analytics.total}
          </div>
          <h3 className="text-plain text-gray-600"># listeners</h3>
        </div>
        <ul className="text-sm mr-2 flex flex-col justify-between">
          <li className={"transition-colors" + (analytics.period == "week" ? "text-red-500" : "text-black")}>
            <Link href={api.artists.show.path({...artist, query: {sort_tracks: sort_tracks, period: 'week'}})} className="hover:text-red-700" preserveState preserveScroll>weekly</Link>
          </li>
          <li className={"transition-colors" + (analytics.period == "month" ? "text-red-500" : "text-black")}>
            <Link href={api.artists.show.path({...artist, query: {sort_tracks: sort_tracks, period: 'month'}})} className="hover:text-red-700" preserveState preserveScroll>monthly</Link>
          </li>
          <li className={"transition-colors" + (analytics.period == "year" ? "text-red-500" : "text-black")}>
            <Link href={api.artists.show.path({...artist, query: {sort_tracks: sort_tracks, period: 'year'}})} className="hover:text-red-700" preserveState preserveScroll>yearly</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
