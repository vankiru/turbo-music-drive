class Artist::AnalyticsSerializer < ApplicationSerializer
  attributes :period, :total

  typelize period: "string", total: "number"
end