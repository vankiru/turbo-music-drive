import Player from "~/components/Player";
import { CurrentTrackProvider } from "~/context/CurrentTrack";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <CurrentTrackProvider>
      {children}
      <div className="contents">
        <Player />
      </div>
    </CurrentTrackProvider>
  );
}
