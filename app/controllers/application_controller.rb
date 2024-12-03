class ApplicationController < ActionController::Base
  private

  def serialize(object, with: nil, **params)
    return {} unless object

    serializer = with || begin
      model = object.try(:model) || object.class
      "#{model.name}Serializer".constantize
    end

    serializer.new(object, params:)
  end
end
