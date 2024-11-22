import React from 'react';
import api from '~/api'
import { useCurrentTrackDispatch } from '~/context/CurrentTrack';

export default function Track({ track, track_counter }) {
  const dispatch = useCurrentTrackDispatch();

  function secondsToDuration(value) {
    let mins = Math.floor(value / 60);
    let secs = (value | 0) % 60;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    return `${mins}:${secs}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    playTrack();
  }

  async function playTrack() {
    const response = await api.tracks.play(track);

    dispatch({
      track: response.props.track
    });
  }

  return (
    <li className="flex flex-row py-1 text-xsmall">
      <span className="text-gray-600 w-6 text-right mr-2">
        {track_counter + 1}
      </span>
      <form onSubmit={handleSubmit} className="flex-grow truncate text-black hover:text-red-500">
        <button type="submit">{track.title}</button>
      </form>
      <span className="text-gray-600 self-end w-10 ml-2 text-right">
        {secondsToDuration(track.duration)}
      </span>
    </li>
  );
}