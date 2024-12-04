import { createContext, useContext, useReducer } from 'react';

const CurrentTrackContext = createContext(null);
const CurrentTrackDispatchContext = createContext(null);

export function CurrentTrackProvider({ children }) {
  const [currentTrack, dispatch] = useReducer(currentTrackReducer, null);

  return (
    <CurrentTrackContext.Provider value={currentTrack}>
      <CurrentTrackDispatchContext.Provider value={dispatch}>
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

function currentTrackReducer(track, action) {
  return action.track;
}
