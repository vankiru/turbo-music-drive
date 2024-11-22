import Player from '~/components/Player';
import { CurrentTrackProvider } from '~/context/CurrentTrack';

export default function Layout({ children }) {
  return (
    <CurrentTrackProvider>
      {children}
      <div className="contents">
        <Player/>
      </div>
    </CurrentTrackProvider>
  )
}