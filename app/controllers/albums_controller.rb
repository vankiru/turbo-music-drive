class AlbumsController < ApplicationController
  def show
    album = serialize(Album.find(params[:id]), include_tracks: true)

    render inertia: 'Album/Show', props: {album:}
  end
end
