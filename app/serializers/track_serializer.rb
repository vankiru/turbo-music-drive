class TrackSerializer < ApplicationSerializer
  attributes :id, :title, :duration, :url

  one :artist
  one :album, params: { include_tracks: false }

  typelize url: "string"
end