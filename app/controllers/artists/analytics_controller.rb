module Artists
  class AnalyticsController < ApplicationController
    def show
      artist = Artist.find(params[:artist_id])

      analytics = serialize(
        artist.analytics(period: params[:period])
      )

      render json: {analytics:}
    end
  end
end
