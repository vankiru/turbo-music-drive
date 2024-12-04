import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { useCurrentTrack } from '~/context/CurrentTrack';
import { Track } from "~/serializers";
import api from '~/api';

interface PlayerProps {
  track: Track;
}

const Player: React.FC<PlayerProps> = () => {
  const track = useCurrentTrack();
  if (!track) return;

  return (
    <div className="sticky bottom-0 h-[80px]">
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-6 p-4">
            <div className="flex items-center gap-4">
              <img
                src={track.album.cover_url}
                alt={`${track.title} artwork`}
                className="w-16 h-16 object-cover rounded-md shadow-lg"
              />
              <div className="flex flex-col">
                <h3 className="text-white font-medium">
                  {track.title}
                </h3>
                <a className="text-red-500 text-sm hover:text-red-300 transition-colors cursor-pointer" href={api.artists.show.path(track.artist)}>
                  {track.artist.name}
                </a>
              </div>
            </div>
            <div className="flex-1">
              <AudioPlayer
                src={track.url}
                showJumpControls={false}
                layout="horizontal"
                autoPlay={true}
                className="custom-player"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;