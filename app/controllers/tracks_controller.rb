class TracksController < ApplicationController
  after_action :track_listener

  def play
    @track = Track.find(params[:id])

    render json: {
      props: {
        track: @track.as_json(methods: :url, include: [:artist, :album])
      }
    }
  end

  private

  def track_listener = @track.artist.track_current_listener(Current.turbo_session_id)
end
