class ArtistSerializer < ApplicationSerializer
  attributes :id, :name, :cover_url, :current_listeners

  typelize current_listeners: "number"
end