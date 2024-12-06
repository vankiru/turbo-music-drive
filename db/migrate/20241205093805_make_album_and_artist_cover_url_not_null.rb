class MakeAlbumAndArtistCoverUrlNotNull < ActiveRecord::Migration[8.0]
  def change
    change_column_null(:albums, :cover_url, false)
    change_column_null(:artists, :cover_url, false)
  end
end
