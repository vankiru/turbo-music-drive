class ArtistSerializer < ApplicationSerializer
  attributes :id, :name, :cover_url, :current_listeners

  typelize id: "number",
    name: "string",
    cover_url: ["string", {nullable: true}],
    current_listeners: "number"
end