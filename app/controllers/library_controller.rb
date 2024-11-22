class LibraryController < ApplicationController
  def index
    @albums = Album.all.random.includes(:artist).limit(20)

    render inertia: 'Library/Index', props: {
      albums: @albums.as_json(include: :artist)
    }
  end
end
