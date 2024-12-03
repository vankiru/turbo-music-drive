class ArtistsController < ApplicationController
  def show
    artist = Artist::ShowSerializer.new(
      Artist.find(params[:id]),
      params: {
        period: params[:period] || "week",
        sort_tracks: params[:sort_tracks] || "a-z"
      }
    )

    render inertia: 'Artist/Show', props: {artist:}
  end
end
