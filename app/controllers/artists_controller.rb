class ArtistsController < ApplicationController
  def show
    sort_tracks = params[:sort_tracks] || "a-z"

    artist = Artist::ShowSerializer.new(
      Artist.find(params[:id]),
      params: {
        period: "week",
        sort_tracks: sort_tracks
      }
    )

    render inertia: 'Artist/Show', props: {artist:, sort_tracks:}
  end
end
