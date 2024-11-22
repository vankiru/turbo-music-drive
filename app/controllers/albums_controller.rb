class AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id])

    render inertia: 'Album/Show', props: {
      album: @album.as_json(include: [:artist, :tracks])
    }
  end
end
