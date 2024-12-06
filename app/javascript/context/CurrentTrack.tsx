import { createContext, useContext, useReducer, Dispatch } from "react";
import { Track } from "~/serializers";

type TrackType = Track | null;

interface ActionType {
  type: "play";
  track: TrackType;
}

interface ProviderProps {
  children: React.ReactNode;
}

const CurrentTrackContext = createContext<TrackType>(null);
const CurrentTrackDispatchContext = createContext<Dispatch<ActionType>>(
  (_: ActionType) => null,
);

export function CurrentTrackProvider({ children }: ProviderProps) {
  const [currentTrack, currentTrackDispatch] = useReducer(
    currentTrackReducer,
    null,
  );

  return (
    <CurrentTrackContext.Provider value={currentTrack}>
      <CurrentTrackDispatchContext.Provider value={currentTrackDispatch}>
        {children}
      </CurrentTrackDispatchContext.Provider>
    </CurrentTrackContext.Provider>
  );
}

export function useCurrentTrack() {
  return useContext(CurrentTrackContext);
}

export function useCurrentTrackDispatch() {
  return useContext(CurrentTrackDispatchContext);
}

function currentTrackReducer(_state: TrackType, action: ActionType) {
  return action.track;
}
