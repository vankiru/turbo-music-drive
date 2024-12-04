Typelizer.configure do |config|
  config.output_dir = Rails.root.join("app/javascript/serializers")
  config.types_import_path = "~/serializers"
end