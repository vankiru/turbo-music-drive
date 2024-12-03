class Artist::ShowSerializer < ArtistSerializer
  attribute :analytics do |artist|
    artist.analytics(period: params[:period])
  end

  many :albums, proc { |albums| albums.ordered }
  many :tracks, proc { |tracks, params| tracks.sorted(params[:sort_tracks])}

  attribute :sort_tracks do
    params[:sort_tracks]
  end
end