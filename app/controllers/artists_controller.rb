class ArtistsController < ApplicationController
  def show
    @artist = Artist.find(params[:id])
    @analytics = @artist.analytics(period: params[:period] || "week")

    sort_tracks = params[:sort_tracks] || "a-z"

    render inertia: 'Artist/Show', props: {
      artist: @artist.as_json(methods: :current_listeners),
      analytics: @analytics,
      albums: @artist.albums.ordered.as_json(include: :artist),
      tracks: @artist.tracks.sorted(sort_tracks),
      sort_tracks: sort_tracks
    }
  end
end
