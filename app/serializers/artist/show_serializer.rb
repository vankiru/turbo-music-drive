class Artist::ShowSerializer < ArtistSerializer
  typelize_from Artist

  typelize "ArtistAnalytics"
  attribute :analytics do |artist|
    artist.analytics(period: params[:period])
  end

  many :albums, proc { |albums| albums.ordered }
  many :tracks, proc { |tracks, params| tracks.includes(:artist, :album).sorted(params[:sort_tracks])}
end