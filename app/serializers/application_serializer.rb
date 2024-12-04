class ApplicationSerializer
  include Alba::Resource
  include Typelizer::DSL

  class << self
    def one(name, condition = nil, serializer: nil, **options)
      options[:resource] ||= serializer || "#{name}Serializer".classify.constantize
      super(name, condition, **options)
    end

    def many(name, condition = nil, serializer: nil, **options)
      options[:resource] ||= serializer || "#{name.to_s.singularize}Serializer".classify.constantize
      super(name, condition, **options)
    end
  end
end