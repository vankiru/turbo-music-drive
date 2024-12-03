class AlbumSerializer < ApplicationSerializer
  attributes :id, :title, :cover_url

  one :artist
  many :tracks, if: proc { params[:include_tracks] }
end