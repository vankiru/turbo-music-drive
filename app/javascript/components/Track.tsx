import React from "react";
import {
  useCurrentTrack,
  useCurrentTrackDispatch,
} from "~/context/CurrentTrack";
import { Track as TrackType } from "~/serializers";

interface TrackProps {
  track: TrackType;
  track_counter: number;
}

export default function Track({ track, track_counter }: TrackProps) {
  const currentTrack = useCurrentTrack();
  const currentTrackDispatch = useCurrentTrackDispatch();

  const secondsToDuration = (value: number) => {
    let mins = Math.floor(value / 60);
    let secs = (value | 0) % 60;
    return `${pad(mins)}:${pad(secs)}`;
  };

  const pad = (number: number) => {
    return number.toString().padStart(2, "0");
  };

  const handlePlayTrack = (e: React.FormEvent) => {
    e.preventDefault();
    currentTrackDispatch({ type: "play", track: track });
  };

  return (
    <li className="flex flex-row py-1 text-xsmall">
      <span className="text-gray-600 w-6 text-right mr-2">
        {track_counter + 1}
      </span>
      <form
        onSubmit={handlePlayTrack}
        className="flex-grow truncate text-black hover:text-red-500"
      >
        <button type="submit">{track.title}</button>
      </form>
      <span className="align-baseline">
        {currentTrack && currentTrack.id == track.id && (
          <span className="inline-block rounded-full h-3 w-3 bg-red-500 animate-pulse"></span>
        )}
        <span className="text-gray-600 self-end w-10 ml-2 text-right">
          {secondsToDuration(track.duration)}
        </span>
      </span>
    </li>
  );
}
