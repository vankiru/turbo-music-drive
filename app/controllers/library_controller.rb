class LibraryController < ApplicationController
  def index
    albums = serialize(
      Album.all.random.includes(:artist).limit(20)
    )

    render inertia: 'Library/Index', props: {albums:}
  end
end
