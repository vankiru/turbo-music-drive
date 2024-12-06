import { useState } from "react";
import api from "~/api";

import { ArtistShow } from "~/serializers";

interface AnalyticsProps {
  artist: ArtistShow;
}

export default function Analytics({ artist }: AnalyticsProps) {
  const [analytics, setAnalytics] = useState(artist.analytics);

  const handleShowAnalytics = async (period: string) => {
    const response = await api.artistsAnalytics.show({
      artist_id: artist.id,
      query: { period: period },
    });

    setAnalytics(response.analytics);
  };

  return (
    <div>
      <div className="flex justify-end items-center">
        <div className="flex flex-col items-center mr-2">
          <div className="text-7xl tabular-nums">{analytics.total}</div>
          <h3 className="text-plain text-gray-600"># listeners</h3>
        </div>
        <ul className="text-sm mr-2 flex flex-col justify-between">
          <li
            className={
              "transition-colors" +
              (analytics.period == "week" ? "text-red-500" : "text-black")
            }
          >
            <button
              className="hover:text-red-700"
              onClick={() => handleShowAnalytics("week")}
            >
              weekly
            </button>
          </li>
          <li
            className={
              "transition-colors" +
              (analytics.period == "month" ? "text-red-500" : "text-black")
            }
          >
            <button
              className="hover:text-red-700"
              onClick={() => handleShowAnalytics("month")}
            >
              monthly
            </button>
          </li>
          <li
            className={
              "transition-colors" +
              (analytics.period == "year" ? "text-red-500" : "text-black")
            }
          >
            <button
              className="hover:text-red-700"
              onClick={() => handleShowAnalytics("year")}
            >
              yearly
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
